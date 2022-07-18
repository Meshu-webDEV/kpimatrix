import React from "react";
import { Icon, ICON_NAMES } from "../../lib/icons";
import { ReactComponent as MatrixLogo } from "../../lib/assets/matrix-logo.svg";
import Switch from "../inputs/Switch";
import ThemeToggle from "../inputs/ThemeToggle";
import Button from "../inputs/Button";
import { useState } from "react";
import Menu from "../Menu";
import FeaturesMenu from "../FeaturesMenu";
import ResourcesMenu from "../ResourcesMenu";

const DesktopNavbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="desktop-nav sticky inset-0 h-20 3xl:h-24 6xl:h-32 z-50 flex justify-between items-center col-span-4 sm:col-span-8 xl:col-span-12 px-4 sm:px-14 md:px-16 lg:px-24 5xl:px-36 6xl:px-44 dark:bg-matrix-black-400">
      {menuOpen ? (
        <Menu open={menuOpen} setOpen={setMenuOpen} />
      ) : (
        <Menu open={false} setOpen={setMenuOpen} />
      )}
      <div className="left cursor-pointer flex space-x-2 justify-center items-center">
        <Icon
          ICON_NAME={ICON_NAMES.LOGO}
          className="w-9 h-8 3xl:w-11 3xl:h-9 6xl:w-16 6xl:h-12"
        />
        <div className="tracking-[0.3rem] text-lg xl:text-xl 3xl:text-2xl 5xl:text-4xl transform 3xl:pl-2 3xl:scale-105 pb-0.5">
          MELBUL
        </div>
      </div>
      <div className="right font-light text-sm 2xl:text-lg 6xl:text-xl 2xl:space-x-14 3xl:space-x-16 flex space-x-8 justify-center items-center">
        <Switch />
        <div className="space-x-10 2xl:space-x-16 justify-center items-center hidden xl:flex">
          <div
            className="relative hover:underline hover:cursor-pointer hover:text-matrix-black-900 dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 flex space-x-3 justify-center items-center"
            onClick={() =>
              setFeaturesOpen((p) => {
                if (!p) setResourcesOpen(false);
                return !p;
              })
            }
          >
            <span>Features</span>
            <Icon
              ICON_NAME={ICON_NAMES.TRIANGLE}
              className={`w-2.5 h-2.5 text-matrix-violet-300 transform ${
                featuresOpen && "rotate-180"
              }`}
            />
            {featuresOpen ? <FeaturesMenu /> : null}
            {featuresOpen ? (
              <div className="absolute cursor-default w-[200vw] h-[200vh] -z-10" />
            ) : null}
          </div>
          <div className="hover:underline hover:cursor-pointer dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 flex space-x-3 justify-center items-center">
            <span>Pricing</span>
          </div>
          <div
            className="relative hover:underline hover:cursor-pointer hover:text-matrix-black-900 dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 flex space-x-3 justify-center items-center"
            onClick={() =>
              setResourcesOpen((p) => {
                if (!p) setFeaturesOpen(false);
                return !p;
              })
            }
          >
            <span>Resources</span>
            <Icon
              ICON_NAME={ICON_NAMES.TRIANGLE}
              className={`w-2.5 h-2.5 text-matrix-violet-300 transform ${
                resourcesOpen && "rotate-180"
              }`}
            />
            {resourcesOpen ? <ResourcesMenu /> : null}
            {resourcesOpen ? (
              <div className="absolute cursor-default w-[200vw] h-[200vh] -z-10" />
            ) : null}
          </div>
          <div className="hover:underline hover:cursor-pointer hover:text-matrix-blue-200 ease-in duration-75 transition-transform text-matrix-violet-300 flex space-x-3 justify-center items-center">
            <span>Login</span>
          </div>
          <div className="hover:underline hover:cursor-pointer hover:text-white ease-in duration-75 transition-transform text-matrix-violet-300 flex space-x-3 justify-center items-center">
            <Button size="xs" text="Start Trial" />
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => setMenuOpen(true)}>
          <Icon
            ICON_NAME={ICON_NAMES.MATRIX_BURGER}
            className="w-7 h-7 text-matrix-pink-400 xl:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
