import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiChatSettingsFill, RiCheckboxCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const PaymentSuccess = () => {
  const { subscriptionId } = useSelector((state) => state.subscription);
  return (
    <>
      <Container h="100vh" p="16">
        <Heading my={'8'} textAlign={'center'}>
          You have Already Purchased the Course!
        </Heading>
        <VStack
          boxShadow={'lg'}
          alignItems={'center'}
          borderRadius={'lg'}
          pb={'16'}
        >
          <Box
            w={'full'}
            bg={'green.400'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
          >
            <Text color="black">Payment Success </Text>
          </Box>
          <Box p="4">
            <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
              <Text>
                Congratulations! You're One Step Closer to Your Goals.
              </Text>
              <Heading size={'3xl'}>
                <RiCheckboxCircleFill />
              </Heading>
            </VStack>
          </Box>

          <Link
            to="/profile"
            children={<Button variant={'ghost'}>Go to Dashboard</Button>}
          />
         <Text>Reference ID: {subscriptionId || 'Not available'}</Text>
        </VStack>
      </Container>
    </>
  );
};

export default PaymentSuccess;
