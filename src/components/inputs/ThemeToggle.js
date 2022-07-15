import React, { useState } from "react";
import { Icon, ICON_NAMES } from "../../lib/icons";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    console.log(window.document.documentElement.classList.value);
    return window.document.documentElement.classList.value;
  });

  const toggleTheme = () => {
    setTheme((previousTheme) => {
      switch (previousTheme) {
        case "dark":
          localStorage.theme = "light";
          window.document.documentElement.classList.replace("dark", "light");
          return "light";
        case "light":
          localStorage.theme = "dark";
          window.document.documentElement.classList.replace("light", "dark");
          return "dark";
        default:
          break;
      }
    });
  };

  return (
    <div className="flex space-x-2 justify-center items-center transform scale-90">
      <span className="ml-3 text-sm font-medium">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <span className="text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </span>
      <label
        htmlFor="theme-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="theme-toggle"
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="w-[48px] h-[23px] bg-matrix-violet-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-matrix-violet-500  rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[4px] after:bg-matrix-white-100 after:border-none after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-matrix-violet-300 after:content-sun after:pl-[2.5px] after:stroke-current after:border after:border-matrix-white-200 text-matrix-pink-600"></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
