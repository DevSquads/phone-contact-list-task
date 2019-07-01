import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppNavigator from './navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './redux-store/store';

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <AppNavigator/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Application;