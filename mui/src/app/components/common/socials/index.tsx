"use client";

import { Box, SxProps, Theme } from "@mui/material";
import TwitterSvg from "@/../public/images/twitter.svg";
import ReditSvg from "@/../public/images/redit.svg";
import DiscordSvg from "@/../public/images/discord.svg";
import FacebookSvg from "@/../public/images/facebook.svg";

const socialStyle: SxProps<Theme> = (theme) => ({
  width: [48, 56],
  height: [48, 56],
  border: "2px solid",
  borderColor: theme.palette.primary.black,
  borderRadius: 1,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary.white,
  "&:hover": {
    background: theme.palette.primary.black,
    color: "white",
    borderColor: theme.palette.primary.black,
    "& svg path": {
      fill: "white",
    },
  },
});

interface Props {
  sx?: SxProps<Theme>;
}

const Socials = ({ sx }: Props) => {
  const social = (Icon?: any) => {
    return (
      <Box sx={socialStyle}>
        <Icon />
      </Box>
    );
  };

  return (
    <Box display={"flex"} alignItems={"center"} gap={[6, 8]} sx={sx}>
      {social(FacebookSvg)}
      {social(ReditSvg)}
      {social(TwitterSvg)}
      {social(DiscordSvg)}
    </Box>
  );
};

export default Socials;
