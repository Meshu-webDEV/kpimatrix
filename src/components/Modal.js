import * as React from "react";

const Modal = ({ show, setShow, children }) => {
  // Styling state
  const [animationClass, setAnimationClass] = React.useState("hidden");
  const [isFirstMount, setIsFirstMount] = React.useState(true);

  const handleClose = () => setShow(false);

  React.useEffect(() => {
    if (show) setAnimationClass("modal-in");
    if (show) setIsFirstMount(false);
    if (!show && !isFirstMount) setAnimationClass("modal-out");
    setShow(show);
  }, [show]);

  return (
    <div
      className={`${animationClass} absolute inset-0 h-screen w-screen flex justify-center items-center`}
    >
      <div
        className="fixed z-90 bg-black bg-opacity-30 w-full h-full"
        onClick={handleClose}
      />
      <div className={` fixed z-100`}>{children}</div>
    </div>
  );
};

export default Modal;
