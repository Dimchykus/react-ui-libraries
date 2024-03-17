"use client";

import useHeader from "@/app/hooks/useHeader";
import { Box, Typography, Theme, SxProps, Stack, Link } from "@mui/material";
import Menu from "@/../public/images/menu.svg";
import Button from "../button";
import Download from "@/../public/images/download.svg";
import Logo from "@/../public/images/logo.svg";
import Modal from "../modal";
import { useState } from "react";
import ResumeModal from "../../modals/resume";

const headerStyle =
  (visible: boolean): SxProps<Theme> =>
  (theme) => ({
    height: ["72px", "110px"],
    width: "100vw",
    maxWidth: "1920px",
    margin: "0 auto",
    px: [4, 6, 28],
    py: [4, 5, 6],
    background: "rgba(255, 255, 255, 0.6)",
    position: "sticky",
    top: 0,
    transition: "transform 0.3s ease-in-out",
    transform: visible ? "translateY(0%)" : "translateY(-100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    zIndex: theme.zIndex.appBar,
    backdropFilter: "blur(10px)",
  });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { visible } = useHeader();

  return (
    <Box component={"header"} sx={headerStyle(visible)}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Box display="flex" alignItems={"center"} gap={[2, 3]}>
          {/* {backgroundImg} */}
          <Logo />
          <Typography variant={"h5"} fontWeight={"700"}>
            Personal
          </Typography>
        </Box>
        <Box
          sx={{
            display: ["none", "flex"],
          }}
        >
          <Stack flexDirection={"row"} gap={8}>
            <Link variant={"h5"} fontWeight={"600"} href={"#"}>
              About Me
            </Link>
            <Link variant={"h5"} fontWeight={"600"} href={"#"}>
              Skills
            </Link>
            <Link variant={"h5"} fontWeight={"600"} href={"#"}>
              Project
            </Link>
            <Link variant={"h5"} fontWeight={"600"} href={"#"}>
              Contact Me
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            display: ["none", "flex"],
          }}
        >
          <Button
            endIcon={<Download />}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Resume
          </Button>
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <ResumeModal />
          </Modal>
        </Box>
        <Box
          sx={{
            display: ["flex", "none"],
          }}
        >
          <Menu />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
