"use client";

import { Box, Flex, FlexProps } from "@mantine/core";
import TwitterSvg from "@/../public/images/twitter.svg";
import ReditSvg from "@/../public/images/redit.svg";
import DiscordSvg from "@/../public/images/discord.svg";
import FacebookSvg from "@/../public/images/facebook.svg";
import styles from "./index.module.scss";

interface Props {
  gap?: FlexProps["gap"];
}

const Socials: React.FC<Props> = ({ gap }) => {
  const social = (Icon?: any) => {
    return (
      <Box className={styles.social}>
        <Icon />
      </Box>
    );
  };

  return (
    <Flex display={"flex"} align={"center"} gap={gap ?? { base: 24, sm: 32 }}>
      {social(FacebookSvg)}
      {social(ReditSvg)}
      {social(TwitterSvg)}
      {social(DiscordSvg)}
    </Flex>
  );
};

export default Socials;
