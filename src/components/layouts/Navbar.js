import React from "react";
import { Icon, ICON_NAMES } from "../../lib/icons";
import { ReactComponent as MatrixLogo } from "../../lib/assets/matrix-logo.svg";
import Switch from "../inputs/Switch";
import ThemeToggle from "../inputs/ThemeToggle";

const Navbar = ({ className }) => {
  return (
    <div className="nav w-full">
      <div
        className={`flex backdrop-blur-lg dark:bg-matrix-black-400/15 justify-between items-center py-3 sm:py-10 xl:hidden`}
      >
        {/* logo */}
        <Icon
          ICON_NAME={ICON_NAMES.LOGO}
          className="w-10 h-10 block sm:hidden"
        />
        <MatrixLogo className="sm:block hidden" />
        {/* buttons */}
        <div className="flex justify-center items-center space-x-7">
          <Switch />
          <Icon
            ICON_NAME={ICON_NAMES.MATRIX_BURGER}
            className="w-7 h-7 text-matrix-pink-400"
          />
        </div>
      </div>
      <div
        className={`backdrop-blur-lg dark:bg-matrix-black-400/15 justify-between items-center py-3 sm:py-10 hidden xl:flex`}
      >
        {/* logo */}
        <Icon
          ICON_NAME={ICON_NAMES.LOGO}
          className="w-10 h-10 block absolute transform translate-y-500 z-[999]"
        />
        <div className="tracking-[0.3rem] text-lg pb-0.5">MELBUL</div>
        {/* buttons */}
        <div className="flex justify-center items-center space-x-7">
          <Switch />
          <Icon
            ICON_NAME={ICON_NAMES.MATRIX_BURGER}
            className="w-7 h-7 text-matrix-pink-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
