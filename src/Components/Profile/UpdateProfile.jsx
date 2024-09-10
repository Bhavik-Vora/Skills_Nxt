import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../Redux/action/profile';
import toast from 'react-hot-toast';
import { loadUser } from '../../Redux/action/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message } = useSelector(state => state.profile);
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };
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
  }, [error, message,dispatch]);

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children={'Update Profile'}
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Your Name.."
            type={'text'}
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Your Email .."
            type={'email'}
            focusBorderColor="yellow.500"
          />

          <Button w={'full'} colorScheme="purple" type="submit" isLoading={loading}>
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
