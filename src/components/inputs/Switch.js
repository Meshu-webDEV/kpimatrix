import React, { useState } from "react";
import { Icon, ICON_NAMES } from "../../lib/icons";

const Switch = () => {
  const [theme, setTheme] = useState(() => {
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
    <div
      onClick={toggleTheme}
      className="h-[23px] w-[46px] bg-matrix-violet-300 rounded-full relative hover:cursor-pointer transform xl:scale-105 2xl:scale-125"
    >
      <div
        className={`${
          theme === "dark" ? "switch-slide-right" : "switch-slide-left"
        } bg absolute left-[2px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-matrix-violet-100 flex justify-center items-center`}
      >
        <div className="btn w-[15px] h-[15px] z-10 rounded-full absolute bg-matrix-white-100  transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        {theme === "dark" ? (
          <Icon
            ICON_NAME={ICON_NAMES.SUN}
            className={` w-[13px] h-[13px] text-matrix-pink-400 pr-[1px] z-40`}
          />
        ) : (
          <Icon
            ICON_NAME={ICON_NAMES.MOON}
            className={` w-[13px] h-[13px] text-matrix-pink-400 pr-[0.5px] z-40`}
          />
        )}
      </div>
    </div>
  );
};

export default Switch;
