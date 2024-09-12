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
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { contactUs } from '../../Redux/action/other';
import { useDispatch, useSelector } from 'react-redux';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, stateMessage]);
  return (
    <>
      <Container h={'95vh'}>
        <VStack h="full" my={['24','16']}>
          <Heading children={'Contact Us'} />

          <form style={{ width: '100%' }} onSubmit={submitHandler}>
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
            <Button my={'4'} colorScheme={'red'} type="submit"   isLoading={loading}>
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
