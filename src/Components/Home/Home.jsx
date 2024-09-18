import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';

import thumbnail from '../../Assets/images/Video_thumbnail.jpeg';
import {
  FaAmazon,
  FaMicrosoft,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  // FaIbm,
  FaPaypal,
  FaCarAlt, // Tesla
  FaSlack,
  FaSpotify,
  FaUber,
  FaDropbox,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaYoutube,
  FaAdobe,
} from 'react-icons/fa';

import { SiNetapp, SiHitachi, SiMercedes } from 'react-icons/si';
// import { FaGoldmanSachs } from 'react-icons/fa';
const Home = () => {
  const iconColor = useColorModeValue('gray.800', 'white'); // Adapts to light or dark mode
  const bgColor = useColorModeValue('gray.400', 'gray.700'); // Background color for icon boxes
  const { colorMode } = useColorMode();
  return (

    <section className="home">
      <div className="container">
        <Stack
          direction={['column-reverse', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '50']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading children="Learn DSA from FAANG Engineers" size={'2xl'} />
            <Text
              children="-Elevate Your Coding Skills to the Next Level!"
              fontFamily={'cursive'}
              fontWeight={600}
              fontSize={'large'}
            />
            <Link to="/courses">
              <Button colorScheme={'red'} size={'lg'}>
                Enroll Now
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} src="https://res.cloudinary.com/dosn50zdf/image/upload/v1726661895/bb53b387fc89cc00aa6219f6865e9158_wvuhlb.png" objectFit="contain" m={"0"} p={"0"}/>
        </Stack>
      </div>

      {/* Company Logos with Icons */}
      <Box padding={'8'} bg={bgColor} mt={['16','16']}>
        <Heading
          children="From Classroom to FAANG"
          textAlign={'center'}
          fontFamily="body"
          color={'pink.500'}
        />

        <HStack
          spacing={8}
          marginTop={'4'}
          justifyContent={'space-evenly'}
          wrap="wrap"
        >
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaFacebook size="50px" color={iconColor} />
        </Box>
          <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaAmazon size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaApple size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaMicrosoft size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaGoogle size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaLinkedin size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaGithub size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaTwitter size="50px" color={iconColor} />
        </Box>

        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaPaypal size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaSpotify size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaUber size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaPinterest size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaReddit size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaSnapchat size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaYoutube size="50px" color={iconColor} />
        </Box>
        <Box border="2px" borderColor="white" borderRadius="md" p="4">
          <FaAdobe size="50px" color={iconColor} />
        </Box>
          <Box border="2px" borderColor="white" borderRadius="md" p="4">
            <SiNetapp size="50px" color={iconColor} />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md" p="4">
            <SiHitachi size="50px" color={iconColor} />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md" p="4">
            <SiMercedes size="50px" color={iconColor} />
          </Box>
        </HStack>
      </Box>

      {/* Video Section */}
      <div className="container2">
        <video
          controls
          autoPlay
          muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          poster={thumbnail}
          src="https://res.cloudinary.com/dosn50zdf/video/upload/v1725946731/1_avybrd.mkv"
          style={{
            border: `3px solid ${colorMode === 'light' ? 'black' : 'white'}`, // Black 
            borderRadius: '8px', 
          }}
        />
      </div>
    </section>
  );
};

export default Home;
