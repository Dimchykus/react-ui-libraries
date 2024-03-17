import { useViewportSize } from "@mantine/hooks";

const useIsMobile = () => {
  const { width } = useViewportSize();

  return width < 768;
};

export default useIsMobile;
