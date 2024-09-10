import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/action/profile';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    
    const dispatch = useDispatch();
    const {loading,error,message}= useSelector(state=>state.profile);
    
    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(forgetPassword(email))
    }

    useEffect(() => {
      if (error) {
        toast.error(error,{
          duration:3000,
        });
        dispatch({ type: 'clearError' });
      }
  
      if (message) {
        toast.success(message,{
          duration:3000,
        });
        dispatch({ type: 'clearMessage' });
      }
    }, [error, message]);
  
  return (
    <>
      <Container h={'100vh'} py={'16'} >
        <form onSubmit={submitHandler}> 
          <Heading
            children="Forget Password"
            my='16'
            textTransform={'uppercase'}
            
            textAlign={['center', 'left']}
          />
          <VStack spacing={'8'}>
           
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
                type={'email'}
                focusBorderColor="yellow.500"/>

                <Button type='submit' w={'full'} colorScheme='red' isLoading={loading}>Send Reset Link</Button>
          </VStack>
      </form>
      </Container>
    </>
  );
};

export default ForgetPassword;
