import { Flex, Box, Text, Heading, Container, Grid } from "@chakra-ui/react";
import Socials from "../common/socials";
import Testimonial from "./testemonial";

const Testimonials = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      py={[16]}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
    >
      <Testimonial
        image=""
        profession="Designer"
        name="Evren Shah"
        description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
      />
      <Testimonial
        image=""
        profession="Designer"
        name="Flora sheen"
        description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
      />
      <Testimonial
        image=""
        profession="Designer"
        name="Evren Shah"
        description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
      />
    </Grid>
  );
};

export default Testimonials;
