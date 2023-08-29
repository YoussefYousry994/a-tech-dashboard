import React, { createContext, useState } from "react";

// Create a theme context
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Create a ThemeProvider component
export const ThemeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
