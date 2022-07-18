import React, { useEffect, useRef } from "react";
import Navbar from "../components/layouts/Navbar";
import { useState } from "react";
import Button from "../components/inputs/Button";
import { useInViewport } from "react-in-viewport";
import ImageGallery from "react-image-gallery";
import AnimatedConfetti from "../components/AnimatedConfetti";

// Assets
import { ReactComponent as Sphere } from "../lib/assets/sphere.svg";
import { ReactComponent as Facebook } from "../lib/assets/facebook.svg";
import { ReactComponent as Heart } from "../lib/assets/heart.svg";
import { ReactComponent as SelectTime } from "../lib/assets/select-time.svg";
import { ReactComponent as AvailableDays } from "../lib/assets/available-days.svg";
import { ReactComponent as Analytics } from "../lib/assets/analytics.svg";
import { ReactComponent as Quote } from "../lib/assets/quote.svg";
import { ReactComponent as CardLeft } from "../lib/assets/card-left.svg";
import { ReactComponent as CardCenter } from "../lib/assets/card-center.svg";
import { ReactComponent as CardRight } from "../lib/assets/card-right.svg";
import { ReactComponent as PuzzlePiece } from "../lib/assets/puzzle-piece.svg";
import { ReactComponent as ReviewCard } from "../lib/assets/review-card.svg";
import { ReactComponent as Speaker } from "../lib/assets/speaker.svg";
import { ReactComponent as Rocket } from "../lib/assets/rocket.svg";
import { ReactComponent as Bubble } from "../lib/assets/bubble.svg";
import { ReactComponent as Bubble2 } from "../lib/assets/bubble-2.svg";
import { ReactComponent as Bubble3 } from "../lib/assets/bubble-3.svg";
import { ReactComponent as Telegram } from "../lib/assets/telegram-logo.svg";
import { ReactComponent as Whatsapp } from "../lib/assets/whatsapp-logo.svg";
import { ReactComponent as FacebookCircle } from "../lib/assets/facebook-circle.svg";
import { ReactComponent as Instagram } from "../lib/assets/instagram.svg";
import { ReactComponent as Youtube } from "../lib/assets/youtube.svg";
import { ReactComponent as TrustPilot } from "../lib/assets/trust-pilot.svg";
import { ReactComponent as Dashboard } from "../lib/assets/dashboard.svg";
import { ReactComponent as MatrixLogo } from "../lib/assets/matrix-logo.svg";

import { ReactComponent as ConvoG1p1m1 } from "../lib/assets/convo-g1-p1-m1.svg";
import { ReactComponent as ConvoG1p1m2 } from "../lib/assets/convo-g1-p1-m2.svg";
import { ReactComponent as ConvoG1p2m1 } from "../lib/assets/convo-g1-p2-m1.svg";

import { ReactComponent as ConvoG2p1m1 } from "../lib/assets/convo-g2-p1-m1.svg";
import { ReactComponent as ConvoG2p1m2 } from "../lib/assets/convo-g2-p1-m2.svg";
import { ReactComponent as ConvoG2p2m1 } from "../lib/assets/convo-g2-p2-m1.svg";

import person1 from "../lib/assets/person-1.png";
import target2x from "../lib/assets/target-2x.png";
import handshake3x from "../lib/assets/handshake-3x.png";
import scales2x from "../lib/assets/scales-2x.png";
import chess2x from "../lib/assets/chess-2x.png";

import logo1 from "../lib/assets/logo-1-2x.png";
import logo2 from "../lib/assets/logo-2-2x.png";
import logo3 from "../lib/assets/logo-3-2x.png";

import { Icon, ICON_NAMES } from "../lib/icons";
import DesktopNavbar from "../components/layouts/DesktopNavbar";

const Home = () => {
  //

  //   Hero asset animation stuff
  const [animateOnLoad, setAnimateOnLoad] = useState(true);

  // Section 2 asset animation stuff
  const sectionTwoAssetRef = useRef();
  const [sectionTwoViewed, setSectionTwoViewed] = useState(false);
  const { inViewport: sectionTwoAssetInViewport } = useInViewport(
    sectionTwoAssetRef,
    { threshold: 0.6 },
    { disconnectOnLeave: true }
  );
  const sectionTwoDesktopAssetRef = useRef();
  const [sectionTwoDesktopViewed, setSectionTwoDesktopViewed] = useState(false);
  const { inViewport: sectionTwoDesktopAssetInViewport } = useInViewport(
    sectionTwoDesktopAssetRef,
    { threshold: 0.6 },
    { disconnectOnLeave: true }
  );

  // Section 3 asset animation stuff
  const sectionThreeAssetRef = useRef();
  const [sectionThreeViewed, setSectionThreeViewed] = useState(false);
  const { inViewport: sectionThreeAssetInViewport } = useInViewport(
    sectionThreeAssetRef,
    { threshold: 0.6 },
    { disconnectOnLeave: true }
  );

  // Section 4 asset-card-left animation stuff
  const sectionFourAssetRef = useRef();
  const [sectionFourViewed, setSectionFourViewed] = useState(false);
  const { inViewport: sectionFourAssetInViewport } = useInViewport(
    sectionFourAssetRef,
    { threshold: 0.65 },
    { disconnectOnLeave: true }
  );

  // Section 9 asset animation stuff
  const sectionNineAssetRef = useRef();
  const [sectionNineViewed, setSectionNineViewed] = useState(false);
  const { inViewport: sectionNineAssetInViewport } = useInViewport(
    sectionNineAssetRef,
    { threshold: 0.35 },
    { disconnectOnLeave: true }
  );

  const animateSection3 = () => {
    document.querySelector(".meters").classList.add("animate-meter");
    return "scale-in-center";
  };

  useEffect(() => {
    // Hero animation
    const timeout = setTimeout(() => {
      setAnimateOnLoad(false);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (sectionTwoAssetInViewport) setSectionTwoViewed(true);
    if (sectionTwoDesktopAssetInViewport) setSectionTwoDesktopViewed(true);
    if (sectionThreeAssetInViewport) setSectionThreeViewed(true);
    if (sectionFourAssetInViewport) setSectionFourViewed(true);
    if (sectionNineAssetInViewport) setSectionNineViewed(true);
  }, [
    sectionTwoAssetInViewport,
    sectionTwoDesktopAssetInViewport,
    sectionThreeAssetInViewport,
    sectionFourAssetInViewport,
    sectionNineAssetInViewport,
  ]);

  return (
    <div className="home relative grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-x-4">
      <DesktopNavbar />

      {/* Hero */}
      <section className="section-hero pt-10 dark:bg-matrix-black-400 relative h-[70vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] 2xl:h-[90vh] 3xl:h-[93vh] px-4 sm:px-10 col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col sm:flex-nowrap sm:flex-row sm:space-x-0 sm:space-y-0 sm:justify-evenly sm:items-center space-y-6 justify-center">
        {/* Mobile */}
        <>
          {/* Header */}
          <div className="max-w-max sm:hidden flex flex-col flex-grow-0 space-y-1 text-4xl sm:text-5xl font-bold sm:font-semibold ">
            <div>Find Your</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-b from-matrix-violet-500 to-matrix-blue-600 sm:text-matrix-violet-300">
              Dream Clients
            </div>
            <div>Faster</div>
          </div>

          {/* description */}
          <div className="max-w-max sm:hidden text-sm font-medium sm:font-light">
            <p className="max-w-[240px] xxs:max-w-[265px] xs:max-w-[275px]">
              We’ve helped over 25,000 individuals and companies to grow their
              business successfully.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-max sm:hidden flex flex-col space-y-4 justify-center items-center">
            <Button text="Start 7-Day Trial" size="lg" variant="primary" />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-xs font-light dark:text-matrix-white-200 opacity-90">
                Check out our{" "}
                <span className="font-medium dark:text-white text-matrix-black-900">
                  437
                </span>{" "}
                reviews
              </p>
              <TrustPilot className="transform scale-90 2xl:scale-105" />
            </div>
          </div>

          {/* art */}
          <div className="art sm:hidden absolute transform scale-95 right-[-62vw] sm:left-[55vw] sm:scale-110 xxs:right-[-42vw] xs:right-[-20vw] top-[60%] -translate-y-1/2">
            <div className="relative ">
              <div className="dark:w-16 dark:h-16 w-12 h-12 rounded-full absolute bg-matrix-pink-400 transform top-[45%] dark:top-[45%] right-[58%] dark:right-[58%] z-0 -translate-y-full shadow-blue-glow dark:shadow-pink-glow opacity-75 dark:opacity-100" />

              <Sphere className="transform z-10" />
              <Facebook
                className={`absolute transform ${
                  animateOnLoad ? "facebook-slide-in" : "facebook-float"
                } top-[18%]`}
              />
              <Heart
                className={`absolute transform ${
                  animateOnLoad ? "heart-slide-in" : "heart-float"
                } bottom-[15%] `}
              />
            </div>
          </div>
        </>

        {/* Tablet+ */}
        <>
          {/* content */}
          <div className="hidden sm:shrink-0 sm:flex sm:flex-col sm:space-y-8 xl:w-[570px] 2xl:w-[47vw]">
            {/* Header */}
            <div className="max-w-max flex flex-col flex-grow-0 space-y-1 xl:space-y-8 text-4xl sm:text-5xl xl:text-7xl 3xl:text-8xl 6xl:text-9xl font-bold sm:font-semibold sm:tracking-tight header-focus-in">
              <div>Find Your</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-matrix-violet-500 to-matrix-blue-600 sm:text-matrix-violet-300">
                Dream Clients
              </div>
              <div>Faster</div>
            </div>

            {/* description */}
            <div className="max-w-max text-sm font-medium sm:font-light description-slide-in xl:text-base 3xl:text-2xl 6xl:text-3xl">
              <p className="max-w-[250px] sm:max-w-[350px] xl:max-w-[480px] 3xl:max-w-[700px]">
                We’ve helped over 25,000 individuals and companies to grow their
                business successfully.
              </p>
            </div>

            {/* CTA */}
            <div className="max-w-max flex flex-col space-y-4 xl:space-y-8 justify-center items-center description-slide-in">
              <Button
                className="cta-btn-shake"
                text="Start 7-Day Trial"
                size="xl"
                variant="primary"
              />
              <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
                <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
                  Check out our{" "}
                  <span className="font-medium dark:text-white text-matrix-black-900">
                    437
                  </span>{" "}
                  reviews
                </p>
                <TrustPilot className="transform scale-90 2xl:scale-105" />
              </div>
            </div>
          </div>

          {/* art */}
          <div className="sm:relative sm:self-start sm:h-[85%] sm:flex sm:flex-col sm:justify-center sm:w-full sm:grow-0 hidden sm:translate-x-0 sm:left-0 sm:transform-none transform left-full -translate-x-[80%] md:transform md:translate-x-[20%] xl:translate-x-[10%] 3xl:-translate-y-[20px] scale-80 xl:scale-110 3xl:scale-125">
            {/* G1 */}
            <div className="absolute flex flex-col justify-center items-center transform sm:top-[10%] right-0 sm:translate-y-[10%] sm:translate-x-[20%] xl:-translate-x-[115%] 3xl:translate-y-[30%] 3xl:scale-110 z-50">
              <ConvoG1p1m1 className="g1p1m1-slide-in sm:my-0.5" />
              <ConvoG1p1m2 className="g1p1m2-slide-in sm:my-0.5 sm:-ml-[95px]" />
              <ConvoG1p2m1 className="g1p2m1-slide-in sm:-mt-[80px] sm:-mr-[200px]" />
            </div>
            {/* G2 */}
            <div className="absolute flex flex-col justify-center items-center transform sm:top-[10%] sm:right-0 sm:translate-y-[70%] sm:translate-x-[60%] md:translate-x-[20%] xl:-translate-x-[10%] 3xl:translate-y-[85%] 3xl:scale-110 z-50">
              <ConvoG2p1m1 className="g2p1m1-slide-in my-0.5" />
              <ConvoG2p1m2 className="g2p1m2-slide-in my-0.5 -ml-[95px]" />
              <ConvoG2p2m1 className="g2p2m1-slide-in -mt-[80px] -mr-[200px]" />
            </div>
            <div className="relative sm:translate-y-[25%] w-[250px] h-[250px] transform skew-x-1 skew-y-1 z-40 xl:translate-x-16 5xl:translate-x-52 scale-105 3xl:scale-125 5xl:scale-150">
              <Facebook
                className={`absolute transform ${
                  animateOnLoad ? "facebook-slide-in" : "facebook-float"
                } sm:top-full sm:z-[999]`}
              />
              <Heart
                className={`absolute transform ${
                  animateOnLoad ? "heart-slide-in" : "heart-float"
                } sm:top-[20%] sm:z-[999]`}
              />
              <div
                className={`backdrop-blur-xl absolute sm:transform sm:top-0 sm:scale-75 md:scale-150 bg-gradient-to-r from-white/5 to-white/25 rounded-3xl w-[600px] h-[285px] z-10 clip-dashboard ${
                  animateOnLoad ? "dashboard-slide-in" : "dashboard-slide-in"
                }`}
              />
              <Dashboard
                className={`z-40 absolute sm:transform sm:top-0 sm:scale-75 md:scale-150 ${
                  animateOnLoad ? "dashboard-slide-in" : "dashboard-slide-in"
                }`}
              />
            </div>
            <div className="absolute transform sm:top-1/2 sm:-translate-y-[55%] sm:left-0 sm:-translate-x-[10%] sm:scale-80 5xl:scale-150 5xl:translate-x-[10%]">
              <Sphere className="transform z-10" />
            </div>
          </div>
        </>
      </section>

      {/* mobile+ speak with our... */}
      <section className="section-2 lg:hidden px-4 sm:px-14 md:px-16 lg:px-36 py-16 col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col space-y-8 sm:space-y-12 sm:text-center">
        {/* header */}
        <p className="text-2xl sm:text-3xl font-medium sm:text-left">
          Speak with Our Marketing experts for free
        </p>
        {/* description */}
        <p className="font-normal text-lg sm:max-w-[600px] sm:font-light">
          Our entire company culture is built on our ability to solve problems
          and share solutions.{" "}
        </p>
        {/* sub-description */}
        <p className="text-base sm:text-sm sm:max-w-[600px] sm:text-left font-normal dark:text-matrix-white-200 text-matrix-black-800 opacity-90">
          This is why we have created a system where all entrepreneurs at every
          stage in business can schedule a Free 30-Minute Marketing strategy
          call with our Marketing experts and get free advice on marketing,
          sales and business growth. You could even be speaking directly with
          our founder and head of growth, Simeon.
        </p>
        {/* asset */}
        <div className="relative w-full pb-4 sm:max-w-[400px] sm:pt-10 sm:self-center">
          <div
            className={`absolute z-50 -right-6 bottom-14 ${
              sectionTwoAssetInViewport || sectionTwoViewed
                ? "slide-in-right"
                : "opacity-0"
            }`}
          >
            <AvailableDays className="float-1" />
          </div>
          <div
            className={`absolute z-50 right-4 -bottom-8 ${
              sectionTwoAssetInViewport || sectionTwoViewed
                ? "slide-in-right-05"
                : "opacity-0"
            }`}
          >
            <SelectTime className="float" />
          </div>
          <img
            src={person1}
            className="transform sm:scale-125 z-0"
            alt="Person 1"
          />
        </div>
        {/* footer */}
        <p
          ref={sectionTwoAssetRef}
          className="text-xs ks? font-normal dark:text-matrix-white-200 opacity-90 max-w-xs sm:transform sm:-translate-x-16 sm:self-center sm:text-left"
        >
          You could even be speaking directly with our founder and head of
          growth, Simeon.{" "}
        </p>
        {/* cta */}
        <div className="flex flex-col space-y-6 sm:hidden">
          <Button variant="primary" text="Speak With an Expert" size="lg" />
          {/* note */}
          <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
            <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
              Check out our{" "}
              <span className="font-medium dark:text-white text-matrix-black-900">
                437
              </span>{" "}
              reviews
            </p>
            <TrustPilot className="transform scale-90 2xl:scale-105" />
          </div>
        </div>
      </section>

      {/* desktop+ speak with our... */}
      <section className="section-2 hidden lg:flex justify-around px-4 sm:px-14 lg:px-36 py-16 2xl:py-32 col-span-4 sm:col-span-8 xl:col-span-12 sm:text-center">
        <div className="left w-full">
          <div className="relative w-full pb-4 sm:pt-10 sm:self-center xl:translate-y-8 xl:translate-x-8 2xl:translate-x-36 6xl:translate-y-28 6xl:translate-x-52">
            <div className="absolute w-full h-full transform 6xl:scale-150 z-[999]">
              <div className="relative w-full h-full">
                <div
                  className={`absolute z-10 -right-6 bottom-14 ${
                    sectionTwoDesktopAssetInViewport || sectionTwoDesktopViewed
                      ? "available-slide-in"
                      : "opacity-0"
                  }`}
                >
                  <AvailableDays className="float-1" />
                </div>
                <div
                  className={`absolute z-10 right-4 -bottom-8 ${
                    sectionTwoDesktopAssetInViewport || sectionTwoDesktopViewed
                      ? "select-time-slide-in"
                      : "opacity-0"
                  }`}
                >
                  <SelectTime className="float" />
                </div>
              </div>
            </div>

            <img
              src={person1}
              className="transform sm:scale-125 xl:scale-150 xl:translate-x-14 6xl:scale-225 z-0"
              alt="Person 1"
            />
          </div>
          <p
            ref={sectionTwoDesktopAssetRef}
            className="text-xs font-normal text-matrix-white-200 opacity-90 max-w-xs xl:transform xl:translate-y-40 xl:translate-x-9 sm:self-center sm:text-left xl:text-sm 2xl:translate-x-36 6xl:translate-y-80"
          >
            You could even be speaking directly with our founder and head of
            growth, Simeon.
          </p>
          <div className="flex flex-col space-y-2 sm:hidden">
            <Button variant="primary" text="Speak With an Expert" size="lg" />
            <div className="text-2xs pl-4 text-matrix-white-200 opacity-80">
              <p>*Trusted by over 2000+</p>
              <p>entrepreneurs</p>
            </div>
          </div>
        </div>

        <div className="right shrink-0 max-w-[50%] flex flex-col space-y-14">
          <p className="text-2xl sm:text-3xl xl:text-4xl font-medium sm:text-left">
            Speak with Our Marketing experts for free
          </p>
          <p className="font-normal text-lg sm:max-w-[600px] sm:font-light xl:text-left">
            Our entire company culture is built on our ability to solve problems
            and share solutions.{" "}
          </p>
          <p className="text-base sm:text-sm sm:max-w-[600px] sm:text-left font-normal dark:text-matrix-white-200 text-matrix-black-800 opacity-90">
            This is why we have created a system where all entrepreneurs at
            every stage in business can schedule a Free 30-Minute Marketing
            strategy call with our Marketing experts and get free advice on
            marketing, sales and business growth. You could even be speaking
            directly with our founder and head of growth, Simeon.
          </p>
          {/* CTA */}
          <div className="hidden flex-col space-y-2 sm:flex sm:flex-row sm:space-x-8 sm:transform sm:translate-y-10 sm:self-start self-center">
            <Button variant="primary" text="Speak With an Expert" size="xl" />
            {/* note */}
            <div className="text-2xs pl-4 text-matrix-white-200 opacity-80">
              <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
                <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
                  Check out our{" "}
                  <span className="font-medium dark:text-white text-matrix-black-900">
                    437
                  </span>{" "}
                  reviews
                </p>
                <TrustPilot className="transform scale-90 2xl:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lets break... */}
      <section className="section-3 px-4 sm:px-14 md:px-16 lg:px-36 py-16 col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col space-y-12 xl:flex-row lx:space-y-0">
        <div className="flex flex-col space-y-12 xl:max-w-[45%]">
          {/* title */}
          <div className="text-2xl font-medium sm:text-3xl xl:text-4xl">
            Let's break your competitor's hearts together
          </div>
          {/* quote */}
          <div className="relative">
            <Quote className="absolute -left-10 -top-3" />
            <p className="text-base font-normal text-matrix-black-800 dark:text-matrix-white-200">
              We literally work overtime, everytime. The one moment i don't look
              forward to is when Simeon, our head of growth comes in, looks at a
              sales page, sales copy, design or ad account and goes 'We're not
              there yet, dig deeper''.{" "}
              <span className="text-matrix-violet-300 font-medium">
                — John Doe
              </span>
            </p>
          </div>
          {/* description */}
          <p className="text-base font-normal sm:transform sm:-translate-y-4">
            After managing over 100+ advertising campaigns, you gain an
            understanding of what works and what doesn't. There's no way your
            competitors stand a chance with Melbul as your firepower.
          </p>
        </div>

        <div className="flex flex-col space-y-12 transform xl:-translate-x-6 4xl:scale-125 6xl:scale-175 6xl:-translate-x-72">
          {/* asset */}
          <div
            ref={sectionThreeAssetRef}
            className="sm:transform sm:translate-x-[18vw] sm:py-10"
          >
            <Analytics
              className={`${
                sectionThreeAssetInViewport || sectionThreeViewed
                  ? animateSection3()
                  : "opacity-0"
              } `}
            />
          </div>
          {/* CTA */}
          <div className="hidden flex-col space-y-2 sm:flex sm:flex-row sm:space-x-8 sm:transform sm:translate-y-10 sm:self-start self-center xl:hidden">
            <Button variant="primary" text="Speak With an Expert" size="xl" />
            {/* note */}
            <div className="text-2xs pl-4 text-matrix-white-200 opacity-80">
              <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
                <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
                  Check out our{" "}
                  <span className="font-medium dark:text-white text-matrix-black-900">
                    437
                  </span>{" "}
                  reviews
                </p>
                <TrustPilot className="transform scale-90 2xl:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* create offers... */}
      <section className="section-4 px-4 sm:px-14 md:px-16 lg:px-36 py-16 col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col space-y-12 xl:flex-row-reverse">
        <div className="flex flex-col space-y-12 xl:max-w-[45%]">
          {/* title */}
          <div className="text-2xl font-medium sm:text-3xl xl:text-4xl">
            Create offers that keep your accountant busy
          </div>
          {/* subtitle */}
          <p className="text-lg ">
            What You Offer Your Target Audience Can Make Or Break Your Bottom
            Line.
          </p>
          <div className="flex flex-col space-y-6">
            {/* description */}
            <p className="text-base text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
              Most Advertisers focus so much on Advertising copy, creatives &
              sales pages that they forget the single most important element in
              any Advertising campaign, "The Offer".{" "}
            </p>
            {/* description */}
            <p className="text-base text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
              If you give people an "Outta D World" offer, your business will
              receive an "Unbelievable" increase in sales volume. At Melbul,
              we've studied & mastered the art of "Outta D World" offers.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-12 w-full transform xl:scale-90 2xl:scale-110 4xl:scale-125 xl:-translate-x-14 6xl:scale-175 6xl:-translate-x-36">
          {/* asset */}
          <div className="relative w-full pt-8 h-[350px]">
            <div
              ref={sectionFourAssetRef}
              className="absolute transform left-[50%] -translate-x-1/2 grow-0 max-w-min"
            >
              <div className="relative w-[573px] h-[363px]">
                <Sphere className="absolute z-10 rotate-180 transform left-0 bottom-0 -translate-x-[25%] translate-y-[25%] scale-60 filter brightness-125 opacity-70" />
                <CardLeft
                  className={`absolute z-40 -left-4 ${
                    sectionFourAssetInViewport || sectionFourViewed
                      ? "roll-in-left"
                      : "opacity-0"
                  }`}
                />
                <CardCenter
                  className={`absolute z-50 transform left-1/2 -translate-x-1/2 ${
                    sectionFourAssetInViewport || sectionFourViewed
                      ? "slide-in-blurred-bottom"
                      : "opacity-0"
                  }`}
                />
                <CardRight
                  className={`absolute z-40 -right-4 ${
                    sectionFourAssetInViewport || sectionFourViewed
                      ? "roll-in-right"
                      : "opacity-0"
                  }`}
                />
                <Sphere className="absolute z-10 transform right-0 top-0 translate-x-[34%] -translate-y-[10%] scale-150 opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How about... */}
      <section className="section-5 relative px-4 sm:px-14 md:px-16 lg:px-36 overflow-hidden mt-[100px] py-16 col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col space-y-12 justify-center items-center overflow-y-hidden">
        {/* puzzle piece */}
        <PuzzlePiece className="absolute transform opacity-5 z-[0] top-[55%] -translate-y-1/2 right-0 translate-x-[15%] xl:scale-150 xl:translate-y-8 xl:-translate-x-5" />
        <div className="absolute z-0 transform -translate-y-56 xxs:-translate-y-40 md:translate-y-16 xl:translate-y-72 xl:scale-125 2xl:translate-y-44 2xl:scale-100 6xl:translate-y-72">
          <AnimatedConfetti />
        </div>
        <div className="z-[50] flex flex-col space-y-16 justify-center items-center">
          {/* Title */}
          <div className="text-2xl font-semibold z-[20] sm:text-3xl xl:text-4xl">
            How about you take Melbul on a Test-run?
          </div>
          {/* Subtitle */}
          <div className="dark:text-matrix-violet-300 text-matrix-violet-400 text-sm font-medium py-1 px-2 bg-matrix-violet-500 bg-opacity-10 rounded-lg backdrop-blur-3xl xl:text-xl">
            This is probably too good to be true, but it is!
          </div>
          {/* List */}
          <div className="flex flex-col space-y-20 pt-10 px-8 text-matrix-violet-300 xl:flex-row xl:items-center xl:space-y-0 xl:space-x-4 xl:justify-around">
            {/* 1 */}
            <div className="flex space-x-8 grow-0 shrink xl:max-w-[45%]">
              {/* Left */}
              <div className="flex flex-col space-y-4 items-center">
                {/* Number */}
                <span className="text-2xl font-semibold">1</span>
                <div className="h-44 w-[2px] bg-matrix-violet-300 opacity-25"></div>
                {/* Line */}
              </div>
              {/* Right */}
              <div className="text-[17px] font-normal text-matrix-black-800 dark:text-matrix-white-200 opacity-90 py-6 pr-4 leading-7 xl:text-[19px]">
                From experience, we know it is really difficult to find that one
                Marketing agency that can consistently deliver results and grow
                with you, But hey, we are it. We believe in what we do so much
                so that we're 100% open to giving you a test run of our service
                for free.
              </div>
            </div>
            {/* 2 */}
            <div className="flex space-x-8 grow-0 shrink xl:max-w-[40%]">
              {/* Left */}
              <div className="flex flex-col space-y-4 items-center">
                {/* Number */}
                <span className="text-2xl font-semibold">2</span>
                <div className="h-44 w-[2px] bg-matrix-violet-300 opacity-25"></div>
                {/* Line */}
              </div>
              {/* Right */}
              <div className="text-[17px] font-normal text-matrix-black-800 dark:text-matrix-white-200 opacity-90 py-6 pr-4 leading-7 xl:text-[19px]">
                There is absolutely no catch, If you like the results we provide
                for you during your 7-day trial.You can decide to sign a
                contract and we'll take on the responsibility of transforming
                your business within 90days as tho it was ours.
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 pt-10 sm:hidden xl:self-center">
            {/* CTA */}
            <Button text="Start 7-Day Trial" variant="primary" size="lg" />
            {/* Note */}
            <div className="text-2xs text-matrix-black-800 dark:text-matrix-white-200 opacity-75 text-center">
              <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
                <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
                  Check out our{" "}
                  <span className="font-medium dark:text-white text-matrix-black-900">
                    437
                  </span>{" "}
                  reviews
                </p>
                <TrustPilot className="transform scale-90 2xl:scale-105" />
              </div>
            </div>
          </div>
          <div className="hidden flex-col space-y-2 items-center sm:flex sm:flex-row sm:space-x-8 sm:transform sm:translate-x-10 sm:self-start xl:self-center xl:translate-x-0">
            <Button
              variant="primary"
              text="Speak With an Expert"
              size="xl"
              className="max-h-[60px]"
            />
            {/* note */}
            <div className="text-2xs pl-4 text-matrix-white-200 opacity-80">
              <div className="flex flex-col justify-center items-center space-y-1 2xl:space-y-3">
                <p className="text-xs font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 2xl:text-sm">
                  Check out our{" "}
                  <span className="font-medium dark:text-white text-matrix-black-900">
                    437
                  </span>{" "}
                  reviews
                </p>
                <TrustPilot className="transform scale-90 2xl:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We’ll be the... Mobile */}
      <section className="section-6 sm:hidden text-matrix-black-900 py-16 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12 bg-gradient-to-b from-matrix-blue-100/90 to-matrix-pink-400/40">
        <div className="backdrop-blur-md bg-white/80 h-[100%] w-[100%] filter inset-0 z-10 absolute text-red-700" />
        <div className="z-20 px-4 flex flex-col space-y-20 justify-center items-center">
          <div className="text-2xl font-semibold px-1 text-center">
            We’ll be the last marketing agency you ever work with. Here are our
            Stats:
          </div>
          <div className="flex flex-col space-y-12 justify-center items-center">
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">2018</div>
              <div className="text-matrix-black-800 max-w-[200px] text-sm text-center">
                founded
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">4K</div>
              <div className="text-matrix-black-800 max-w-[200px] text-sm text-center">
                average Dream clients attracted per year
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">2k</div>
              <div className="text-matrix-black-800 max-w-[200px] text-sm text-center">
                marketing strategy calls with entrepreneurs.
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">65%</div>
              <div className="text-matrix-black-800 max-w-[200px] text-sm text-center">
                average increase in sales volume for our clients after first
                3-months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We’ll be the... Tablet+ */}
      <section className="section-6 hidden sm:flex text-white py-16 relative col-span-4 sm:col-span-8 xl:col-span-12 flex-col justify-center space-y-12 bg-gradient-to-br from-matrix-blue-100/90 to-matrix-pink-400/40">
        <div className="backdrop-blur-md gradient bg-black/70 h-[100%] w-[100%] filter inset-0 z-10 absolute text-red-700" />
        <div className="z-20 px-4 flex flex-col space-y-20 justify-center items-center">
          <div className="text-2xl font-semibold px-1 text-center xl:text-3xl">
            We’ll be the last marketing agency you ever work with. Here are our
            Stats:
          </div>
          <div className="flex flex-col space-y-12 justify-center items-center sm:grid sm:grid-cols-2 sm:space-y-0 sm:py-10 sm:grid-rows-2 sm:gap-x-32 sm:gap-y-6 xl:grid-cols-4 xl:gap-x-14">
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">2018</div>
              <div className="text-matrix-white-200 max-w-[200px] text-sm text-center">
                founded
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">4K</div>
              <div className="text-matrix-white-200 max-w-[200px] text-sm text-center">
                average Dream clients attracted per year
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">2k</div>
              <div className="text-matrix-white-200 max-w-[200px] text-sm text-center">
                marketing strategy calls with entrepreneurs.
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="font-bold text-5xl">65%</div>
              <div className="text-matrix-white-200 max-w-[200px] text-sm text-center">
                average increase in sales volume for our clients after first
                3-months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile+ With a partner... */}
      <section className="section-7 py-16 px-10 sm:px-14 md:px-16 lg:px-36 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col items-center text-center space-y-24 xl:hidden">
        {/* title */}
        <div className="text-2xl font-medium sm:text-3xl">
          With a partner like Melbul, business owners like you can:
        </div>

        {/* list */}
        <div className="text-left flex flex-col">
          <div className="flex space-x-6">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="text-3xl w-4 font-medium text-matrix-pink-200 filter brightness-90 leading-4 pt-4">
                1
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b from-matrix-violet-400 to-matrix-pink-400 filter brightness-[60%] opacity-40"></div>
            </div>
            {/* right */}
            <div className="right flex flex-col space-y-10 pt-4  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Launch Killer Facebook Ad Campaigns
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
                Melbul will do all the leg work necessary while you sit back,
                relax and close the deals. We'll Create and launch brilliant
                advertising campaigns that connect with people who are most
                likely to buy from your business and become repeat customers.
              </p>
              {/* asset */}
              <img src={target2x} alt="" className="w-60" />
            </div>
          </div>

          <div className="flex space-x-6">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="w-4 text-3xl font-medium text-matrix-pink-200 filter brightness-90 leading-4 my-20">
                2
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b to-matrix-violet-400 from-matrix-pink-400 filter brightness-[60%] opacity-40"></div>
            </div>
            {/* right */}
            <div className="right flex flex-col space-y-10 my-20  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Launch Killer Facebook Ad Campaigns
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
                We know how important it is for you to connect with only people
                who are most likely to convert into a sale. Our team puts so
                much strategy and thought process into all Advertising campaigns
                we manage in order to make sure we're giving your business the
                best chance to close as many deals as you can handle.
              </p>
              {/* asset */}
              <img src={handshake3x} alt="" className="w-80" />
            </div>
          </div>

          <div className="flex space-x-6">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="w-4 text-3xl font-medium text-matrix-pink-200 filter brightness-90 leading-4">
                3
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b from-matrix-violet-400 to-matrix-violet-500/70 filter brightness-[66%] opacity-40"></div>
            </div>
            {/* right */}
            <div className="right flex flex-col space-y-10  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Close more deals & Increase sales Volume
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 pb-4">
                Melbul is all about delivering big results especially when the
                stakes are high. Sales is the Lifeblood of any company & without
                it, everything literally falls apart. Unlike most marketing
                agencies, we actually provide you with stability, growth and
                consistency in sales volume. We've been doing this for so long,
                it's become second nature. C'mon Let's Prove it.
              </p>
              {/* asset */}
              <img src={scales2x} alt="" className="w-72" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button
          className="sm:hidden"
          text="Start 7-Day Trial"
          variant="primary"
          size="lg"
        />
        <div className="hidden sm:flex flex-col space-y-9 justify-center items-center">
          <Button text="Start 7-Day Trial" variant="primary" size="xl" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <p className="text-xs font-light text-matrix-white-200 opacity-90">
              Check out our{" "}
              <span className="font-medium dark:text-white text-matrix-black-900">
                437
              </span>{" "}
              reviews
            </p>
            <TrustPilot className="transform scale-90" />
          </div>
        </div>
      </section>

      {/* Desktop With a partner... */}
      <section className="section-7 hidden py-16 px-10 sm:px-14 md:px-16 lg:px-36 relative col-span-4 sm:col-span-8 xl:col-span-12 xl:flex flex-col items-center text-center space-y-24 xl:space-y-32">
        {/* title */}
        <div className="text-2xl font-medium sm:text-3xl xl:text-4xl max-w-[800px]">
          With a partner like Melbul, business owners like you can:
        </div>
        {/* list */}
        <div className="text-left flex flex-col xl:justify-center transform xl:translate-x-[5vw]">
          <div className="flex space-x-6 ">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="text-3xl w-4 font-medium text-matrix-pink-200 filter brightness-90 leading-4 pt-4">
                1
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b from-matrix-violet-400 to-matrix-pink-400 filter brightness-[60%] opacity-40"></div>
            </div>
            {/* middle */}
            <div className="middle max-w-[55%] flex flex-col space-y-10 pt-4  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Launch Killer Facebook Ad Campaigns
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
                Melbul will do all the leg work necessary while you sit back,
                relax and close the deals. We'll Create and launch brilliant
                advertising campaigns that connect with people who are most
                likely to buy from your business and become repeat customers.
              </p>
              {/* asset */}
            </div>
            {/* right */}
            <img src={target2x} alt="" className="w-60" />
          </div>

          <div className="flex space-x-6 ">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="w-4 text-3xl font-medium text-matrix-pink-200 filter brightness-90 leading-4 my-20">
                2
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b to-matrix-violet-400 from-matrix-pink-400 filter brightness-[60%] opacity-40"></div>
            </div>
            {/* middle */}
            <div className="middle max-w-[55%] flex flex-col space-y-10 my-20  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Launch Killer Facebook Ad Campaigns
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90">
                We know how important it is for you to connect with only people
                who are most likely to convert into a sale. Our team puts so
                much strategy and thought process into all Advertising campaigns
                we manage in order to make sure we're giving your business the
                best chance to close as many deals as you can handle.
              </p>
              {/* asset */}
            </div>
            {/* right */}
            <img src={handshake3x} alt="" className="w-80" />
          </div>

          <div className="flex space-x-6 ">
            {/* left */}
            <div className="flex space-x-5">
              {/* number */}
              <div className="w-4 text-3xl font-medium text-matrix-pink-200 filter brightness-90 leading-4">
                3
              </div>
              {/* line */}
              <div className="min-h-[100px] w-[4px] bg-gradient-to-b from-matrix-violet-400 to-matrix-violet-500/70 filter brightness-[66%] opacity-40"></div>
            </div>
            {/* middle */}
            <div className="middle max-w-[55%] flex flex-col space-y-10  justify-center items-center">
              {/* title */}
              <div className="text-xl font-semibold sm:text-left sm:self-start sm:text-2xl">
                Close more deals & Increase sales Volume
              </div>
              {/* description */}
              <p className="text-base font-light text-matrix-black-800 dark:text-matrix-white-200 opacity-90 pb-4">
                Melbul is all about delivering big results especially when the
                stakes are high. Sales is the Lifeblood of any company & without
                it, everything literally falls apart. Unlike most marketing
                agencies, we actually provide you with stability, growth and
                consistency in sales volume. We've been doing this for so long,
                it's become second nature. C'mon Let's Prove it.
              </p>
              {/* asset */}
            </div>
            {/* right */}
            <img src={scales2x} alt="" className="w-72" />
          </div>
        </div>
        {/* CTA */}
        <Button
          className="sm:hidden"
          text="Start 7-Day Trial"
          variant="primary"
          size="lg"
        />
        <div className="hidden sm:flex flex-col space-y-9 justify-center items-center">
          <Button text="Start 7-Day Trial" variant="primary" size="xl" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <p className="text-xs font-light text-matrix-white-200 opacity-90">
              Check out our{" "}
              <span className="font-medium dark:text-white text-matrix-black-900">
                437
              </span>{" "}
              reviews
            </p>
            <TrustPilot className="transform scale-90" />
          </div>
        </div>
      </section>

      {/* join 300+... */}
      <section className="section-8 text-matrix-black-900 sm:text-white py-10 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12 bg-gradient-to-b from-matrix-blue-100/90 to-matrix-pink-400/40 sm:bg-gradient-to-br">
        <div className="backdrop-blur-md bg-white/80 sm:bg-black/70 h-[100%] w-[100%] filter inset-0 z-10 absolute text-red-700" />
        <div className="z-20 px-4 flex flex-col space-y-10 justify-center items-center text-center">
          {/* title */}
          <div className="text-2xl font-medium sm:text-3xl">
            Join 300+ companies in over 24 countries enjoying the Melbul
            experience.
          </div>
          {/* carousel */}
          <ImageGallery
            additionalClass="py-10"
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showNav={false}
            autoPlay={true}
            infinite={true}
            slideInterval={3000}
            items={[
              {
                original: logo1,
              },
              {
                original: logo2,
              },
              {
                original: logo3,
              },
            ]}
          />
        </div>
      </section>

      {/* reviews / You probably still have....  */}
      <section className="section-9 bg-matrix-black-900 py-16 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12">
        <div className="z-20 px-4 sm:px-14 md:px-16 lg:px-36 flex flex-col space-y-10 justify-center items-center text-center">
          {/* title */}
          <div className="text-2xl text-white font-medium transform md:translate-y-32 xl:translate-y-5 xl:text-4xl">
            What people say about us:
          </div>
          {/* reviews */}
          <div className="relative flex space-x-4 justify-center items-center sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-4 transform md:translate-y-32 md:scale-105 lg:scale-125 xl:gap-y-10">
            <Rocket
              ref={sectionNineAssetRef}
              className={`absolute top-full ${
                sectionNineAssetInViewport || sectionNineViewed
                  ? "rocket-fly-in"
                  : "opacity-0"
              }`}
            />
            <Speaker
              className={`absolute transform ${
                sectionNineAssetInViewport || sectionNineViewed
                  ? "speaker-fade-in"
                  : "opacity-0"
              } -translate-x-[200%] -translate-y-[120%] sm:-translate-x-[35%] sm:-translate-y-[275%] z-50`}
            />
            <ReviewCard className="transform sm:-translate-x-8 md:-translate-x-7" />
            <ReviewCard />
            <ReviewCard className="transform sm:-translate-x-8 md:-translate-x-7" />
            <ReviewCard className="sm:block hidden" />
          </div>
          <div className="py-[300px] relative w-[100%] h-[1000px] xl:w-[90vw] xl:h-[1200px] 2xl:h-[1300px]">
            <Bubble className="transform z-10 absolute scale-225 xxs:scale-185  xs:rotate-12 xs:scale-150 sm:scale-125 md:hidden" />
            <Bubble2 className="transform z-10 absolute md:block hidden md:scale-105 md:-translate-x-[20%] xl:hidden" />
            <Bubble3 className="transform z-10 absolute xl:block hidden xl:scale-90 translate-x-[0px] xl:translate-x-[50px] 2xl:scale-110 2xl:translate-x-[170px] 4xl:scale-110 4xl:translate-x-[300px] 5xl:scale-125 6xl:translate-x-[600px]" />
            <div className="z-40 w-full px-4 pt-20 sm:pt-36 flex flex-col justify-center items-center space-y-4 absolute transform left-1/2 -translate-x-1/2 top-[12%] md:hidden ">
              {/* title */}
              <div className="text-2xl font-medium dark:text-matrix-black-900">
                <p>You probably still have</p>
                <p> questions, huh?</p>
              </div>
              {/* description */}
              <p className="text-sm font-normal xs:max-w-[420px] text-matrix-black-800">
                You can literally call or text our Founders, Simeon & Samson,
                and they'll reply (unless they are both stuck in a stalemate
                again).
              </p>
              {/* asset */}
              <img src={chess2x} alt="" className="w-60" />
              {/* contact */}
              <div className="flex flex-col space-y-3 justify-center items-center pr-16">
                {/* simeon */}
                <div className="flex flex-col">
                  <p className="text-sm font-light text-matrix-black-800">
                    Here is Simeon's number:
                  </p>
                  <div className="flex space-x-3 justify-center items-center text-sm font-light text-matrix-black-800">
                    <a href="tel:+380684901036">+380684901036</a>
                    <span>
                      <Telegram className="w-[19px]" />
                    </span>
                    <span>
                      <Whatsapp className="w-5" />
                    </span>
                  </div>
                </div>
                {/* samsons */}
                <div className="flex flex-col">
                  <p className="text-sm font-light text-matrix-black-800">
                    Here is Samson's number:
                  </p>
                  <div className="flex space-x-3 justify-center items-center text-sm font-light text-matrix-black-800">
                    <a href="tel:+380636082951">+380636082951</a>
                    <span>
                      <Telegram className="w-[19px]" />
                    </span>
                    <span>
                      <Whatsapp className="w-5" />
                    </span>
                  </div>
                </div>
                {/* footnote */}
                <p className="font-medium dark:text-matrix-black-800 pr-8 xxs:pr-2">
                  Go Ahead. Try it out.{" "}
                </p>
              </div>
            </div>
            <div className="z-40 w-full px-4 pt-20 sm:pt-36 flex-col space-y-4 absolute transform left-1/2 text-left -translate-x-1/2 sm:-translate-y-[10px] hidden md:flex xl:hidden">
              {/* title */}
              <div className="text-3xl font-medium text-white">
                <p>You probably still have questions, huh?</p>
              </div>
              {/* description */}
              <p className="text-sm font-normal text-matrix-white-200">
                You can literally call or text our Founders, Simeon & Samson,
                and they'll reply (unless they are both stuck in a stalemate
                again).
              </p>
              <div
                className="flex grow w-full space-x-8 justify-between items-center self-start
              "
              >
                {/* asset */}
                <img src={chess2x} alt="" className="w-72" />
                {/* contact */}
                <div className="flex flex-col space-y-8 justify-center items-center pr-8">
                  {/* simeon */}
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm sm:text-base font-light text-matrix-black-800 dark:text-matrix-white-200">
                      Here is Simeon's number:
                    </p>
                    <div className="flex space-x-3 justify-center items-center text-sm sm:text-base self-start font-light">
                      <a href="tel:+380684901036">+380684901036</a>
                      <span>
                        <Telegram className="w-[19px] sm:w-[26px]" />
                      </span>
                      <span>
                        <Whatsapp className="w-5 sm:w-7" />
                      </span>
                    </div>
                  </div>
                  {/* samsons */}
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm sm:text-base self-start font-light text-matrix-white-200">
                      Here is Samson's number:
                    </p>
                    <div className="flex space-x-3 justify-center items-center text-sm sm:text-base self-start font-light ">
                      <a href="tel:+380636082951">+380636082951</a>
                      <span>
                        <Telegram className="w-[19px] sm:w-[26px]" />
                      </span>
                      <span>
                        <Whatsapp className="w-5 sm:w-7" />
                      </span>
                    </div>
                  </div>
                  {/* footnote */}
                  <p className="font-medium dark:text-matrix-white pr-8 xxs:pr-2">
                    Go Ahead. Try it out.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="z-40 w-full px-4 pt-20 sm:pt-36 space-y-4 absolute transform left-1/2 text-left -translate-x-1/2 xl:translate-y-20 hidden xl:flex xl:justify-around 6xl:pl-52 6xl:pr-72">
              {/* left */}
              <img
                src={chess2x}
                alt=""
                className="w-[450px] 2xl:w-[600px] object-cover"
              />
              {/* right */}
              <div className="flex flex-col space-y-10 max-w-[38%]">
                {/* title */}
                <div className="text-3xl font-medium text-white xl:text-4xl">
                  <p>You probably still have questions, huh?</p>
                </div>
                {/* description */}
                <p className="text-sm font-normal text-matrix-white-200 xl:text-lg">
                  You can literally call or text our Founders, Simeon & Samson,
                  and they'll reply (unless they are both stuck in a stalemate
                  again).
                </p>
                <div className="flex grow w-full space-x-8 justify-between items-center self-start xl:grow-0">
                  {/* contact */}
                  <div className="flex flex-col space-y-8 justify-center items-center pr-8">
                    {/* simeon */}
                    <div className="flex flex-col space-y-4">
                      <p className="text-sm sm:text-base xl:text-xl font-light text-matrix-white-200">
                        Here is Simeon's number:
                      </p>
                      <div className="flex space-x-3 justify-center items-center text-sm sm:text-base xl:text-xl self-start font-light">
                        <a href="tel:+380684901036">+380684901036</a>
                        <span>
                          <Telegram className="w-[19px] sm:w-[26px]" />
                        </span>
                        <span>
                          <Whatsapp className="w-5 sm:w-7" />
                        </span>
                      </div>
                    </div>
                    {/* samsons */}
                    <div className="flex flex-col space-y-4">
                      <p className="text-sm sm:text-base xl:text-xl self-start font-light text-matrix-white-200">
                        Here is Samson's number:
                      </p>
                      <div className="flex space-x-3 justify-center items-center text-sm sm:text-base xl:text-xl self-start font-light ">
                        <a href="tel:+380636082951">+380636082951</a>
                        <span>
                          <Telegram className="w-[19px] sm:w-[26px]" />
                        </span>
                        <span>
                          <Whatsapp className="w-5 sm:w-7" />
                        </span>
                      </div>
                    </div>
                    {/* footnote */}
                    <p className="font-medium dark:text-matrix-white pr-8 xxs:pr-2 xl:text-2xl">
                      Go Ahead. Try it out.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4"></div>
          </div>
        </div>
      </section>

      {/* Your dream.. */}
      <section className="section-10 text-matrix-black-900 sm:text-white sm:py-20 pb-10 pt-2 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12 bg-gradient-to-b from-matrix-blue-100/90 to-matrix-pink-400/20 sm:bg-gradient-to-br">
        <div className="backdrop-blur-md bg-white/80 sm:bg-black/70 h-[100%] w-[100%] filter inset-0 z-10 absolute text-red-700" />
        <div className="z-20 px-4 flex flex-col space-y-10 sm:space-y-16 justify-center items-center text-center">
          {/* title */}
          <div className="text-2xl sm:text-3xl sm:max-w-[650px] font-medium">
            Your dream clients are waiting. Are you ready to attract them?
          </div>

          {/* description */}
          <p className="text-sm sm:text-base sm:max-w-[550px]">
            Let’s not keep them waiting much longer, go ahead. Click the button.
            We'll have you closing deals in 48hours.
          </p>
          {/* CTA */}
          <div className="flex flex-col space-y-4">
            <Button text="Start 7-Day Trial" variant="primary" size="lg" />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-xs font-light dark:text-matrix-white-200 opacity-90">
                Check out our{" "}
                <span className="font-medium dark:text-white text-matrix-black-900">
                  437
                </span>{" "}
                reviews
              </p>
              <TrustPilot className="transform scale-90" />
            </div>
          </div>
        </div>
      </section>

      {/* mobile+ footer */}
      <section className="section-10 py-10 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12 bg-matrix-black-800 xl:hidden">
        <div className="z-20 px-4 flex flex-col space-y-10 sm:space-y-16 justify-center items-center text-center">
          {/* logo */}
          <div className="flex space-x-2 justify-center items-center">
            <Icon
              ICON_NAME={ICON_NAMES.LOGO}
              className="w-9 h-9 block sm:hidden"
            />
            <MatrixLogo className="sm:block hidden" />
            <div className="tracking-[0.3rem] text-lg pb-0.5 sm:hidden text-white">
              MELBUL
            </div>
          </div>

          {/* description */}
          <div className="block sm:hidden">
            <p>THE MOST AUTHENTIC MARKETING</p>
            <p>AGENCY YOU’LL EVER WORK WITH</p>
          </div>
          <div className="hidden sm:block sm:text-sm sm:font-light sm:text-matrix-white-200 sm:transform sm:-translate-y-8">
            <p>THE MOST AUTHENTIC MARKETING AGENCY YOU’LL EVER WORK WITH</p>
          </div>
          {/* CTA */}
          <div className="flex flex-col space-y-8 text-white">
            <div>Currently Accepting Followers</div>
            <div className="flex space-x-3 justify-center items-center">
              <FacebookCircle />
              <Youtube />
              <Instagram />
            </div>
          </div>
        </div>
      </section>

      {/* desktop+ footer */}
      <section className="section-10 py-10 relative col-span-4 sm:col-span-8 xl:col-span-12 flex-col justify-center space-y-12 bg-matrix-black-800 xl:bg-matrix-black-900 hidden xl:flex">
        <div className="z-20 px-4 flex flex-col space-y-10 sm:space-y-16 justify-center items-center text-center">
          {/* logo */}
          <div className="flex space-x-2 justify-center items-center">
            <div className="left cursor-pointer flex xl:space-x-6 justify-center items-center">
              <Icon
                ICON_NAME={ICON_NAMES.LOGO}
                className="w-9 h-8 xl:w-16 xl:h-16"
              />
              <div className="tracking-[0.4rem] xl:text-5xl xl:font-light transform 3xl:pl-2 3xl:scale-105 pb-0.5 text-white">
                MELBUL
              </div>
            </div>
          </div>

          {/* description */}
          <div className="hidden sm:block sm:text-sm sm:font-light sm:text-matrix-white-200 sm:transform sm:-translate-y-8 xl:text-lg">
            <p>THE MOST AUTHENTIC MARKETING AGENCY YOU’LL EVER WORK WITH</p>
          </div>
          {/* Links */}
          <div className="flex justify-evenly  items-start w-full">
            {/* row1 */}
            <div className="links flex flex-col space-y-1.5 font-light text-matrix-white-200 justify-start text-left">
              <span className="category font-semibold text-white pb-3 tracking-wider">
                Why Melbul
              </span>
              <span>Our story</span>
              <span>How we work</span>
              <span>Careers</span>
              <span>Affiliate program</span>
            </div>
            {/* row2 */}
            <div className="links flex flex-col space-y-1.5 font-light text-matrix-white-200 justify-start text-left">
              <span className="category font-semibold text-white pb-3 tracking-wider">
                Features
              </span>
              <span>Lead Generation</span>
              <span>Appointments Booking</span>
              <span>Conversion Rate Optimization</span>
              <span>High Converting Sales Pages</span>
              <span>Email Marketing</span>
              <span>Social Media Engagement</span>
              <span>Advertising Copy</span>
              <span>Advertising Creatives</span>
              <span>Rapid Sales Boost</span>
            </div>
            {/* row3 */}
            <div className="links flex flex-col space-y-1.5 font-light text-matrix-white-200 justify-start text-left">
              <span className="category font-semibold text-white pb-3 tracking-wider">
                Resources
              </span>
              <span>Blog articles</span>
              <span>Melbul Academy</span>
              <span>Case studies</span>
              <span>FAQ</span>
              <span>ROI calculator</span>
              <span>Marketing calendar</span>
              <span>Legal & Docs</span>
            </div>
            {/* row4 */}
            <div className="links flex flex-col space-y-1.5 font-light text-matrix-white-200 justify-start text-left">
              <span className="category font-semibold text-white pb-3 tracking-wider">
                Offers
              </span>
              <span>7-day Free Trial</span>
              <span>30-min marketing strategy call</span>
              <span>Pricing</span>
              <span>Login</span>
            </div>
          </div>
          {/* CTA */}
          <div className="flex flex-col space-y-8 text-white">
            <div>Currently Accepting Followers</div>
            <div className="flex space-x-3 justify-center items-center">
              <FacebookCircle className="cursor-pointer hover:brightness-110 filter" />
              <Youtube className="cursor-pointer hover:brightness-110 filter" />
              <Instagram className="cursor-pointer hover:brightness-110 filter" />
            </div>
          </div>
        </div>
      </section>

      {/* copyright */}
      <section
        style={{ padding: "32px 5%" }}
        className="section-11 py-5 relative col-span-4 sm:col-span-8 xl:col-span-12 flex flex-col justify-center space-y-12 bg-matrix-black-900"
      >
        <div className="z-20 px-4 flex flex-col space-y-10 justify-center items-center text-center">
          {/* description */}
          <div className="text-xs text-white">
            © 2021 Melbul. All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
