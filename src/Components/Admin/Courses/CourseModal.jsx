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

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteLectureButtonHandler,
  addLectureHandler,
  courseTitle,
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
                <VideoCard
                  title="Introduction To JS"
                  description="Starting with Basic of JavaScript"
                  num={1}
                  lectureId={123}
                  courseId={id}
                  deleteLectureButtonHandler={deleteLectureButtonHandler}
                />
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
              accept="video/mp4"
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
            <Button w={'full'} colorScheme='purple' type='submit'>Upload </Button>
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
  deleteLectureButtonHandler,
}) {
  const deleteHandler = () => {
    console.log(deleteHandler);
  };
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
        onClick={() => deleteHandler(courseId, lectureId)}
      >
        {' '}
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
