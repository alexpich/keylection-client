import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
// import { Box } from '@chakra-ui/layout';
import { Box, VStack, Grid } from '@chakra-ui/react';
import { TabList, Tab, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { useColorMode } from '@chakra-ui/color-mode';

const Form = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
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
        </VStack>
      </Grid>
    </Box>
  );
};

export default Form;

{
  /* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Router>
              <div>
                <Navigation />

                <Switch>
                  <Route path="/signup">
                    <Form />
                  </Route>
                </Switch>
              </div>
            </Router>
          </VStack>


        </Grid> */
}
