import { ButtonProps, Box } from "@mantine/core";
import { ReactNode } from "react";
import Download from "@/../public/images/download.svg";

interface Props extends ButtonProps {
  children?: ReactNode;
}

const ResumeModal: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box>
      <Download />
    </Box>
  );
};

export default ResumeModal;
