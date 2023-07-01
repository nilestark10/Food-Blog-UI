import React from "react";
import "./aboutUs.css";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import spoonImage from "../images/spoon.png";

const AboutUs = () => {
  return (
    <Box className="about-us-box">
      <HStack className="about-us">
        <Image src={spoonImage} alt="spoon pic" className="about-us-image" />
        <Stack className="about-us-text">
          <Text className="aboutheadertext">About Us</Text>
          <Text className="aboutsubtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Button className="readmore">Read More</Button>
        </Stack>
      </HStack>
    </Box>
  );
};
export default AboutUs;
