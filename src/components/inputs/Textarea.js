import React from "react";

const Textarea = ({ type, name, label, onChange, value }) => {
  return (
    <div className="flex flex-col space-y-0.5">
      <label
        className="font-light tracking-wide pl-1 capitalize text-white text-sm"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        id="message"
        rows="4"
        name={name}
        onChange={onChange}
        value={value}
        style={{ minHeight: "86px" }}
        className="p-2.5 max-h-52 bg-slate-400 border text-xs border-slate-500 text-gray-900 rounded-md focus:ring-slate-600 focus:border-slate-500 block w-full px-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
      ></textarea>
    </div>
  );
};

export default Textarea;
