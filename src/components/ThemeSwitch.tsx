'use client';

import { PiXBold, PiSunDimFill, PiMoonStarsFill, PiMonitorFill } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import { ReactElement, useState, useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './ThemeSwitch.module.scss';

type Theme = 'light' | 'system' | 'dark';

const createIcon = (Icon: IconType, size: number): ReactElement => <Icon size={size} />;

const themeIcons: Record<Theme, ReactElement> = {
  light: createIcon(PiSunDimFill, 28),
  system: createIcon(PiMonitorFill, 26),
  dark: createIcon(PiMoonStarsFill, 28),
};

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.root}>
      <DropdownMenu.Root onOpenChange={() => setOpen(!open)}>
        <DropdownMenu.Trigger asChild className={styles.trigger}>
          <button type="button" aria-label="Theme change button">
            {open ? <PiXBold size={24} /> : themeIcons[theme as Theme]}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content side="top" className={styles.content}>
            {Object.entries(themeIcons).map(([key, icon]) => (
              <DropdownMenu.Item key={key} className={styles.item}>
                <button
                  className={styles['content-button']}
                  type="button"
                  aria-label={`Button change to ${key} theme`}
                  onClick={() => setTheme(key)}
                >
                  {icon}
                </button>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
