import * as React from "react";
// import "./styles.css";
import lottie from "lottie-web";
import animationData from "../lib/assets/lottie-confetti.json";

const AnimatedConfetti = () => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 10000 * 0.8;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames * 0.6;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="transform opacity-80 scale-105 overflow-hidden -translate-y-[120%]"
      ref={lottieRef}
    >
      <div className="absolute " ref={lottieRef}></div>
    </div>
  );
};

export default AnimatedConfetti;
