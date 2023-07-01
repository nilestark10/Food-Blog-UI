import React from "react";
import "./contactUs.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <HStack className="socials">
      <Image src={logo} alt="logo" className="contact-us-logo" />
      <Box className="contact">
        <Text className="contact-header">Contact Us</Text>
        <Text className="contact-sub">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text className="contact-sub">example2020@gmail.com</Text>
        <Text className="contact-sub">(904) 443-0343</Text>
      </Box>
      <Box className="more">
        <Text className="contact-header">More</Text>
        <Text className="contact-sub">About Us</Text>
        <Text className="contact-sub">Products</Text>
        <Text className="contact-sub">Career</Text>
        <Text className="contact-sub">Contact Us</Text>
      </Box>
      <Box className="social-links">
        <Text className="link-header">Social Links</Text>
        <Box className="icons">
          <a>
            <Image src={instagram} alt="instagram" />
          </a>
          <a className="links">
            <Image src={twitter} alt="twitter" />
          </a>
          <a className="links">
            <Image src={facebook} alt="facebook" />
          </a>
        </Box>
        <Text className="copyright">© 2022 Food Truck Example</Text>
      </Box>
    </HStack>
  );
};

export default ContactUs;
