import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../Redux/action/user';


const Login = ({user}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler= (e) =>{
    e.preventDefault();
    dispatch(login(email,password))
  }
  return (
    <>
      <Container h={'100vh'}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
          <Heading>Welcome To Skills Nxt</Heading>
          <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <Box my={'4'}>
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
            <Box my={'4'}>
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
            <Box>
              <Link to="/forgetpassword">
                <Button fontSize={'sm'} variant={'link'}>
                  Forget Password ?
                </Button>
              </Link>
            </Box>
            <Button my={'4'} colorScheme={'red'} type="submit">
              Login
            </Button>

            <Box my="4">
              New User ?{" "}
              <Link to="/register">
                <Button colorScheme="red" variant="link">
                  Sign Up
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

export default Login;
