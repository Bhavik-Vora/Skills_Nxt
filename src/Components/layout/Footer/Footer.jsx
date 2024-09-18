import { Box, Heading, HStack, Stack, VStack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  const textColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('gray.100', 'blackAlpha.900');
  const linkColor = useColorModeValue('blue.600', 'blue.400');

  return (
    <Box padding="8" bg={bgColor} color={textColor} mt={'4'}>
      <Stack direction={['column', 'row']} spacing={8} justify="space-between">
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading size="lg">Skilsnxt</Heading>
          <Text fontSize="md" textAlign={['center', 'left']}>
            Upgrade Your Skills with Skilsnxt:<br/> Your Path to Success
          </Text>
        </VStack>

        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading size="md">Helpful Links</Heading>
          <Link href="/courses" color={linkColor}>Courses</Link>
          <Link href="/aboutus" color={linkColor}>About Us</Link>
        </VStack>

        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading size="md">Get in Touch</Heading>
          <Text fontSize="md">support@skilsnxt.com</Text>
          <Text fontSize="md">help@skilsnxt.com</Text>
          <Text fontSize="md">queries@skilsnxt.com</Text>
          <Text fontSize="md">Support: 10 AM - 6 PM</Text>
        </VStack>

        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading size="md">Connect with Us</Heading>
          <HStack spacing={4}>
          <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank" rel="noopener noreferrer">
              <FaYoutube size="30px" />
            </a>
            <a href="https://www.instagram.com/shradhakhapra/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="30px" />
            </a>
            <a href="https://in.linkedin.com/in/shradha-khapra" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="30px" />
            </a>
            <a href="https://github.com/shradha-khapra" target="_blank" rel="noopener noreferrer">
              <FaGithub size="30px" />
            </a>
            <a href="https://t.me/s/aman_dhattarwal" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size="30px" />
            </a>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
