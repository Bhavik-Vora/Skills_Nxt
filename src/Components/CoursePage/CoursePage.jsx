import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import thumbnail from '../../Assets/images/Video_thumbnail.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../Redux/action/course';
import Loader from '../layout/Loader/Loader.jsx';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);
  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) return <Navigate to={'/subscribe'} />;
  
  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'100vh'} templateColumns={['1fr', '3fr 1fr']} py={['20', '20']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              poster={thumbnail}
              src={lectures[lectureNumber].video.url}
            />

            <Heading
              m={'4'}
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />
            <Heading children={'description'} m={'4'} />
            <Text m={'4'} children={lectures[lectureNumber].description} />
          </Box>
          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading children="No Lectures Found"></Heading>
      )}
    </Grid>
  );
};

export default CoursePage;
