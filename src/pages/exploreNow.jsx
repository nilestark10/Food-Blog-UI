import React from "react";
import "./exploreNow.css";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logoImage from "../images/logo.png";
import redBorder from "../images/redBorder.png";
import pizza from "../images/pizza.png";

const ExploreNow = () => {
  return (
    <Box className="main-page">
      <Box className="logo-box">
        <Image src={logoImage} alt="logo" className="logo" />
        <Stack className="best-food-box ">
          <Text className="discover-text">Discover the</Text>
          <HStack>
            <Text className="best-text">Best </Text>
            <Text className="discover-text">Food</Text>
          </HStack>
          <Text className="discover-text">and Drinks</Text>
        </Stack>
        <Text className="sub-text">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Button className="explore-now-button">Explore Now!</Button>
      </Box>
      <Box className="pizza">
        <Button className="get-in-touch">Get In Touch</Button>
        <Image src={pizza} alt="pizza" className="pizza-image" />
        <Image src={redBorder} alt="redborder" className="red-border" />
      </Box>
    </Box>
  );
};

export default ExploreNow;
