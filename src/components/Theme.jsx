import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme state
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // State to track if dark mode is enabled

    // Load saved theme preference from localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('isDarkMode'); // Retrieve saved theme preference
        if (savedTheme !== null) {
            setIsDarkMode(savedTheme === 'true'); // Set the theme state based on saved preference
        }
    }, []);

    // Save theme preference to localStorage and update the <html> element's class
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode); // Save the current theme preference
        document.documentElement.classList.toggle('dark', isDarkMode); // Toggle the 'dark' class on <html>
    }, [isDarkMode]);

    // Function to toggle between light and dark mode
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode); // Invert the current theme state
    };

    return (
        // Provide the theme state and toggle function to child components
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// Toggle button component with Tailwind styling
export const ThemeToggleButton = () => {
    const { isDarkMode, toggleTheme } = useTheme(); // Access theme state and toggle function

    return (
        <button
            onClick={toggleTheme} // Toggle theme on button click
            aria-pressed={isDarkMode} // Accessibility attribute to indicate the current state
            className="px-4 py-2 rounded transition bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
            {/* Display appropriate icon and text based on the current theme */}
            {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};
