'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';
import styles from './page.module.scss';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(localStorage.getItem('theme') || 'light');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const useSystemTheme = () => {
    setTheme('system');
    setCurrentTheme('system');
  };

  return (
    <main className="container">
      <div className="content">
        <h1 className="title">Theme Toggle</h1>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={styles['toggle-button']}
          onClick={toggleTheme}
        >
          {currentTheme === 'dark' ? 'light' : 'dark'}
        </button>

        <button
          aria-label="Use System Theme"
          type="button"
          className={styles['toggle-button']}
          onClick={useSystemTheme}
        >
          Use System Theme
        </button>

        <ThemeSwitch />
      </div>
    </main>
  );
}
