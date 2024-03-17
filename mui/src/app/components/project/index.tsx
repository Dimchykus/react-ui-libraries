"use client";

import { Box, SxProps, Theme, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface IProject {
  number: number | string;
  title: string;
  description: string;
  img: StaticImageData;
}

interface Props {
  project: IProject;
  reverse?: boolean;
}

const blockStyle =
  (reverse?: boolean): SxProps<Theme> =>
  (theme) => ({
    backgroundColor: theme.palette.primary.black,
    mb: [7, 24],
    justifyContent: "space-between",
    gap: [7, 26],
    display: "flex",
    flexDirection: ["column", reverse ? "row-reverse" : "row"],
    [theme.breakpoints.down("sm")]: {
      img: {
        width: "100%",
      },
    },
  });

const Project: React.FC<Props> = ({ reverse, project }) => {
  return (
    <Box sx={blockStyle(reverse)}>
      <Box
        width={["100%", "auto"]}
        height={[397, null]}
        sx={{
          alignSelf: "flex-start",
          overflow: "hidden",
          borderRadius: 4.5,
          boxShadow:
            "0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12)",
        }}
      >
        <Image src={project.img} width={530} height={397} alt="" />
      </Box>
      <Box
        display={"flex"}
        gap={[7, 10]}
        flexDirection={"column"}
        flexBasis={"48%"}
      >
        <Typography variant="text" fontWeight={800}>
          {project.number}
        </Typography>
        <Typography variant={"h2"} fontWeight={700}>
          {project.title}
        </Typography>
        <Typography color={"zinc.500"} variant={"paragraph2"}>
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Project;
