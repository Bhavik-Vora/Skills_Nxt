import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../Assets/videos/1.mkv';
import thumbnail from '../../Assets/images/Video_thumbnail.jpeg';

const CoursePage = () => {
  const [lectureNumber,setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: Math.floor(Math.random() * 10000),
      title: 'Sample',
      description: 'Sample_Desc',
      video: {
        url: '',
      },
    },
    {
        _id: Math.floor(Math.random() * 10000),
        title: 'Sample2',
        description: 'Sample2_Desc',
        video: {
          url: '',
        },
      },
      {
        _id: Math.floor(Math.random() * 10000),
        title: 'Sample3',
        description: 'Sample3_Desc',
        video: {
          url: '',
        },
      },
  ];
  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '3fr 1fr']} py={["20","20"]}>
        <Box>
          <video
            width={'100%'}
            // autoPlay
            controls
            controlsList="nodownload  noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            poster={thumbnail}
            src={introVideo}
          />

          <Heading
            m={'4'}
            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          />
          <Heading children={'description'} m={'4'} />
          <Text m={'4'} children={lectures[lectureNumber].description} />
        </Box>
        <VStack>
          {lectures.map((element, index) => (
            <button
                onClick={()=>setLectureNumber(index)}
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
      </Grid>
    </>
  );
};

export default CoursePage;
