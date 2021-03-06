import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { InfoIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';

const SignupForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First Name"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input type="name" placeholder="Last name" aria-label="Last Name" />
          </InputGroup>
        </FormControl>

        <Divider borderColor="gray.300" />

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>

        <Button type="submit" boxShadow="sm">
          Sign Up
        </Button>

        <FormControl>
          <FormHelperText>Your email is safe with us.</FormHelperText>
        </FormControl>
      </Stack>
    </form>
  );
};

export default SignupForm;
