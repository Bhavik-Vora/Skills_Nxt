import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription, loadUser, removeSubscription } from '../../Redux/action/user.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Subscribe = ({ user }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message, subscription } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  // Handler for subscribing
  const subscribeHandler = async () => {
    if (!subscription || subscription.status !== 'active') {
      dispatch(buySubscription());
      dispatch(loadUser());
      navigate('/paymentsuccess'); 
    } else {
      toast.error("You already have an active subscription.");
      navigate('/profile'); // Redirect to profile page if already subscribed
    }
  };
  
  // Handler for canceling subscription
  const cancelSubscriptionHandler = async () => {
    if (subscription && subscription.status === 'active') {
      dispatch(removeSubscription());
      dispatch(loadUser());
    } else {
      toast.error("No active subscription to cancel.");
    }
  };

  useEffect(() => {
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [error, message, dispatch, courseError, subscription]);

  return (
    <Container p={['16', '2']}>
      <Heading children="Welcome" my="8" textAlign={'center'} />

      <SimpleGrid columns={[1, 2, 2]} spacing={8} justify="center">
        
        {/* First Box */}
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
          w="full"
          maxW="300px"
        >
          <Box
            bg={colorMode === 'light' ? 'red.400' : 'red.600'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
            h="100px"
          >
            <Text color={colorMode === 'light' ? 'black' : 'white'}>
              Delta 5.0: Complete Web Development!
            </Text>
          </Box>
          <Box
            p="4"
            h="200px"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            <VStack textAlign={'center'}  px={'4'} mt={'4'} spacing={'4'}>
              <Text>Full Stack Web Development Course</Text>
              <Heading size={'md'}>₹4999 Only</Heading>
            </VStack>
            <Button
              mt={'8'}
              w={'full'}
              colorScheme="red"
              onClick={subscribeHandler}
              isLoading={loading}
              disabled={loading}
            >
              Buy Now
            </Button>
          </Box>
          <Box
            bg={colorMode === 'light' ? 'blackAlpha.600' : 'blackAlpha.800'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
            h="100px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <Heading
              size={'sm'}
              children={'100% Refund at Cancellation'}
              color={'white'}
              textTransform={'uppercase'}
              mb="2"
            />
            <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms & Condition Apply*'}
            />
          </Box>
        </VStack>

        {/* Second Box */}
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
          w="full"
          maxW="300px"
        >
          <Box
            bg={colorMode === 'light' ? 'green.400' : 'green.600'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
            h="100px"
          >
            <Text color={colorMode === 'light' ? 'black' : 'white'}>
              Alpha Plus 3.0
            </Text>
          </Box>
          <Box
            p="4"
            h="200px"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            <VStack textAlign={'center'}  px={'4'} mt={'4'} spacing={'4'}>
              <Text>Data Structures & Algorithms Course</Text>
              <Heading size={'md'}>₹4999 Only</Heading>
            </VStack>
            <Button
              mt={'8'}
              w={'full'}
              colorScheme="green"
              onClick={subscribeHandler}
              isLoading={loading}
              disabled={loading}
            >
              Buy Now
            </Button>
          </Box>
          <Box
            bg={colorMode === 'light' ? 'blackAlpha.600' : 'blackAlpha.800'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
            h="100px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <Heading
              size={'sm'}
              children={'100% Refund at Cancellation'}
              color={'white'}
              textTransform={'uppercase'}
              mb="2"
            />
            <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms & Condition Apply*'}
            />
          </Box>
        </VStack>

        {/* Third Box */}
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
          w="full"
          maxW="300px"
        >
          <Box
            bg={colorMode === 'light' ? 'blue.400' : 'blue.600'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
            h="100px"
          >
            <Text color={colorMode === 'light' ? 'black' : 'white'}>
              C++ with Data Structures & Algorithms
            </Text>
          </Box>
          <Box
            p="4"
            h="200px"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            <VStack textAlign={'center'}  px={'4'} mt={'4'} spacing={'4'}>
              <Text>Data Structures & Algorithms Course</Text>
              <Heading size={'md'}>₹2999 Only</Heading>
            </VStack>
            <Button
              mt={'8'}
              w={'full'}
              colorScheme="blue"
              onClick={subscribeHandler}
              isLoading={loading}
              disabled={loading}
            >
              Buy Now
            </Button>
          </Box>
          <Box
            bg={colorMode === 'light' ? 'blackAlpha.600' : 'blackAlpha.800'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
            h="100px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <Heading
              size={'sm'}
              children={'100% Refund at Cancellation'}
              color={'white'}
              textTransform={'uppercase'}
              mb="2"
            />
            <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms & Condition Apply*'}
            />
          </Box>
        </VStack>

        {/* Fourth Box */}
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
          w="full"
          maxW="300px"
        >
          <Box
            bg={colorMode === 'light' ? 'purple.400' : 'purple.600'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
            h="100px"
          >
            <Text color={colorMode === 'light' ? 'black' : 'white'}>
              Sigma 4.0: Complete Placement Preparation!
            </Text>
          </Box>
          <Box
            p="4"
            h="200px"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            <VStack textAlign={'center'} px={'4'} mt={'4'} spacing={'4'}>
              <Text>Placement Preparation Course</Text>
              <Heading size={'md'}>₹7999 Only</Heading>
            </VStack>
            <Button
              mt={'8'}
              w={'full'}
              colorScheme="purple"
              onClick={subscribeHandler}
              isLoading={loading}
              disabled={loading}
            >
              Buy Now
            </Button>
          </Box>
          <Box
            bg={colorMode === 'light' ? 'blackAlpha.600' : 'blackAlpha.800'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
            h="100px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <Heading
              size={'sm'}
              children={'100% Refund at Cancellation'}
              color={'white'}
              textTransform={'uppercase'}
              mb="2"
            />
            <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms & Condition Apply*'}
            />
          </Box>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Subscribe;
