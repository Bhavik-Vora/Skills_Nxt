import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  
  const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    return (
      <>
        <Container h={'95vh'}>
          <VStack h="full" my={['24','16']}>
            <Heading children={'Request New Course'} />
  
            <form style={{ width: '100%' }}>
              <Box my={'4'}>
                <FormLabel htmlFor="name" children="Name" />
                <Input
                  required
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter Your Name..."
                  type={'text'}
                  focusBorderColor="yellow.500"
                />
              </Box>
              <Box my={'4'}>
                <FormLabel htmlFor="email" children="Email" />
                <Input
                  required
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter Your Email.."
                  type={'email'}
                  focusBorderColor="yellow.500"
                />
              </Box>
  
              <Box my={'4'}>
                <FormLabel htmlFor="Course" children="Course" />
                <Textarea
                  required
                  id="course"
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                  placeholder="Enter Your Course Name.."
                  type={'text'}
                  focusBorderColor="yellow.500"
                />
              </Box>
              <Button my={'4'} colorScheme={'red'} type="submit">
               Create a Request
              </Button>
  
              <Box my="4">
                See Available Course!!{" "}
                <Link to="/courses">
                  <Button colorScheme="red" variant="link">
                    Click
                  </Button>
                  {" "}Here{' '}
                </Link>
              </Box>
            </form>
          </VStack>
        </Container>
      </>
    );
  };
  

export default Request