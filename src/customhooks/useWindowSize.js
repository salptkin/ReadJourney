import { useState, useEffect } from "react";

/**
 * @typedef {{width:number, height:number}} WindowSize
 */

/** @returns {WindowSize} */
const getSize = () => ({
  width: typeof window !== "undefined" ? window.innerWidth : 0,
  height: typeof window !== "undefined" ? window.innerHeight : 0,
});

/** @returns {WindowSize} */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
