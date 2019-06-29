import React, { Component } from 'react';
import { Header, ThemeProvider, Button, Text } from 'react-native-elements';
import AppNavigator from './navigators/AppNavigator';

class Application extends Component {
  render() {
    return (
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    );
  }
}

export default Application;