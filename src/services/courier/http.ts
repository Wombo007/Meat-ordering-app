import { courierConfig } from './config';

export class HttpError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'HttpError';
  }
}

interface ApiError {
  error?: {
    message: string;
    code: string;
  };
}

export async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 10000
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...courierConfig.headers,
        ...options.headers
      }
    });

    if (!response.ok) {
      const errorData = await response.json() as ApiError;
      throw new HttpError(
        errorData.error?.message || `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new HttpError('Request timed out');
      }
      throw new HttpError(error.message);
    }
    throw new HttpError('Unknown error occurred');
  } finally {
    clearTimeout(timeoutId);
  }
}