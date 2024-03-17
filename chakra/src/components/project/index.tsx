"use client";

import {
  Flex,
  Box,
  Text,
  Heading,
  Container,
  Grid,
  chakra,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IProject {
  number: number | string;
  title: string;
  description: string;
  img: StaticImageData;
}

interface Props {
  project: IProject;
  reverse?: boolean;
}

const ChakraImage = chakra(Image);

const Project: React.FC<Props> = ({ reverse, project }) => {
  return (
    <Flex
      bg={"primary.black"}
      justifyContent={"space-between"}
      mb={["4.75rem", "6.5rem"]}
      gap={[7, "8.625rem"]}
      direction={{ base: "column", sm: reverse ? "row-reverse" : "row" }}
    >
      <Box
        w={["100%", "auto"]}
        h={[397, "auto"]}
        sx={{
          overflow: "hidden",
          borderRadius: "2xl",
          boxShadow:
            "0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12)",
        }}
      >
        <ChakraImage
          src={project.img}
          width={530}
          height={397}
          alt=""
          w={["100%", null]}
          // h={"100%"}
          objectFit={"cover"}
        />
      </Box>
      <Flex gap={7} direction={"column"} flex={"0 0 48%"}>
        <Heading fontWeight={800}>{project.number}</Heading>
        <Text textStyle={"h2"} fontWeight={700}>
          {project.title}
        </Text>
        <Text color={"zinc.500"} textStyle={"paragraph2"}>
          {project.description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Project;
