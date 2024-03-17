import { Box, Typography, useMediaQuery } from "@mui/material";
import Socials from "../common/socials";
import Button from "../common/button";
import Input from "../common/input";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from "@/app/core/theme";

let schema = object({
  name: string().required().max(70, "Name is too long"),
  email: string().email("Invalid email").required(),
  url: string().url("Invalid URL"),
  description: string().required().max(500, "Description is too long"),
});

type FormData = {
  name: string;
  email: string;
  url?: string;
  description: string;
};

const LetsTalk = () => {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      url: "",
      description: "",
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box
      sx={{
        py: [16],
        display: "flex",
        gap: [11, 20, 27],
        flexDirection: ["column", "row"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 5,
          flexBasis: [null, 500],
        }}
      >
        <Input<FormData>
          name="name"
          control={control}
          placeholder="Your name"
        />
        <Input<FormData> name="email" control={control} placeholder="Email" />
        <Input<FormData>
          name="url"
          control={control}
          placeholder="Your website (If exists)"
        />
        <Input<FormData>
          type="textarea"
          name="description"
          control={control}
          placeholder="How can I help?*"
        />
        <Box display={"flex"} flexWrap="wrap" gap={6}>
          <Button
            sx={{
              fontWeight: 500,
            }}
            size={
              useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"
            }
            onClick={onSubmit}
          >
            Get In Touch
          </Button>
          <Socials
            sx={{
              gap: 6,
            }}
          />
        </Box>
      </Box>
      <Box flex={1}>
        <Typography
          display={"flex"}
          gap={4}
          rowGap={3}
          flexWrap={"wrap"}
          variant="text"
        >
          <Typography component="span" variant="text" fontWeight={800}>
            Let’s
          </Typography>
          <Typography component="span" variant="text">
            talk
          </Typography>
          <Typography component="span" variant="text" fontWeight={800}>
            for
          </Typography>
          <Typography
            component="span"
            variant="text"
            fontWeight={800}
            flexBasis={"100%"}
          >
            Something special
          </Typography>
        </Typography>
        <Typography variant="paragraph2" mt={[8, 5]} mb={[8, 10]}>
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </Typography>
        <Typography
          variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h5" : "h3"}
          fontWeight={800}
          mb={[3, 4]}
        >
          Dimhukys@gmail.com
        </Typography>
        <Typography
          variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h5" : "h3"}
          fontWeight={800}
        >
          1234567890
        </Typography>
      </Box>
    </Box>
  );
};

export default LetsTalk;
