"use client";

import { Box, Flex, Text, Title } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import styles from "./index.module.scss";

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

const Project: React.FC<Props> = ({ reverse, project }) => {
  return (
    <Flex
      direction={{ base: "column", sm: reverse ? "row-reverse" : "row" }}
      justify={"space-between"}
      mb={{ base: 76, sm: 138 }}
      gap={{ base: 28, sm: 104 }}
    >
      <Box
        w={{ base: "100%", sm: "auto" }}
        h={{ base: 397, sm: "auto" }}
        className={styles.imgBlock}
      >
        <Image
          src={project.img}
          objectFit="cover"
          width={530}
          height={397}
          alt=""
        />
      </Box>
      <Flex gap={{ base: 28 }} direction={"column"} flex={"0 0 48%"}>
        <Text variant="text" fw={800}>
          {project.number}
        </Text>
        <Title order={2} variant={"h2"} fw={700}>
          {project.title}
        </Title>
        <Text variant={"paragraph2"} c={"zinc.4"}>
          {project.description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Project;
