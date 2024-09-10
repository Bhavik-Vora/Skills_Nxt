import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FaBan } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const PaymentFail = () => {
  return (
    <>
      <Container h="100vh" p="16" mt={'16'}>
        <VStack
          boxShadow={'lg'}
          alignItems={'center'}
          borderRadius={'lg'}
          pb={'16'}
        >
          <Box
            w={'full'}
            bg={'orange.500'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
          >
            <Text color="black">Payment Failed </Text>
          </Box>
          <Box p="4">
            <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
              <Text>
                Oops! Something Went Wrong with Your Payment.
              </Text>
              <Heading size={'3xl'}>
                <IoIosCloseCircle />
              </Heading>
            </VStack>
          </Box>

          <Link
            to="/subscribe"
            children={<Button variant={'ghost'}>Try Again</Button>}
          />
          <Text>Reference ID: {Math.floor(Math.random() * 100000000)}</Text>
        </VStack>
      </Container>
    </>
  );
};

export default PaymentFail;
