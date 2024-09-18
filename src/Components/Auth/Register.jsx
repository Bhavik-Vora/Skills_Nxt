import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import { register } from '../../Redux/action/user';
import { useDispatch } from 'react-redux';
const Register = () => {
  const backgroundColor = useColorModeValue('white', '#1A202C');
  const fileUploadCss = {
    '&::file-selector-button': {
      cursor: 'pointer',
      marginLeft: '-5%',
      width: '110%',
      border: 'none',
      height: '100%',
      color: 'red',
      backgroundColor: backgroundColor,
    },
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);

    dispatch(register(myForm));
  };
  return (
    <>
      <Container h={'95vh'}>
  
      <VStack h={'full'} justifyContent="center" spacing={'2'} mt={['0','8']}>

          <Heading children="Signup To Skills Nxt" />

          <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <Box my={'3'} display={'flex'} justifyContent="center">
              <Avatar size={['xl','lg']} src={imagePrev} />
            </Box>
            <Box my={'3'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Your Name..."
                type={'name'}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'3'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
                type={'email'}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'3'}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password.."
                type={'password'}
                focusBorderColor="yellow.500"
              />
            </Box>

            <Box my={'3'}>
              <FormLabel htmlFor="chooseAvatar" children="Choose a Avatar" />
              <Input
                accept="image/*"
                required
                id="chooseAvatar"
                type={'file'}
                css={fileUploadCss}
                focusBorderColor="yellow.500"
                onChange={changeImageHandler}
              />
            </Box>

            <Button my={'3'} colorScheme={'red'} type="submit">
              Sign Up
            </Button>

            <Box my="4">
              Already Signed Up ?{' '}
              <Link to="/login">
                <Button colorScheme="red" variant="link">
                  Login
                </Button>{' '}
                Here{' '}
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Register;
