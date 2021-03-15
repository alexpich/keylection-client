import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { Box } from '@chakra-ui/layout';
import { TabList, Tab, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { useColorMode } from '@chakra-ui/color-mode';

const Form = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'light' ? '#fafafa' : '#111'}
      w="350px"
      p={3}
      boxShadow="sm"
      rounded="md"
    >
      <Tabs variant="enclosed-colored" isFitted>
        <TabList>
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignupForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Form;
