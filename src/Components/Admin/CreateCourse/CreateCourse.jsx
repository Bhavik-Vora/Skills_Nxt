import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../Assets/images/cursor.png';

import { useColorModeValue } from '@chakra-ui/react';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const categories = [
    'Web Development',
    'App development',
    'Data Structure & Algorithm',
    'Data Science',
    'Game Development',
  ];
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const backgroundColor = useColorModeValue('white', '#1A202C');
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children={'create course'}
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type={'text'}
              focusBorderColor="purple.300"
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type={'text'}
              focusBorderColor="purple.300"
            />

            <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator"
              type={'text'}
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
             
              {categories.map(item => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
            <Input
              accept="image/*"
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
              focusBorderColor="yellow.500"
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            <Button w='full' colorScheme='purple' type='submit' children='Create'/>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
