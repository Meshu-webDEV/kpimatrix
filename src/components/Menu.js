import React from "react";
import { useEffect } from "react";
import { Icon, ICON_NAMES } from "../lib/icons";
import Button from "./inputs/Button";

import { ReactComponent as FacebookCircle } from "../lib/assets/facebook-circle.svg";
import { ReactComponent as Instagram } from "../lib/assets/instagram.svg";
import { ReactComponent as Youtube } from "../lib/assets/youtube.svg";
import { ReactComponent as Attraction1 } from "../lib/assets/attraction-1.svg";
import { ReactComponent as Booking } from "../lib/assets/booking.svg";
import { ReactComponent as Email } from "../lib/assets/email.svg";
import { ReactComponent as Conversion } from "../lib/assets/conversion.svg";
import { ReactComponent as Ads } from "../lib/assets/ads.svg";
import { ReactComponent as Content } from "../lib/assets/content.svg";
import { ReactComponent as Social } from "../lib/assets/social.svg";
import { ReactComponent as Dollar } from "../lib/assets/dollar.svg";

import { useState } from "react";

const Menu = ({ open, setOpen }) => {
  //

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    if (open) return document.body.classList.add("disable-scroll");
    document.body.classList.add("enable-scroll");
  }, []);

  return (
    <div className="menu absolute inset-0 w-screen min-h-[102vh] pb-10 text-matrix-black-900 bg-gradient-to-br from-matrix-blue-100/90 to-matrix-pink-400/60 dark:to-matrix-pink-400/70 menu-slide-in z-[999]">
      <div className="backdrop-blur-lg bg-white/60 dark:bg-matrix-black-800/95 h-[100%] w-[100%] filter inset-0 z-10 absolute text-red-700" />
      <div className="w-full h-full pt-20 max-h-[102vh] overflow-y-scroll relative text-matrix-pink-400">
        <div className="hover:cursor-pointer" onClick={() => setOpen(false)}>
          <Icon
            ICON_NAME={ICON_NAMES.X}
            className="w-7 h-7 z-[999] absolute right-5 top-11"
          />
        </div>
        <Icon
          ICON_NAME={ICON_NAMES.LOGO}
          className="w-9 h-9 z-[999] absolute left-5 top-10"
        />

        <div className="flex flex-col space-y-12 z-[999] pt-20 transform absolute left-1/2 -translate-x-1/2 text-black dark:text-white text-xl w-full px-8 md:w-[60%]">
          {/* features */}
          <div
            className="hover:underline hover:cursor-pointer hover:text-matrix-black-900 dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 text-matrix-black-800 flex space-x-3 justify-center items-center"
            onClick={() => setFeaturesOpen((p) => !p)}
          >
            <span>Features</span>
            <Icon
              ICON_NAME={ICON_NAMES.TRIANGLE}
              className={`w-2.5 h-2.5 text-matrix-violet-300 transform ${
                featuresOpen && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`flex-col justify-start space-y-8 ${
              featuresOpen ? "flex" : "hidden"
            }`}
          >
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Attraction1 className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold">Lead Generation</div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Booking className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold">
                  Appointments Booking
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Dollar className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Conversion Rate Optimization
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Conversion className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  High Converting Sales Pages
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Email className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Email Marketing
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Social className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Social Media Engagement
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Ads className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Advertising Copy
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Content className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Advertising Creatives
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="hover:underline hover:cursor-pointer hover:text-matrix-black-900 dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 text-matrix-black-800 flex space-x-3 justify-center items-center">
            <span>Pricing</span>
          </div>
          <div
            className="hover:underline hover:cursor-pointer hover:text-matrix-black-900 dark:hover:text-white ease-in duration-75 transition-transform dark:text-matrix-white-200 text-matrix-black-800 flex space-x-3 justify-center items-center "
            onClick={() => setResourcesOpen((p) => !p)}
          >
            <span>Resources</span>
            <Icon
              ICON_NAME={ICON_NAMES.TRIANGLE}
              className={`w-2.5 h-2.5 text-matrix-violet-300 transform ${
                resourcesOpen && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`flex-col justify-start space-y-8 ${
              resourcesOpen ? "flex" : "hidden"
            }`}
          >
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Attraction1 className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold">Lead Generation</div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Booking className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold">
                  Appointments Booking
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Dollar className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  Conversion Rate Optimization
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center">
              <div className="shrink-0 grow">
                <Conversion className="transform scale-110" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold whitespace-nowrap">
                  High Converting Sales Pages
                </div>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="hover:underline hover:cursor-pointer hover:text-matrix-blue-200 ease-in duration-75 transition-transform text-matrix-violet-300 flex space-x-3 justify-center items-center">
            <span>Login</span>
          </div>
          <div className="hover:underline hover:cursor-pointer hover:text-white ease-in duration-75 transition-transform text-matrix-violet-300 flex space-x-3 justify-center items-center">
            <Button size="md" text="Start Trial" />
          </div>
          <div className="flex flex-col space-y-8 dark:text-matrix-white-200  text-matrix-black-800 text-base whitespace-nowrap text-center">
            <div className="dark:opacity-7 0">
              Currently Accepting Followers
            </div>
            <div className="flex space-x-3 justify-center items-center filter">
              <FacebookCircle className="cursor-pointer hover:brightness-110 filter" />
              <Youtube className="cursor-pointer hover:brightness-110 filter" />
              <Instagram className="cursor-pointer hover:brightness-110 filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
