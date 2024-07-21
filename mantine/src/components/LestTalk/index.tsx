import { Box, Flex, Text, Title } from "@mantine/core";
import Socials from "../common/socials";
import Button from "../common/button";
import Input from "../common/input";
import useIsMobile from "@/hooks/useIsMobile";
import { useForm, isNotEmpty, isEmail, hasLength, Form } from "@mantine/form";

type FormData = {
  name: string;
  email: string;
  url?: string;
  description: string;
};

const LetsTalk = () => {
  const form = useForm<FormData>({
    initialValues: {
      name: "",
      email: "",
      url: "",
      description: "",
    },
    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid email"),
      url: (value) => {
        if (value && !value.includes("http")) {
          return "Invalid URL";
        }

        return null;
      },
      description: isNotEmpty("Enter your current job"),
    },
  });
  const isMobile = useIsMobile();

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: 44, sm: 80, md: 108 }}
      py={64}
    >
      <Box flex={{ base: "auto", sm: "0 1 500px" }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Flex direction={"column"} gap={20} align={"stretch"}>
            <Input placeholder="Your name" {...form.getInputProps("name")} />
            <Input placeholder="Email" {...form.getInputProps("email")} />
            <Input
              placeholder="Your website (If exists)"
              {...form.getInputProps("url")}
            />
            <Input
              type="textarea"
              placeholder="How can I help?*"
              size="lg"
              {...form.getInputProps("description")}
            />
            <Flex wrap="wrap" gap={24}>
              <Button
                fw={500}
                size={isMobile ? "small" : "medium"}
                type="submit"
              >
                Get In Touch
              </Button>
              <Socials gap={24} />
            </Flex>
          </Flex>
        </form>
      </Box>
      <Box flex={1}>
        <Title variant="text">
          <Text component="span" variant="text" fw={800}>
            Let’s
          </Text>
          <Text component="span" variant="outlined">
            talk
          </Text>
          <Text component="span" variant="text" fw={800}>
            for
          </Text>
          <Text component="span" variant="text" fw={800} flex={"100%"}>
            Something special
          </Text>
        </Title>
        <Text
          variant="paragraph2"
          mt={{ base: 32, sm: 20 }}
          mb={{ base: 32, sm: 40 }}
          c='zinc.4'
        >
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </Text>
        <Title order={isMobile ? 5 : 3} fw={800} mb={{ base: 12, sm: 16 }}>
          Dimhukys@gmail.com
        </Title>
        <Title order={isMobile ? 5 : 3} fw={800}>
          1234567890
        </Title>
      </Box>
    </Flex>
  );
};

export default LetsTalk;
