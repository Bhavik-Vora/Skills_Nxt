import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from "../../Assets/images/Video_thumbnail.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../Redux/action/course';
import { loadUser } from '../../Redux/action/user';
import { addToPlaylist } from '../../Redux/action/profile';
import { toast } from 'react-hot-toast';

const Course = ({
  title,
  views,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={2}
        children={title}
        size={'sm'}
      >
        {title || 'No Title'} {/* Default text if title is not provided */}
      </Heading>
      <Text
        w="full"
        noOfLines={2} // Limit the description to 2 lines, wrapping it if too long
      >
        {description || 'No description available'}
      </Text>
      <HStack>
        <Text
          children={'creator'}
          textTransform={'uppercase'}
          fontWeight={'bold'}
        />
        <Text
          children={creator}
          textTransform={'uppercase'}
          fontFamily={'body'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lecture - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/courses/${id}`}>
          <Button colorScheme={'red'}>Play Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'red'}
          isLoading={loading}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addToPlaylistHandler = async courseId => {
    const toastId = toast.loading('Adding to Playlist...', { duration: 10000 });
    try {
      await dispatch(addToPlaylist(courseId));
      dispatch(loadUser());
      toast.success('Added to Playlist!', { id: toastId, duration: 5000 });
    } catch (error) {
      toast.error('Failed to add to Playlist', { id: toastId, duration: 5000 });
    }
  };

  const categories = [
    'Web development',
    'Data Structure & Algorithm',
    'Youtube Free Playlist',
  ];

  const { loading, courses, error, message } = useSelector(state => state.course);

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error, { duration: 5000 });
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message, { duration: 5000 });
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type={'text'}
        focusBorderColor="red.600"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => {
          return (
            <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['center', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
