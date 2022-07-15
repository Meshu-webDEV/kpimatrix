import React, { useEffect, useState } from "react";
import { toISODate } from "../../lib/utils";

function showPopup(e) {
  this.showPicker();
}

const Datepicker = ({ name, id = "dateInput", label, value, onChange }) => {
  useEffect(() => {
    document.getElementById(id).addEventListener("focus", showPopup);

    return () =>
      document.getElementById(id).removeEventListener("focus", showPopup);
  }, []);

  return (
    <div>
      <label
        className="font-light tracking-wide pl-1 capitalize text-white text-sm"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="date-input bg-slate-400 w-32 py-2.5 border text-xs border-slate-500 text-gray-900 rounded-md focus:ring-slate-600 focus:border-slate-500 block px-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        type="date"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Datepicker;
