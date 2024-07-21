"use client";

import { Box, SxProps, Theme, Typography, useMediaQuery } from "@mui/material";
import Socials from "../common/socials";
import img from "@/../public/images/hero.png";
import imgMobile from "@/../public/images/heroMobile.png";
import Image from "next/image";

const imageStyle: SxProps<Theme> = (theme) => ({
  bottom: "50%",
  right: "0",
  zIndex: -1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  transform: ["none", "translateY(46%)"],
  [theme.breakpoints.down("sm")]: {
    img: {
      width: "100%",
      height: "332px",
      objectFit: "contain",
    },
  },
});

const Hero = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box pb={[28]} pt={[10, "12rem"]} position={"relative"}>
      <Box
        sx={imageStyle}
        position={["static", "absolute"]}
        width={["auto", "100%"]}
        pb={[12, 0]}
      >
        <Image src={isMobile ? imgMobile : img} alt="hero" />
      </Box>
      <Box width={["100%", "600px"]}>
        <Box>
          <Typography
            component={"h1"}
            variant="text"
            display={"flex"}
            gap={4}
            flexWrap={"wrap"}
            rowGap={[3, 5]}
          >
            <Typography variant="text">Hello I’am</Typography>
            <Typography variant="text" component="span" fontWeight={800}>
              Evren Shah.
            </Typography>
            <Typography variant="text" component="span" fontWeight={800}>
              Frontend
            </Typography>
            <Typography variant="outlined" component="span">
              Developer
            </Typography>
            <Typography variant="text" component="span">
              Based In
            </Typography>
            <Typography variant="text" component="span" fontWeight={800}>
              India.
            </Typography>
          </Typography>
        </Box>
        <Typography variant={"paragraph2"} mt={8} color={"zinc.500"}>
          I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry&rsquo;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to specimen book.
        </Typography>
        {/* <Button>Resume</Button> */}
        {/* <Input value={"Your name"} />
        <Input error="error" value={"Your name"} isInvalid />
        <Input isDisabled value={"Your name"} /> */}
      </Box>
      <Box mt={[8, 25]}>
        <Socials />
      </Box>
    </Box>
  );
};

export default Hero;
