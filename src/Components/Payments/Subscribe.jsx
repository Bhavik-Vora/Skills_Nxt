import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../Redux/action/user.js';
import toast from 'react-hot-toast';

const Subscribe = () => {
  const dispatch = useDispatch();

  const {loading,error,message}= useSelector(state=>state.subscription)
  const submitHandler = useCallback(async () => {
    try {
      await dispatch(buySubscription());
    } catch (err) {
      // Optionally handle any additional errors here
    }
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' }); // Clear error after showing toast
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' }); // Clear message after showing toast
    }
  }, [error, message, dispatch])
  return (
    <>
      <Container h={'90vh'} p={'16'}>
        <Heading children="Welcome" my="8" textAlign={'center'} />
        <VStack
          boxShadow={'lg'}
          alignItems={'stretch'}
          borderRadius={'lg'}
          spacing={'0'}
        >
          <Box bg="red.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
            <Text color={'black'} children={'Delta 5.0 - ₹7999'} />
          </Box>

          <Box p="4">
            <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
              <Text
                children={'Full Stack Web Development Course'}
              />
              <Heading size={'md'} children={'₹7999 Only'} />
            </VStack>
            <Button m={0} mt={'8'} w={'full'} colorScheme="red" onClick={submitHandler}isLoading={loading} disabled={loading}>
            Buy Now
            </Button>
          </Box>

          <Box
            bg={'blackAlpha.600'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
          >
            <Heading
              size={'sm'}
              children={'100% Refund at Cancellation'}
              color={'white'}
              textTransform={'uppercase'}
            />
            <Text fontSize={'xs'} color={'white'} children={'*Terms &  Condition Apply*'}/>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
