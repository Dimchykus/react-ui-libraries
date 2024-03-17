"use client";

import { Box, SxProps, Theme, Typography } from "@mui/material";
import Image from "next/image";
import img from "../../../../public/images/about.png";

const styles: SxProps<Theme> = (theme) => ({
  display: "flex",
  gap: [11, 15, 40, 60],
  justifyContent: "center",
  flexDirection: ["column", "row"],
  alignItems: ["center", "flex-start"],
  py: [10, 16],
  img: {
    objectFit: "contain",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    img: {
      height: "auto",
    },
  },
});

const About: React.FC = () => {
  return (
    <Box sx={styles} display={"flex"}>
      <Box flexBasis={["auto", "525px"]}>
        <Image src={img} width={525} height={572} alt="" />
      </Box>
      <Box flexBasis={"610px"}>
        <Typography
          display={"flex"}
          variant="text"
          gap={4}
          flexWrap={"wrap"}
          mb={10}
        >
          <Typography component="span" variant="text">
            About
          </Typography>
          <Typography component="span" variant="text" fontWeight={800}>
            Me
          </Typography>
        </Typography>
        <Typography variant={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed designer who specializes in
          full stack development (React.js & Node.js). I am very enthusiastic
          about bringing the technical and visual aspects of digital products to
          life. User experience, pixel perfect design, and writing clear,
          readable, highly performant code matters to me.
        </Typography>
        <Typography variant={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed design I began my journey as a
          web developer in 2015, and since then, I&apos;ve continued to grow and
          evolve as a developer, taking on new challenges and learning the
          latest technologies along the way. Now, in my early thirties, 7 years
          after starting my web development journey, I&apos;m building
          cutting-edge web applications using modern technologies such as
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </Typography>
        <Typography variant={"paragraph2"} mb={5}>
          I&apos;m a passionate, self-proclaimed design When I&apos;m not in
          full-on developer mode, you can find me hovering around on twitter or
          on indie hacker, witnessing the journey of early startups or enjoying
          some free time. You can follow me on Twitter where I share
          tech-related bites and build in public, or you can follow me on
          GitHub.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
