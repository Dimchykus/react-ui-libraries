import { Flex, Box, Text, Heading, Container } from "@chakra-ui/react";
import Socials from "../common/socials";
import { ICompany } from ".";
import Image from "next/image";

interface Props {
  company: ICompany;
}

const Company: React.FC<Props> = ({ company }) => {
  return (
    <Box
      bg="transparent"
      borderStyle={"solid"}
      border={"1px"}
      color={"zinc.500"}
      borderRadius={10}
      px={6}
      py={7}
      transition="all 0.2s ease-in-out"
      cursor={"pointer"}
      _hover={{
        bg: "zinc.800",
        borderColor: "zinc.800",
      }}
    >
      <Flex
        mb={7}
        justifyContent={"space-between"}
        flexDir={["column", "row"]}
        gap={[30, 0]}
        alignItems={["flex-start", "center"]}
        sx={{
          img: {
            height: "32px",
          },
        }}
      >
        <Flex alignItems={"center"} gap={7}>
          <Image src={company.img} alt={company.title} />
          <Text textStyle={"h4"} fontWeight={600} color="primary.white">
            {company.title}
          </Text>
        </Flex>
        <Text textStyle={"h6"} color="zinc.300" fontWeight="normal">
          {company.date}
        </Text>
      </Flex>
      <Text textStyle={"paragraph2"} color="zinc.300">
        {company.description}
      </Text>
    </Box>
  );
};

export default Company;
