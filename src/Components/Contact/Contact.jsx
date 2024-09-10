import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <Container h={'95vh'}>
        <VStack h="full" my={['24','16']}>
          <Heading children={'Contact Us'} />

          <form style={{ width: '100%' }}>
            <Box my={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Your Name..."
                type={'text'}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Your Email.."
                type={'email'}
                focusBorderColor="yellow.500"
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="Message" children="Message" />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter Your Message.."
                type={'text'}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Button my={'4'} colorScheme={'red'} type="submit">
              Submit
            </Button>

            <Box my="4">
              Request for a Course ?{" "}
              <Link to="/request_course">
                <Button colorScheme="red" variant="link">
                  Click
                </Button>
                {" "}Here{' '}
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Contact;
