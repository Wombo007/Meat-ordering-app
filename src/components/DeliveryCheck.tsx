import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDeliveryStore } from '../store/deliveryStore';
import { getDeliveryOptions, formatTimeWindow } from '../utils/deliveryUtils';
import { DeliveryOption } from '../services/courier/types';

export const DeliveryCheck = () => {
  const navigate = useNavigate();
  const { setDeliveryInfo } = useDeliveryStore();
  const [postcode, setPostcode] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const checkDeliveryOptions = async () => {
      if (postcode.length !== 4) {
        setDeliveryOptions([]);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const options = await getDeliveryOptions(postcode);
        
        if (!isMounted) return;
        
        setDeliveryOptions(options);
        if (options.length === 0) {
          setError('Sorry, delivery is not available in your area');
        }
      } catch (error) {
        if (!isMounted) return;
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unable to check delivery availability');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const timeoutId = setTimeout(checkDeliveryOptions, 500);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [postcode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!postcode || !date || !time) {
      setError('Please fill in all fields');
      return;
    }

    setIsChecking(true);

    try {
      setDeliveryInfo({
        postcode,
        date,
        time
      });

      navigate('/your-box');
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsChecking(false);
    }
  };

  const selectedDateOptions = deliveryOptions.find(option => option.date === date);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="postcode" className="block text-lg font-semibold text-[#1d1d1b] mb-2">
            Check delivery to your area
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="postcode"
              value={postcode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setPostcode(value);
                if (value.length !== 4) {
                  setDate('');
                  setTime('');
                }
              }}
              placeholder="Enter your postcode"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8b086] focus:border-transparent outline-none"
              maxLength={4}
            />
          </div>
          {isLoading && (
            <p className="mt-2 text-sm text-gray-500">Checking availability...</p>
          )}
        </div>

        {deliveryOptions.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  id="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setTime('');
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8b086] focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Select date</option>
                  {deliveryOptions.map((option) => (
                    <option key={option.date} value={option.date}>
                      {new Date(option.date).toLocaleDateString('en-AU', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedDateOptions && (
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8b086] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select time</option>
                    {selectedDateOptions.timeWindows
                      .filter(window => window.available)
                      .map((window, index) => (
                        <option
                          key={index}
                          value={formatTimeWindow(window.startTime, window.endTime)}
                        >
                          {formatTimeWindow(window.startTime, window.endTime)}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isChecking || !date || !time}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors
            ${isChecking || !date || !time
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#e8b086] hover:bg-[#d89b71]'
            }`}
        >
          {isChecking ? 'Checking...' : 'Check Availability'}
        </button>
      </form>
    </div>
  );
};