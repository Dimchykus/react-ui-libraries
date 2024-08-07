import { Box, Flex, Text, Title } from "@mantine/core";
import { ICompany } from ".";
import Image from "next/image";
import styles from "./company.module.scss";

interface Props {
  company: ICompany;
}

const Company: React.FC<Props> = ({ company }) => {
  return (
    <Box className={styles.block}>
      <Flex
        justify={"space-between"}
        align={{ base: "flex-start", sm: "center" }}
        className={styles.title}
        gap={{ base: 30, sm: 0 }}
      >
        <Flex display={"flex"} align={"center"} gap={28}>
          <Image src={company.img} alt={company.title} />
          <Title order={4} variant={"h4"} fw={600}>
            {company.title}
          </Title>
        </Flex>
        <Text variant={"h6"} c="zinc">
          {company.date}
        </Text>
      </Flex>
      <Text variant={"paragraph2"} c="zinc">
        {company.description}
      </Text>
    </Box>
  );
};

export default Company;
