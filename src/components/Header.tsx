import React from 'react';
import { AnnouncementBar } from './header/AnnouncementBar';
import { Navigation } from './header/Navigation';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <Navigation />
    </header>
  );
};