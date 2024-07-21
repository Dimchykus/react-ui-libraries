"use client";

import { Box, Flex, Text, Title } from "@mantine/core";
import { ReactNode } from "react";
import Git from "@/../public/images/icon-git.svg";
import Javascript from "@/../public/images/icon-javscript.svg";
import Sass from "@/../public/images/icon-sass.svg";
import Nest from "@/../public/images/icon-nest.svg";
import Storybook from "@/../public/images/icon-storybook.svg";
import Socket from "@/../public/images/icon-socket.svg";
import styles from "./index.module.scss";

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
  const getSkill = (text: string, num: number, icon?: ReactNode) => {
    return (
      <Flex
        className={styles.skill}
        key={num}
        direction={"column"}
        gap={32}
        align={"center"}
        justify={"center"}
      >
        {icon}
        <Title fw={700} order={5}>
          {text}
        </Title>
      </Flex>
    );
  };

  return (
    <Box mb={100}>
      <Flex gap={4} wrap={"wrap"} justify={"center"} mb={{ base: 40, sm: 80 }}>
        <Title component={"h2"} variant="text">
          <Text variant="text" component="span">
            My
          </Text>
          <Text variant="text" component="span" fw={800}>
            Skills
          </Text>
        </Title>
      </Flex>
      <Box className={styles.skillsContainer}>
        {SKILLS.map((skill, num) => getSkill(skill.text, num, skill.icon))}
      </Box>
    </Box>
  );
};

export default Skills;
