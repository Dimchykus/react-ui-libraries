import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import Company from "./company";
import youtube from "../../../public/images/youtube.png";
import google from "../../../public/images/google.png";
import apple from "../../../public/images/apple.png";
import { StaticImageData } from "next/image";

export interface ICompany {
  img: StaticImageData;
  title: string;
  description: string;
  date: string;
}

const COMPANIES: ICompany[] = [
  {
    img: google,
    date: "Nov 2019 - Present",
    title: "Lead Software Engineer at Google",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    img: youtube,
    date: "Jan 2017 - Oct 2019",
    title: "Software Engineer at Youtube",
    description:
      "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    img: apple,
    date: "Jan 2016 - Dec 2017",
    title: "Junior Software Engineer at Apple",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];

const backgroundContainerStyle: SxProps<Theme> = (theme) => ({
  backgroundColor: theme.palette.primary.black,
  color: theme.palette.primary.white,
  py: [20],
});

const Experience = () => {
  return (
    <Box sx={backgroundContainerStyle}>
      <Container>
        <Box px={[0, 6]}>
          <Typography
            variant="text"
            display="flex"
            gap={4}
            flexWrap="wrap"
            justifyContent="center"
            rowGap={[3, 5]}
            mb={[10, 20]}
          >
            <Typography component="span" variant="text">
              My
            </Typography>
            <Typography component="span" variant="text" fontWeight={800}>
              Experience
            </Typography>
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={8}>
            {COMPANIES.map((company) => (
              <Company company={company} key={company.title} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
