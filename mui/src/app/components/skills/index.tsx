"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Theme,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";
import Git from "@/../public/images/icon-git.svg";
import Javascript from "@/../public/images/icon-javscript.svg";
import Sass from "@/../public/images/icon-sass.svg";
import Nest from "@/../public/images/icon-nest.svg";
import Storybook from "@/../public/images/icon-storybook.svg";
import Socket from "@/../public/images/icon-socket.svg";

const SKILLS = [
  {
    icon: <Git />,
    text: "Git",
  },
  {
    icon: <Javascript />,
    text: "javascript",
  },
  {
    icon: <Sass />,
    text: "Sass/scss",
  },
  {
    icon: <Nest />,
    text: "Nest.Js",
  },
  {
    icon: <Storybook />,
    text: "Storybook",
  },
  {
    icon: <Nest />,
    text: "Nest.Js",
  },
  {
    icon: <Git />,
    text: "Git",
  },
  {
    icon: <Storybook />,
    text: "Storybook",
  },
  {
    icon: <Socket />,
    text: "Socket.io",
  },
  {
    icon: <Sass />,
    text: "Sass/scss",
  },
];

const skillsStyle: SxProps<Theme> = ({ breakpoints, palette }) => ({
  width: 186,
  height: 186,
  border: "2px solid",
  borderColor: palette.primary.black,
  borderRadius: 1,
  transition: "all 0.2s ease-in-out",
  path: {
    transition: "all 0.2s ease-in-out",
  },
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 4,
  color: palette.primary.black,
  "&:hover": {
    background: palette.primary.black,
    color: "primary.white",
    borderColor: palette.primary.black,
    path: {
      fill: palette.primary.white,
    },
  },
  [breakpoints.down("md")]: {
    width: 160,
    height: 160,
  },
});

const skillsContainerStyle: SxProps<Theme> = (theme) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 186px)",
  gap: 10,
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, 160px)",
    justifyContent: "center",
    gap: 5,
  },
});

const Skills = () => {
  const getSkill = (text: string, num: number, icon?: ReactNode) => {
    return (
      <Box sx={skillsStyle} key={num}>
        {icon}
        <Typography fontWeight={700} variant={"h5"}>
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <Box mb={24}>
      <Box gap={4} flexWrap={"wrap"} justifyContent={"center"} mb={[10, 20]}>
        <Typography
          component={"h2"}
          variant="text"
          display={"flex"}
          justifyContent={"center"}
          gap={4}
          flexWrap={"wrap"}
          columnGap={[3, 5]}
        >
          <Typography variant="text" component="span">
            My
          </Typography>
          <Typography variant="text" component="span" fontWeight={800}>
            Skills
          </Typography>
        </Typography>
      </Box>
      <Box sx={skillsContainerStyle}>
        {SKILLS.map((skill, num) => getSkill(skill.text, num, skill.icon))}
      </Box>
    </Box>
  );
};

export default Skills;
