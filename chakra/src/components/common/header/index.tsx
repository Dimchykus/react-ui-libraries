"use client";

import useHeader from "@/hooks/useHeader";
import {
  Flex,
  Box,
  Text,
  Button,
  useBreakpointValue,
  Show,
} from "@chakra-ui/react";
import Logo from "@/../public/images/logo.svg";
import LogoSmall from "@/../public/images/logoSmall.svg";
import Menu from "@/../public/images/menu.svg";
import Download from "@/../public/images/download.svg";

const Header = () => {
  const { visible } = useHeader();
  const backgroundImg = useBreakpointValue(
    {
      base: <LogoSmall />,
      sm: <Logo />,
    },
    {
      fallback: "",
      ssr: false,
    }
  );

  return (
    <Box
      as="header"
      h={["72px", "110px"]}
      w={"100vw"}
      px={[4, 6, 28]}
      py={[4, 5, 6]}
      bg={"rgb(255 255 255 / 60%)"}
      backdropFilter={"blur(10px)"}
      zIndex={"banner"}
      sx={{
        position: "sticky",
        top: 0,
        transition: "transform 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
      display={["flex"]}
      alignItems={"center"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Flex alignItems={"center"} gap={[2, 3]}>
          {backgroundImg}
          <Text textStyle={"h5"} fontWeight={"700"}>
            Personal
          </Text>
        </Flex>
        <Show above="sm">
          <Flex gap={8}>
            <Button textStyle={"h5"} fontWeight={600} variant={"text"}>
              About Me
            </Button>
            <Button textStyle={"h5"} fontWeight={600} variant={"text"}>
              Skills
            </Button>
            <Button textStyle={"h5"} fontWeight={600} variant={"text"}>
              Project
            </Button>
            <Button textStyle={"h5"} fontWeight={600} variant={"text"}>
              Contact Me
            </Button>
          </Flex>
        </Show>
        <Show above="sm">
          <Button
            textStyle={"button"}
            variant={"contained"}
            rightIcon={<Download />}
          >
            Resume
          </Button>
        </Show>
        <Show below="sm">
          <Menu />
        </Show>
      </Flex>
    </Box>
  );
};

export default Header;
