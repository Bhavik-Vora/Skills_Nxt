import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  RiDashboardFill,
  RiLogoutBoxLine,
  RiMenu5Fill as RiMenu5,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../../../Redux/action/user';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const LinkButton = ({ url = '/', title = 'Home', onClick = { onClose } }) => (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'red'}
        position={'fixed'}
        top="6"
        left="6"
        rounded={'full'}
        width="12"
        zIndex={'overlay'}
        height={'12'}
      >
        <RiMenu5 />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(5px)'} />
        <DrawerContent>
          <DrawerHeader textAlign={'left'} borderBottomWidth={'1px'}>
            SkilsNxt
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton onClick={onClose} url="/" title="Home" />
              <LinkButton onClick={onClose} url="/courses" title="Courses" />
              <LinkButton onClick={onClose} url="/subscribe" title="Subscribe" />
              <LinkButton onClick={onClose} url="/aboutus" title="About Us" />
              
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position="absolute"
              bottom={'2rem'}
              width="80%"
            >
             {isAuthenticated ? (
  <>
    <VStack spacing={'4'}>
      <HStack spacing={'4'}>
        <Link onClick={onClose} to="/profile">
          <Button variant={'ghost'} colorScheme={'yellow'}>
            Profile
          </Button>
        </Link>
        <Button variant={'ghost'} onClick={logoutHandler}>
          <RiLogoutBoxLine />
          Logout
        </Button>
      </HStack>
      {user && user.role === 'admin' && (
        <Link onClick={onClose} to="/admin/dashboard">
          <Button colorScheme={'purple'} variant={'ghost'}>
            <RiDashboardFill style={{ marginLeft: '4px' }} />
            Dashboard
          </Button>
        </Link>
      )}
    </VStack>
  </>
) : (
  <>
    <Link onClick={onClose} to="/login">
      <Button colorScheme={'yellow'}>Login</Button>
    </Link>
    <p>OR</p>
    <Link onClick={onClose} to="/register">
      <Button colorScheme={'yellow'}>Register</Button>
    </Link>
  </>
)}

            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
