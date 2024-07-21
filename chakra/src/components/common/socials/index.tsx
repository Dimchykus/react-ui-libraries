"use client";

import { Flex, Center } from "@chakra-ui/react";
import TwitterSvg from "@/../public/images/twitter.svg";
import ReditSvg from "@/../public/images/redit.svg";
import DiscordSvg from "@/../public/images/discord.svg";
import FacebookSvg from "@/../public/images/facebook.svg";

interface Props {
  size?: "sm";
}

const Socials: React.FC<Props> = ({ size }) => {
  const social = (Icon?: any) => {
    return (
      <Center
        w={[12, 14]}
        h={[12, 14]}
        border={"2px solid"}
        borderColor={"primary.black"}
        borderRadius={4}
        transition={"all 0.2s ease-in-out"}
        cursor={"pointer"}
        _hover={{
          bg: "primary.black",
          color: "white",
          borderColor: "primary.black",
          "& svg path": {
            fill: "white",
          },
        }}
      >
        <Icon />
      </Center>
    );
  };

  return (
    <Flex alignItems={"center"} gap={[6, size === "sm" ? 6 : 8]}>
      {social(FacebookSvg)}
      {social(ReditSvg)}
      {social(TwitterSvg)}
      {social(DiscordSvg)}
    </Flex>
  );
};

export default Socials;
