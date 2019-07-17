// Libraries Imports
import React from "react";

// Screens Imports
import MainContactsScreen from "./Components/MainContactsScreen";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true; // to disable the warnnings
    return <MainContactsScreen />;
  }
}
