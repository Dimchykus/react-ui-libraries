"use client";

import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import img from "../../../public/images/about.png";
import styles from "./index.module.scss";

const About: React.FC = () => {
  return (
    <Flex
      gap={{ base: 11, sm: 15, md: 40, lg: 80 }}
      justify={"center"}
      direction={{ base: "column", sm: "row" }}
      align={{ base: "center", sm: "flex-start" }}
      py={{
        base: 40,
        sm: 64,
      }}
    >
      <Flex flex={{ base: "auto", sm: "525px" }}>
        <Image
          src={img}
          className={styles.img}
          width={525}
          height={572}
          alt=""
        />
      </Flex>
      <Flex flex={"610px"} direction="column">
        <Title mb={40} pt={20}>
          <Text component="span" variant="text">
            About
          </Text>
          <Text component="span" variant="text" fw={800}>
            Me
          </Text>
        </Title>
        <Text variant={"paragraph2"} mb={20}>
          I&apos;m a passionate, self-proclaimed designer who specializes in
          full stack development (React.js & Node.js). I am very enthusiastic
          about bringing the technical and visual aspects of digital products to
          life. User experience, pixel perfect design, and writing clear,
          readable, highly performant code matters to me.
        </Text>
        <Text variant={"paragraph2"} mb={20}>
          I&apos;m a passionate, self-proclaimed design I began my journey as a
          web developer in 2015, and since then, I&apos;ve continued to grow and
          evolve as a developer, taking on new challenges and learning the
          latest technologies along the way. Now, in my early thirties, 7 years
          after starting my web development journey, I&apos;m building
          cutting-edge web applications using modern technologies such as
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </Text>
        <Text variant={"paragraph2"}>
          I&apos;m a passionate, self-proclaimed design When I&apos;m not in
          full-on developer mode, you can find me hovering around on twitter or
          on indie hacker, witnessing the journey of early startups or enjoying
          some free time. You can follow me on Twitter where I share
          tech-related bites and build in public, or you can follow me on
          GitHub.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
