import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  MenuDivider,
  Flex,
  Box,
  Button,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link to="/">Home</Link>
              <Link to="/signup">Signup</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
              >
                <p>avatar</p>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {' '}
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/signup">Signup</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navigation;
