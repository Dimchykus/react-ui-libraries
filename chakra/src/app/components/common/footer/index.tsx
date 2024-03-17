import { Flex, Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box h={"100px"} bg="primary.black" px={20} py={6} color="primary.white">
    <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
      <Text textStyle={"h5"}>Personal</Text>
      <Flex
        flexDirection={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Text textStyle={"h6"}>@ 2019-2023 Personal</Text>
        <Text textStyle={"h6"}>Made In Figma</Text>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
