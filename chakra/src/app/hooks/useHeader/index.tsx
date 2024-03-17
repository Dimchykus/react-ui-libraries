import { useEffect, useRef, useState } from "react";

const useHeader = () => {
  const positionRef = useRef(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;

      setVisible(moving < 100 ? true : positionRef.current > moving);
      positionRef.current = moving;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { position: positionRef.current, visible };
};

export default useHeader;
