import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';
import top from '../../Assets/images/Home_Top_Banner.png';
import introVideo from '../../Assets/videos/1.mkv';
import thumbnail from "../../Assets/images/Video_thumbnail.jpeg"
const Home = () => {
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
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
            <Heading children="Learn DSA from FAANG Engineers" size={'2xl'} alignItems={['']} />
            <Text children="-Elevate Your Coding Skills to the Next Level!"  fontFamily={"cursive"} fontWeight={600} fontSize={"large"} />
            <Link to="/courses">
              <Button colorScheme={'red'} size={'lg'}>
                Enroll Now
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} src={top} objectFit="contain" />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          children="From Classroom to FAANG"
          textAlign={'center'}
          fontFamily="body"
          color={'green.400'}
        />
        <HStack
          className="img_banner"
          spacing={8}
          marginTop={'4'}
          justifyContent={'space-evenly'}
        >
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/ec5be16b046b62a2a860b67f9dc55b86.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/ee17a1d06126f8bfc5444ad666e8ba21.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/9e4198383730a6e7036b2c7cf50554d0.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/5a5a608278ba2b74aff5fb081f7df81c.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/02fb63567e1b107d549d5d15e922424b.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/5a5a608278ba2b74aff5fb081f7df81c.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/02fb63567e1b107d549d5d15e922424b.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/5a5a608278ba2b74aff5fb081f7df81c.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
          <Box border="2px" borderColor="white" borderRadius="md">
            <img
              src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/02fb63567e1b107d549d5d15e922424b.png"
              alt="Company Logo"
              width={'100'}
            />
          </Box>
        </HStack>
      </Box>
      <div className="container2">
        <video
          // autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          poster={thumbnail}
          src={introVideo}
        />
      </div>
    </section>
  );
};

export default Home;
