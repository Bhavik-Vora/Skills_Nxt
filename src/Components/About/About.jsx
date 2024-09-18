import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// import thumbnail from '../../Assets/images/Video_thumbnail.jpeg';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TandCo from "../../Assets/docs/termsAndCondition.js"

const handleAutoplay = (e) => {
  e.target.play();
};

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          boxSize={['40', '48']}
          src={
            'https://yt3.googleusercontent.com/sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s900-c-k-c0x00ffffff-no-rj'
          }
        />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children={'Shardha Khapra'} size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={
            "I'm Shradha, Ex-Microsoft Software Engineer,I believe that skills are more important today and want to help students to learn & crack their dream companies ❤️So, I left my Microsoft Job and started to teach students. I love my students and I love sharing my learnings.To Chalo Phodte hain!"
          }
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        accept="video/*"
        controls
        autoPlay
        muted
        loop
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedData={handleAutoplay}
        src="https://res.cloudinary.com/dosn50zdf/video/upload/f_mp4/v1726654707/1920x1080_Alpha_Batch_3.0_nxftvs.mp4"
        width={"100%"}
            
      />
      
    </Box>
  );
};
const TandC = ({ termscondition }) => {
  return (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my={'4'}
      />
      <Box h={'sm'} p={'4'} overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
          
        >
          {termscondition}
        </Text>
        <Heading my={'4'} size={'xs'} children={'Refund only applicable within 7 days of purchase date'}/>
      </Box>
    </Box>
  );
};
const About = () => {
  return (
    <>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading children={'About Us'} textAlign={['center', 'left']} />
        <Founder />
        <Stack m="8" direction={['column', 'row']} alignItems={'center'}>
          <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
            Where Learning Meets Excellence: Access Premium Courses Today.
          </Text>
          <Link to="/subscribe">
            <Button variant={'ghost'} colorScheme="red">
              Checkout Our Courses
            </Button>
          </Link>
        </Stack>

        <VideoPlayer />
        <TandC termscondition={TandCo} />
        <HStack my={'4'} p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily={'sans-serif'}
            textTransform={'uppercase'}
            children={'Payment is Secured By RazorPay'}
          />
        </HStack>
      </Container>
    </>
  );
};

export default About;
