import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../Assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import thumbnail from '../../../Assets/images/Video_thumbnail.jpeg';
import CourseModal from './CourseModal';

const Admin_Course = () => {
  const courses = [
    {
      _id: Math.floor(Math.random() * 100000),
      title: 'Sigma 5.0 - Apna College',
      category: 'Web Devlopment',
      poster: {
        url: thumbnail,
      },
      createdBy: 'Shardha Khapra',
      views: Math.floor(Math.random() * 1000),
      numOfVideos: Math.floor(Math.random() * 100),
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courseDetailsHandler = userId => {
    console.log(userId);
    onOpen();
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandle = (courseId, lectureId) => {
    console.log(courseId, '', lectureId);
  };

  const addLectureHandler = () =>{

  }



  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available Courses</TableCaption>

            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Poster</Th>
                <Th>Creator</Th>
                <Th>Category</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteLectureButtonHandler={deleteLectureButtonHandle}
          addLectureHandler={addLectureHandler}
          id={Math.floor(Math.random() * 1000)}
          courseTitle="Delta1.0_Admin_Course"
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};
export default Admin_Course;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.title}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.createdBy}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lectures
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
