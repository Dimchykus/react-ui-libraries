"use client";

import {
  As,
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import Socials from "../common/socials";
import Button from "../common/button";
import Input from "../common/input";
import { object, string } from "yup";
import { useFormik } from "formik";

const ChakraForm = chakra("form");

let schema = object({
  name: string().required().max(70, "Name is too long"),
  email: string().email("Invalid email").required(),
  url: string().url("Invalid URL"),
  description: string().required().max(500, "Description is too long"),
});

export type FormData = {
  name: string;
  email: string;
  url?: string;
  description: string;
};

const LetsTalk = () => {
  const infoSize = useBreakpointValue<As>(
    {
      base: "h3",
      sm: "h5",
    },
    {
      fallback: "h5",
      ssr: false,
    }
  );
  const initialValues: FormData = {
    name: "",
    email: "",
    url: "",
    description: "",
  };

  const { values, handleChange, errors, handleSubmit } = useFormik<FormData>({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Flex
      sx={{
        py: [16],
        display: "flex",
        gap: [11, 20, 27],
        flexDirection: ["column", "row"],
      }}
    >
      <ChakraForm
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 5,
          flex: ["auto", "0 1 500px"],
        }}
      >
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          error={errors.name}
        />
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          error={errors.email}
        />
        <Input
          name="url"
          value={values.url}
          onChange={handleChange}
          placeholder="Your website (If exists)"
          error={errors.url}
        />
        <Input
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="How can I help?*"
          error={errors.description}
          type="textarea"
        />
        <Box display={"flex"} flexWrap="wrap" gap={6}>
          <Button type="submit" fontWeight={500} size={["sm", "md"]}>
            Get In Touch
          </Button>
          <Socials size="sm" />
        </Box>
      </ChakraForm>
      <Box flex={1}>
        <Heading
          display="flex"
          gap={4}
          flexWrap="wrap"
          columnGap={4}
          rowGap={[3, 5]}
          variant="text"
        >
          <Heading as="span" fontWeight={800}>
            Let’s
          </Heading>
          <Heading as="span" variant={"outlined"}>
            talk
          </Heading>
          <Heading as="span" fontWeight={800}>
            for
          </Heading>
          <Heading as="span" fontWeight={800} flexBasis={"100%"}>
            Something special
          </Heading>
        </Heading>
        <Text textStyle="paragraph2" mt={[8, 5]} mb={[8, 10]} color="zinc.500">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </Text>
        <Heading size={["h5", "h3"]} fontWeight={800} mb={[3, 4]}>
          Dimhukys@gmail.com
        </Heading>
        <Heading size={["h5", "h3"]} fontWeight={800}>
          1234567890
        </Heading>
      </Box>
    </Flex>
  );
};

export default LetsTalk;
