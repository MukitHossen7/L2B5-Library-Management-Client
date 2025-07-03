import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", (e) =>
      setIsDarkMode(e.matches)
    );

    return () => darkModeMediaQuery.removeEventListener("change", () => {});
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isDarkMode ? (
        <RotatingLines
          visible={true}
          width="96"
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      ) : (
        <FadeLoader />
      )}
    </div>
  );
};

export default Loader;
