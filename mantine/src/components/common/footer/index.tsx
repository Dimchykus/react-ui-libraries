import { Box, Text, Flex, Container, Title } from "@mantine/core";
import Logo from "@/../public/images/logo.svg";
import useIsMobile from "@/hooks/useIsMobile";
import styles from "./index.module.scss";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      component={"footer"}
      h={{ base: "auto", sm: "100px" }}
      py={{ base: 20, sm: 24 }}
      c="white"
      bg="black"
    >
      <Container>
        <Flex justify={"space-between"} w="100%" align={"center"} h="100%">
          <Flex align={"center"} direction={"row"} gap={12}>
            <Logo className={styles.icon} />
            <Title fw={700} order={5}>
              Personal
            </Title>
          </Flex>
          <Flex
            direction={"column"}
            h={"100%"}
            justify={"space-between"}
            align={"flex-end"}
            gap={{ base: 0, sm: 12 }}
          >
            {!isMobile ? (
              <>
                <Title order={6} fw={500}>
                  @ 2019-2023 Personal
                </Title>
                <Title order={6} fw={500}>
                  Made In Figma
                </Title>
              </>
            ) : (
              <>
                <Text variant="paragraph3" fw={500}>
                  @ 2019-2023 Personal
                </Text>
                <Text variant="paragraph3" fw={500}>
                  Made In Figma
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
