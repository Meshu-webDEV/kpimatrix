import React from "react";

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

const ResourcesMenu = () => {
  return (
    <div className="bg-matrix-white-100/95 dark:bg-matrix-black-800/95 shadow-md absolute top-full transform translate-y-3 left-1/2 -translate-x-[65%] flex justify-evenly p-4 z-[999]">
      <div className=" flex-col justify-start z-40">
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Attraction1 className="transform" />
          </div>
          <div className="flex flex-col space-y-2 pb-5">
            <div className="text-base font-semibold">Lead Generation</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Booking className="transform" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-base font-semibold">Appointments Booking</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex-col justify-start z-40">
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Attraction1 className="transform" />
          </div>
          <div className="flex flex-col space-y-2 pb-5">
            <div className="text-base font-semibold">Lead Generation</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Booking className="transform" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-base font-semibold">Appointments Booking</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex-col justify-start z-40">
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Attraction1 className="transform" />
          </div>
          <div className="flex flex-col space-y-2 pb-5">
            <div className="text-base font-semibold">Lead Generation</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="border-l pl-6 pr-2 mr-2 border-gray-300 hover:bg-matrix-blue-100/10 hover:border-matrix-blue-200 dark:hover:border-matrix-pink-400 flex space-x-6 justify-center items-center min-w-[310px]">
          <div className="shrink-0 grow">
            <Booking className="transform" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-base font-semibold">Appointments Booking</div>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
