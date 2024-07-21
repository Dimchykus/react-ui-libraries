"use client";

import useHeader from "@/hooks/useHeader";
import { Flex, Text, Button, Show } from "@chakra-ui/react";
import Logo from "@/../public/images/logo.svg";
import Menu from "@/../public/images/menu.svg";
import Download from "@/../public/images/download.svg";

const Header = () => {
  const { visible } = useHeader();

  return (
    <Flex
      as="header"
      h={["72px", "110px"]}
      w="100%"
      px={[4, 6, 28]}
      py={[4, 5, 6]}
      bg={"rgb(255 255 255 / 60%)"}
      zIndex={"banner"}
      position={"sticky"}
      top={0}
      transition={"transform 0.3s ease-in-out"}
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
      alignItems={"center"}
      backdropFilter="auto"
      backdropBlur="md"
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Flex alignItems={"center"} gap={3}>
          <Logo />
          <Text textStyle={"h5"} fontWeight={"700"}>
            Personal
          </Text>
        </Flex>
        <Show above="sm">
          <Flex gap={8}>
            <Text textStyle={"h5"} fontWeight={600} variant={"text"}>
              About Me
            </Text>
            <Text textStyle={"h5"} fontWeight={600} variant={"text"}>
              Skills
            </Text>
            <Text textStyle={"h5"} fontWeight={600} variant={"text"}>
              Project
            </Text>
            <Text textStyle={"h5"} fontWeight={600} variant={"text"}>
              Contact Me
            </Text>
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
    </Flex>
  );
};

export default Header;
