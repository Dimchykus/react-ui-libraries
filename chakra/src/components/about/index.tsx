"use client";

import { Flex, Box, Text, Heading, chakra } from "@chakra-ui/react";
import Image from "next/image";
import img from "../../../public/images/about.png";

const ChakraImg = chakra(Image);

const About: React.FC = () => {
  return (
    <Flex
      gap={[5, 10, 20]}
      py={[10, "3.75rem"]}
      justifyContent={"center"}
      flexDirection={["column", "row"]}
      alignItems={["center", "flex-start"]}
    >
      <Box flex={["auto", "525px"]} alignSelf={["stretch", "flex-start"]}>
        <ChakraImg
          src={img}
          width={525}
          height={572}
          alt="about me"
          sx={{
            maxW: "none",
            height: ["auto", "572px"],
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box flex={"1 1 610px"}>
        <Flex
          display="flex"
          gap={4}
          flexWrap="wrap"
          columnGap={4}
          rowGap={[3, 5]}
          mb={10}
          pt={5}
        >
          <Heading>About</Heading>
          <Heading fontWeight={800}>Me</Heading>
        </Flex>
        <Text textStyle={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed designer who specializes in
          full stack development (React.js & Node.js). I am very enthusiastic
          about bringing the technical and visual aspects of digital products to
          life. User experience, pixel perfect design, and writing clear,
          readable, highly performant code matters to me.
        </Text>
        <Text textStyle={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed design I began my journey as a
          web developer in 2015, and since then, I&apos;ve continued to grow and
          evolve as a developer, taking on new challenges and learning the
          latest technologies along the way. Now, in my early thirties, 7 years
          after starting my web development journey, I&apos;m building
          cutting-edge web applications using modern technologies such as
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </Text>
        <Text textStyle={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed design When I&apos;m not in
          full-on developer mode, you can find me hovering around on twitter or
          on indie hacker, witnessing the journey of early startups or enjoying
          some free time. You can follow me on Twitter where I share
          tech-related bites and build in public, or you can follow me on
          GitHub.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
