"use client";

import useHeader from "@/hooks/useHeader";
import { Box, Flex, Title } from "@mantine/core";
import Menu from "@/../public/images/menu.svg";
import Button from "../button";
import Download from "@/../public/images/download.svg";
import Logo from "@/../public/images/logo.svg";
import styles from "./index.module.scss";
import cn from "classnames";

const Header = () => {
  const { visible } = useHeader();

  return (
    <Flex
      component={"header"}
      maw={1920}
      className={cn(styles.header, { [styles.visible]: visible })}
      px={{ base: 16, sm: 24, md: 112 }}
      py={{ base: 16, sm: 20, md: 24 }}
      h={{ base: 72, sm: 110 }}
      w="100%"
      top={0}
      pos="sticky"
      align={"center"}
    >
      <Flex w="100%" align={"center"} justify="space-between">
        <Flex display="flex" gap={12} align={"center"}>
          <Logo />
          <Title order={5} fw={700}>
            Personal
          </Title>
        </Flex>
        <Box display={{ base: "none", sm: "flex" }}>
          <Flex gap={32} flex={1}>
            <Title order={5} fw={"600"}>
              About Me
            </Title>
            <Title order={5} fw={"600"}>
              Skills
            </Title>
            <Title order={5} fw={"600"}>
              Project
            </Title>
            <Title order={5} fw={"600"}>
              Contact Me
            </Title>
          </Flex>
        </Box>
        <Box display={{ base: "none", sm: "flex" }}>
          <Button rightSection={<Download />} size="medium">
            Resume
          </Button>
        </Box>
        <Box display={{ base: "flex", sm: "none" }}>
          <Menu />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
