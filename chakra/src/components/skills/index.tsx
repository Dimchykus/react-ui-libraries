"use client";

import { Flex, Box, Text, Heading, Container, Grid } from "@chakra-ui/react";
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
const Skills = () => {
  const getSkill = (text: string, icon?: ReactNode) => {
    return (
      <Flex
        w={44}
        h={44}
        border={"2px solid"}
        borderColor={"primary.black"}
        // у px, rem не працює
        borderRadius={4}
        transition={"all 0.2s ease-in-out"}
        cursor={"pointer"}
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        gap={8}
        color={"primary.black"}
        sx={{
          path: {
            transition: "all 0.2s ease-in-out",
          },
        }}
        _hover={{
          bg: "primary.black",
          color: "primary.white",
          borderColor: "primary.black",
          path: {
            filter: "invert(1)",
          },
        }}
      >
        {icon}
        <Text fontWeight={700} textStyle={"h5"}>
          {text}
        </Text>
      </Flex>
    );
  };

  return (
    <Box mb={25}>
      <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"} mb={20}>
        <Heading>My</Heading>
        <Heading fontWeight={800}>Skills</Heading>
      </Flex>
      <Grid
        gridTemplateColumns={"repeat(auto-fit, 186px)"}
        gap={10}
        justifyContent={"space-between"}
      >
        {SKILLS.map((skill) => getSkill(skill.text, skill.icon))}
      </Grid>
    </Box>
  );
};

export default Skills;
