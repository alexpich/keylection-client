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

const LoginForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
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

        <Button type="submit" boxShadow='sm'>Sign In</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
