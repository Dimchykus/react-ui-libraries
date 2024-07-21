import { Box, SxProps, Theme, Typography } from "@mui/material";
import { ICompany } from ".";
import Image from "next/image";
import { title } from "process";

interface Props {
  company: ICompany;
}

const blockStyles: SxProps<Theme> = (theme) => ({
  background: theme.palette.primary.black,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: theme.palette.zinc[500],
  borderRadius: 2.5,
  px: [6],
  py: [7],
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    background: theme.palette.zinc[800],
    borderColor: theme.palette.zinc[800],
  },
});

const titleStyles: SxProps<Theme> = (theme) => ({
  display: "flex",
  mb: [7],
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 7.5,
  },
});

const Company: React.FC<Props> = ({ company }) => {
  return (
    <Box sx={blockStyles}>
      <Box sx={titleStyles}>
        <Box display={"flex"} alignItems={"center"} gap={7}>
          <Image src={company.img} alt={company.title} />
          <Typography variant={"h4"} fontWeight={600}>
            {company.title}
          </Typography>
        </Box>
        <Typography variant={"h6"} color="zinc.300">
          {company.date}
        </Typography>
      </Box>
      <Typography variant={"paragraph2"} color="zinc.300">
        {company.description}
      </Typography>
    </Box>
  );
};

export default Company;
