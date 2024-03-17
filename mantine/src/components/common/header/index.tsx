"use client";

import useHeader from "@/hooks/useHeader";
import {
  Box,
  Text,
  Stack,
  Button as MantineButton,
  Flex,
  Title,
} from "@mantine/core";
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
        <Box display="flex" className={styles.logoBlock}>
          {/* {backgroundImg} */}
          <Logo />
          <Title order={5} fw={700}>
            Personal
          </Title>
        </Box>
        <Box display={{ base: "none", sm: "flex" }}>
          <Flex className={styles.links} gap={32}>
            <Button variant={"link"} component="a" href={"#"}>
              <Title order={5} fw={700} component={"span"}>
                About Me
              </Title>
            </Button>
            <Button variant={"link"} fw={"600"} component="a" href={"#"}>
              Skills
            </Button>
            <Button variant={"link"} fw={"600"} component="a" href={"#"}>
              Project
            </Button>
            <Button variant={"link"} fw={"600"} component="a" href={"#"}>
              Contact Me
            </Button>
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
