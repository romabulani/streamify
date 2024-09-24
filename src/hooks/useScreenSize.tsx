import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setScreenSize("small");
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setScreenSize("large");
      } else {
        setScreenSize("medium");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
