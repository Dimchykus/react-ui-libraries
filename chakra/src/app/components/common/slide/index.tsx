import useOnScreen from "@/app/hooks/useOnScreen";
import { Box, Slide as ChakraSlide } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
}

const Slide: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const [visible, setIsVisible] = useState(false);
  const { isVisible } = useOnScreen(ref);

  useEffect(() => {
    if (!isVisible || visible) return;

    setIsVisible(true);
  }, [isVisible]);

  return (
    <Box ref={ref}>
      <ChakraSlide in={isVisible}>{children}</ChakraSlide>
    </Box>
  );
};

export default Slide;
