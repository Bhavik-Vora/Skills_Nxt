import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  loading,
  lectures = [],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');
  const backgroundColor = useColorModeValue('white', '#1A202C');
  const changeVideoHandler = (e) =>{
    
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
          setVideoPrev(reader.result);
          setVideo(file);
        };
  }
  const ModalCloseHandler = () =>{
    setDescription("");
    setVideo("");
    setTitle("");
    setVideoPrev("");
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} size={'full'} onClose={ModalCloseHandler} scrollBehavior='outside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton/>

          <ModalBody p={'16'}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={'5'}>
                  <Heading children={courseTitle}></Heading>
                  <Heading children={`${id}`} size={'sm'} opacity={0.4} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                {lectures.map((item, i) => (
                <VideoCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  num={i + 1}
                  lectureId={item._id}
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                  loading={loading}
                />
              ))}
              </Box>
              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={'4'}>
                    <Heading
                      children="Add Lectures"
                      size={'md'}
                      textTransform={'upppercase'}
                    />

                    <Input
                      focusBorderColor="purple"
                      placeholder="Title"
                      value={title}
                      onChange={e => {
                        setTitle(e.target.value);
                      }}
                    />

                    <Input
                      focusBorderColor="purple"
                      placeholder="Description"
                      value={description}
                      onChange={e => {
                        setDescription(e.target.value);
                      }}
                    />
                      <Input
              accept=".mp4, .webm, .ogg, .mov, .avi, .mkv"
              required
              id="chooseAvatar"
              type={'file'}
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
              onChange={changeVideoHandler}
            />
            {
                videoPrev && (
                    <video src={videoPrev}  controls
                    controlsList="nodownload  noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    acc
                    />
                )
            }
            <Button w={'full'} colorScheme='purple' type='submit' isLoading={loading}>Upload </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={ModalCloseHandler}>Close</Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
  loading
}) {
  
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
        isLoading={loading}
      >
        {' '}
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
