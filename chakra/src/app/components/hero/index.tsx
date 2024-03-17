"use client";

import {
  Flex,
  Box,
  Text,
  Heading,
  Container,
  SystemStyleObject,
  useBreakpointValue,
  Center,
  chakra,
} from "@chakra-ui/react";
import Socials from "../common/socials";
import img from "@/../public/images/hero.png";
import imgMobile from "@/../public/images/heroMobile.png";
import Image, { StaticImageData } from "next/image";
import Button from "../common/button";
import FacebookSvg from "@/../public/images/facebook.svg";
import Input from "../common/input";

const ChakraImage = chakra(Image);

const imageStyle: SystemStyleObject = {
  bottom: "50%",
  right: "0",
  zIndex: -1,
  justifyContent: "flex-end",
};

const Hero = () => {
  const backgroundImg = useBreakpointValue<StaticImageData>(
    {
      base: imgMobile,
      sm: img,
    },
    {
      fallback: "",
      ssr: false,
    }
  );

  return (
    <Box pb={[16]} pt={[10, 190]} position={"relative"}>
      <Center
        sx={imageStyle}
        position={["static", "absolute"]}
        transform={["none", "translateY(46%)"]}
        width={["auto", "100%"]}
        pb={[12, 0]}
        maxH={"596px"}
      >
        <ChakraImage src={backgroundImg ?? ""} alt="hero" />
      </Center>
      <Box w={["100%", "600px"]}>
        <Heading
          display={"flex"}
          gap={4}
          flexWrap={"wrap"}
          columnGap={[3, 5]}
          as={"h1"}
        >
          <Heading as={"span"}>Hello I’am</Heading>
          <Heading fontWeight={800} as={"span"}>
            Evren Shah.
          </Heading>
          <Heading fontWeight={800} as={"span"}>
            Frontend
          </Heading>
          <Heading variant={"outlined"} as={"span"}>
            Developer
          </Heading>
          <Heading as={"span"}>Based In</Heading>
          <Heading fontWeight={800} as={"span"}>
            India.
          </Heading>
        </Heading>
        <Text textStyle={"paragraph2"} mt={8} color={"zinc.500"}>
          I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry&rsquo;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to specimen book.
        </Text>
        {/* <Button rightIcon={<FacebookSvg />}>Resume</Button>
        <Input value={"Your name"} />
        <Input error="error" value={"Your name"} isInvalid />
        <Input isDisabled value={"Your name"} /> */}
      </Box>
      <Box mt={[8, 25]}>
        <Socials />
      </Box>
    </Box>
  );
};

export default Hero;
