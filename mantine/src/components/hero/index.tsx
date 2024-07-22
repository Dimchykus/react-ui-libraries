"use client";

import { Box, Text, Title } from "@mantine/core";
import Socials from "../common/socials";
import img from "@/../public/images/hero.png";
import imgMobile from "@/../public/images/heroMobile.png";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import styles from "./index.module.scss";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      pb={{ base: 104, sm: 116 }}
      pt={{ base: 40, sm: "12rem" }}
      pos="relative"
    >
      <Box
        className={styles.image}
        pos={{ base: "static", sm: "absolute" }}
        w={{ base: "auto", sm: "100%" }}
        pb={{ base: 48, sm: 0 }}
      >
        <Image src={isMobile ? imgMobile : img} alt="hero" />
      </Box>
      <Box w={{ base: "100%", sm: "600px" }}>
        <Box>
          <Title component={"h1"}>
            <Text variant="text" component="span">
              Hello I’am
            </Text>
            <Text variant="text" component="span" fw={800}>
              Evren Shah.
            </Text>
            <Text variant="text" component="span" fw={800}>
              Frontend
            </Text>
            <Text variant="outlined" component="span">
              Developer
            </Text>
            <Text variant="text" component="span">
              Based In
            </Text>
            <Text variant="text" component="span" fw={800}>
              India.
            </Text>
          </Title>
        </Box>
        <Text variant={"paragraph2"} mt={32} c="zinc.4">
          I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry&rsquo;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to specimen book.
        </Text>
      </Box>
      <Box mt={{ base: 36, sm: 100 }}>
        <Socials />
      </Box>
    </Box>
  );
};

export default Hero;
