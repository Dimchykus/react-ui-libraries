"use client";

import { Flex, Box, Text, Heading, Container, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
import Project, { IProject } from "../project";
import projectImg1 from "../../../../public/images/project1.jpeg";
import projectImg2 from "../../../../public/images/project2.jpeg";
import projectImg3 from "../../../../public/images/project3.jpeg";

const projects: IProject[] = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    img: projectImg1,
  },
  {
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. When an unknown printer took a galley of type and scrambled it to specimen book.",
    img: projectImg2,
  },
  {
    number: "03",
    title: "Blog Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    img: projectImg3,
  },
];

const Projects = () => {
  return (
    <Box bg={"primary.black"} color={"primary.white"}>
      <Container>
        <Heading
          display={"flex"}
          gap={4}
          flexWrap={"wrap"}
          justifyContent={"center"}
          pb={{ base: 10, sm: 24 }}
          pt={{ base: 15, sm: 20 }}
        >
          <Heading as="span">My</Heading>
          <Heading fontWeight={800} as="span">
            Projects
          </Heading>
        </Heading>
        <Flex flexDirection={"column"}>
          {projects.map((project, num) => (
            <Project
              project={project}
              key={project.number}
              reverse={!!(num % 2)}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
