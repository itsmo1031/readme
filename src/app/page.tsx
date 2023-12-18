'use client';

import { useTheme } from 'next-themes';
import styles from './page.module.scss';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="container">
      <div className="content">
        <h1 className="title">Theme Toggle</h1>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={styles['toggle-button']}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'light' : 'dark'}
        </button>
      </div>
    </main>
  );
}
