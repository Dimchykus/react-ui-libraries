"use client";

import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";
import Project, { IProject } from "../project";
import projectImg1 from "../../../public/images/project1.jpeg";
import projectImg2 from "../../../public/images/project2.jpeg";
import projectImg3 from "../../../public/images/project3.jpeg";

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

const blockStyle: SxProps<Theme> = (theme) => ({
  backgroundColor: theme.palette.primary.black,
  color: theme.palette.primary.white,
});

const Projects = () => {
  return (
    <Box sx={blockStyle}>
      <Container>
        <Typography
          variant="text"
          display="flex"
          gap={4}
          flexWrap="wrap"
          justifyContent="center"
          rowGap={[3, 5]}
          pb={[10, 24]}
          pt={[15, 20]}
        >
          <Typography component="span" variant="text">
            My
          </Typography>
          <Typography component="span" variant="text" fontWeight={800}>
            Projects
          </Typography>
        </Typography>
        <Box display={"flex"} flexDirection={"column"}>
          {projects.map((project, num) => (
            <Project
              project={project}
              key={project.number}
              reverse={!!(num % 2)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
