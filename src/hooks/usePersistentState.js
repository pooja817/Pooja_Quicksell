import { useState, useEffect } from "react";

const usePersistentState = (key, defaultValue) => {
  // Initialize state from localStorage or default value
  const [state, setState] = useState(() => {
    try {
      const persistedValue = localStorage.getItem(key);
      return persistedValue !== null ? persistedValue : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, state);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default usePersistentState;
