"use client";

import useHeader from "@/hooks/useHeader";
import { Box, Flex, Title } from "@mantine/core";
import Menu from "@/../public/images/menu.svg";
import Button from "../button";
import Download from "@/../public/images/download.svg";
import Logo from "@/../public/images/logo.svg";
import Modal from "../modal";
import { useState } from "react";
import ResumeModal from "../../modals/resume";
import styles from "./index.module.scss";
import cn from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { visible } = useHeader();

  return (
    <Box
      component={"header"}
      className={cn(styles.header, { [styles.visible]: visible })}
      px={{ base: 16, sm: 24, md: 112 }}
      py={{ base: 16, sm: 20, md: 24 }}
    >
      <Box display={"flex"} className={styles.headerContent} w="100%">
        <Flex display="flex" gap={12} align={"center"}>
          <Logo />
          <Title order={5} fw={700}>
            Personal
          </Title>
        </Flex>
        <Box display={{ base: "none", sm: "flex" }}>
          <Flex className={styles.links} gap={32}>
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
          <Button
            rightSection={<Download />}
            onClick={() => {
              setIsOpen(true);
            }}
            size="medium"
          >
            Resume
          </Button>
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <ResumeModal
              style={{
                path: {
                  fill: "var(--mantine-color-white-text)",
                },
              }}
            />
          </Modal>
        </Box>
        <Box display={{ base: "flex", sm: "none" }}>
          <Menu />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
