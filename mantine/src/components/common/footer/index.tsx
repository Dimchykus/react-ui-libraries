import { Stack, Box, Text, Flex, Container } from "@mantine/core";
import Logo from "@/../public/images/logo.svg";
import theme from "@/core/theme";
import useIsMobile from "@/hooks/useIsMobile";
import styles from "./index.module.scss";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      component={"footer"}
      h={{ base: "auto", sm: "100px" }}
      // px={{ base: 16, sm: 24, md: 60 }}
      py={{ base: 20, sm: 24 }}
      c="white"
      bg="black"
    >
      <Container>
        <Flex justify={"space-between"} w="100%" align={"center"} h="100%">
          <Flex align={"center"} direction={"row"} gap={3}>
            <Logo className={styles.icon} />
            <Text fw={700} variant={"h5"}>
              Personal
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            h={"100%"}
            justify={"space-between"}
            align={"flex-end"}
            gap={{ base: 0, sm: 3 }}
          >
            <Text variant={isMobile ? "paragraph3" : "h6"} fw={500}>
              @ 2019-2023 Personal
            </Text>
            <Text variant={isMobile ? "paragraph3" : "h6"} fw={500}>
              Made In Figma
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
