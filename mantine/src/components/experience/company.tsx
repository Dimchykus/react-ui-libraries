import { Box, Flex, Text, Title } from "@mantine/core";
import { ICompany } from ".";
import Image from "next/image";
import styles from "./company.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

interface Props {
  company: ICompany;
}

const Company: React.FC<Props> = ({ company }) => {
  const isMobile = useIsMobile();

  return (
    <Box className={styles.block}>
      <Flex
        justify={"space-between"}
        align={{ base: "flex-start", sm: "center" }}
        className={styles.title}
      >
        <Flex display={"flex"} align={"center"} gap={28}>
          <Image src={company.img} alt={company.title} />
          <Title order={isMobile ? 5 : 4} variant={"h4"} fw={600}>
            {company.title}
          </Title>
        </Flex>
        <Text variant={"h6"}>{company.date}</Text>
      </Flex>
      <Text variant={"paragraph2"} c="zinc">
        {company.description}
      </Text>
    </Box>
  );
};

export default Company;
