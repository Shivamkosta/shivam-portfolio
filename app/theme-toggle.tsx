"use client";

import { useEffect, useRef } from "react";
import { themes } from "../content";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const select = selectRef.current;
    if (!saved || !select || !themes.some((item) => item.value === saved)) return;
    select.value = saved;
    document.documentElement.dataset.theme = saved;
  }, []);

  return (
    <label className="theme-toggle">
      theme
      <select
        ref={selectRef}
        aria-label="theme"
        defaultValue="control"
        onChange={(event) => {
          const value = event.target.value;
          document.documentElement.dataset.theme = value;
          localStorage.setItem(STORAGE_KEY, value);
        }}
      >
        {themes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
