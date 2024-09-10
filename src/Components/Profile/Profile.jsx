import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import thumbnail from '../../Assets/images/Video_thumbnail.jpeg';
import { RiDeleteBin7Fill } from 'react-icons/ri';

import { useColorModeValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromPlaylist,
  updateProfilePicture,
} from '../../Redux/action/profile';
import { loadUser } from '../../Redux/action/user';
import toast from 'react-hot-toast';

const Profile = ({ user }) => {
  const backgroundColor = useColorModeValue('white', '#1A202C');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);
 
  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser())
  };

  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    if (!image) {
      toast.error('No file selected. Please choose an image.', {
        duration: 3000,
      });
      return;
    }
    const myForm = new FormData();
    myForm.append('file', image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };
  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 10000 // Duration in milliseconds
      });
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message, {
        duration: 10000, // Duration in milliseconds
      });
      dispatch({ type: 'clearMessage' });
    }
  }, [error, message, dispatch]);

  function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
    const closeHandler = () => {
      onClose();
      setImagePrev('');
      setImage('');
    };
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter={'blur(10px)'}>
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Container>
                <form onSubmit={e => changeImageSubmitHandler(e, image)}>
                  <VStack spacing={'8'}>
                    {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                    <Input
                      type={'file'}
                      accept="image/*"
                      css={{
                        '&::file-selector-button': {
                          cursor: 'pointer',
                          marginLeft: '-5%',
                          width: '110%',
                          border: 'none',
                          height: '100%',
                          color: 'red',
                          backgroundColor: backgroundColor,
                        },
                      }}
                      onChange={changeImage}
                    />
                    <Button
                      w={'full'}
                      colorScheme="purple"
                      type="submit"
                      isLoading={loading}
                    >
                      Change
                    </Button>
                  </VStack>
                </form>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button mr={'3'} onClick={closeHandler}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    );
  }

  return (
    <Container minH={'100vh'} maxW="container.lg" py="8">
      <Heading
        children="Profile"
        m="8"
        textTransform={'uppercase'}
        textAlign={'center'}
      />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="5"
      >
        <VStack>
          <Avatar boxSize={'40'} src={user.avatar.url} />
          <Button colorScheme={'purple'} variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button colorScheme={'purple'}>Cancel Subscription</Button>
              ) : (
                <Link
                  to="/subscribe"
                  children={<Button colorScheme="purple">Subscribe</Button>}
                />
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map(element => {
            return (
              <VStack w="48" m="2" key={element.course}>
                <Image
                  boxSize={'full'}
                  objectFit={'contain'}
                  src={element.poster}
                />
                <HStack>
                  <Link to={`/courses/${element.course}`}>
                    <Button variant={'ghost'} colorScheme="yellow">
                      Watch Now
                    </Button>
                  </Link>
                  <Button isLoading={loading}
                    onClick={() => removeFromPlaylistHandler(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            );
          })}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;
