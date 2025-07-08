import { useState } from 'react';

export function useLocalStorage<T extends { id: number }>(
  key: string,
  startValue: T[],
): [T[], (v: T) => void] {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    }

    try {
      return JSON.parse(data);
    } catch {
      localStorage.removeItem(key);
      return startValue;
    }
  });

  const save = (newItem: T) => {
    const data = localStorage.getItem(key);
    let parsed: T[] = [];

    if (data !== null) {
      try {
        parsed = JSON.parse(data);
      } catch {
        parsed = [];
      }
    }

    const isAlreadyExists = parsed.some((item) => item.id === newItem.id);

    const updatedArray =
      isAlreadyExists ?
        parsed.filter((item) => item.id !== newItem.id)
      : [...parsed, newItem];

    localStorage.setItem(key, JSON.stringify(updatedArray));
    setValue(updatedArray);
  };

  return [value, save];
}
