import React from "react";
import { Icon, ICON_NAMES } from "../../lib/icons";

const Button = ({
  text,
  disabled,
  type,
  variant = "primary",
  ICON_NAME,
  onClick,
  size = "sm",
  className,
}) => {
  //

  const determineVariantClassNames = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-matrix-violet-300 to-matrix-blue-600 focus:ring-matrix-violet-300 text-white";
      case "success":
        return "bg-emerald-600 focus:ring-slate-500 dark:bg-emerald-600 text-white";
      case "warning":
        return "bg-yellow-600 focus:ring-slate-500 dark:bg-yellow-600 text-white";
      case "error":
        return "bg-red-600 focus:ring-slate-500 dark:bg-red-600 text-white";
      case "secondary":
        return "bg-slate-200 focus:ring-slate-500 dark:bg-slate-200 text-gray-900";
      case "transparent":
        return "bg-gray-900/70 focus:ring-gray-500 dark:bg-gray-900/70  text-white";
      default:
        return "bg-rose-600 focus:ring-slate-500 dark:bg-rose-600 text-white";
    }
  };

  switch (size) {
    case "xs":
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-105 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-full text-xs w-full sm:w-auto px-4 py-2 3xl:px-6 3xl:text-sm text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
    case "sm":
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-105 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-4 py-2 text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
    case "md":
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-105 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-full text-base w-full sm:w-auto px-6 py-3 text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
    case "lg":
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-105 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-full text-base w-full sm:w-auto px-9 py-3 text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
    case "xl":
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-105 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-full text-lg w-full sm:w-auto px-11 py-3 3xl:text-xl 3xl:px-16 text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
    default:
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          type={type}
          disabled={disabled}
          className={`flex space-x-2 max-w-max whitespace-nowrap justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-95 hover:shadow-sm focus:ring-2 focus:outline-none font-medium rounded-lg text-xs w-full sm:w-auto pr-1.5 pl-2 py-1.5 text-center filter ${className}`}
        >
          <span className={!ICON_NAME ? "pl-2 pr-2.5" : ""}>{text}</span>
          {ICON_NAME ? (
            <Icon ICON_NAME={ICON_NAME} className="w-5 h-5" />
          ) : null}
        </button>
      );
  }
};

export default Button;
