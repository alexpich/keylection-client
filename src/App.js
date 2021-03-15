import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Navigation from './components/Navigation';
import Form from './pages/form';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <VStack spacing={8}> */}
          <Router>
            <Navigation />

            <Switch>
              <Route path="/signup">
                <Form />
              </Route>
            </Switch>
          </Router>
        {/* </VStack> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
