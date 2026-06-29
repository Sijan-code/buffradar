'use client';
import { useEffect } from 'react';

export default function TvRemoteController() {
  useEffect(() => {
    const handleRemoteKeys = (e) => {
      if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 250, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -250, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleRemoteKeys);
    return () => window.removeEventListener('keydown', handleRemoteKeys);
  }, []);
  return null;
}
