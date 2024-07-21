import { Flex, Box, Text, Container, Heading } from "@chakra-ui/react";
import Logo from "@/../public/images/logo.svg";

const Footer = () => (
  <Box
    h={["auto", "100px"]}
    bg="primary.black"
    py={[5, 6]}
    color="primary.white"
    sx={{
      path: {
        fill: "primary.white",
      },
    }}
  >
    <Container>
      <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={3}>
          <Logo />
          <Heading size={"h5"} fontWeight={"700"}>
            Personal
          </Heading>
        </Flex>
        <Flex
          flexDirection={"column"}
          height={"100%"}
          justifyContent={"space-between"}
          gap={[0, 3]}
          alignItems={"flex-end"}
        >
          <Text textStyle={["paragraph3", "h6"]} fontWeight={500}>
            @ 2019-2023 Personal
          </Text>
          <Text textStyle={["paragraph3", "h6"]} fontWeight={500}>
            Made In Figma
          </Text>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default Footer;
