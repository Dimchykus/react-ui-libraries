"use client";

import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Project, { IProject } from "../project";
import projectImg1 from "../../../public/images/project1.jpeg";
import projectImg2 from "../../../public/images/project2.jpeg";
import projectImg3 from "../../../public/images/project3.jpeg";
import styles from "./index.module.scss";

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
    <Box className={styles.block}>
      <Container>
        <Flex justify={"center"}>
          <Title
            pb={{ base: 40, sm: 96 }}
            pt={{ base: 60, sm: 80 }}
            variant="text"
          >
            <Text component="span" variant="text">
              My
            </Text>
            <Text component="span" variant="text" fw={800}>
              Projects
            </Text>
          </Title>
        </Flex>
        <Flex direction={"column"}>
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
