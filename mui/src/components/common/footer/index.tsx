import {
  Stack,
  Box,
  Typography,
  useMediaQuery,
  Container,
} from "@mui/material";
import Logo from "@/../public/images/logo.svg";
import theme from "@/core/theme";

const Footer = () => (
  <Box
    component={"footer"}
    sx={(theme) => ({
      height: ["auto", "100px"],
      background: theme.palette.primary.black,
      py: [5, 6],
      color: "primary.white",
    })}
  >
    <Container>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          alignItems={"center"}
          flexDirection={"row"}
          sx={(theme) => ({
            path: {
              fill: theme.palette.primary.white,
            },
            gap: 3,
          })}
        >
          <Logo />
          <Typography fontWeight={700} variant={"h5"}>
            Personal
          </Typography>
        </Stack>
        <Stack
          flexDirection={"column"}
          height={"100%"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          gap={[0, 3]}
        >
          <Typography
            variant={
              useMediaQuery(theme.breakpoints.down("sm")) ? "paragraph3" : "h6"
            }
            fontWeight={500}
          >
            @ 2019-2023 Personal
          </Typography>
          <Typography
            variant={
              useMediaQuery(theme.breakpoints.down("sm")) ? "paragraph3" : "h6"
            }
            fontWeight={500}
          >
            Made In Figma
          </Typography>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
