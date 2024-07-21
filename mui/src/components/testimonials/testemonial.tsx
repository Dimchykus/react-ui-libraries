import { Flex, Box, Text, Heading, Container } from "@chakra-ui/react";
import Image from "next/image";

interface ITestimonial {
  image: string;
  description: string;
  name: string;
  profession: string;
}

const Testimonial = ({
  image,
  description,
  name,
  profession,
}: ITestimonial) => {
  return (
    <Flex
      width={"370px"}
      p={10}
      flexDir={"column"}
      gap={6}
      rounded={"lg"}
      boxShadow="lg"
      alignItems="center"
    >
      <Box>
        <Image src={image} width={96} height={96} alt={name} />
      </Box>
      <Text textStyle={"text2"} textAlign={"center"}>
        {description}
      </Text>
      <Text
        textStyle={"h5"}
        color="primary.neutral"
        fontWeight={600}
        textAlign={"center"}
      >
        {name}
      </Text>
      <Text
        textStyle={"h6"}
        color="zinc.500"
        fontWeight={600}
        textAlign={"center"}
      >
        {profession}
      </Text>
    </Flex>
  );
};

export default Testimonial;
