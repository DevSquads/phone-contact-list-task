// Libraries Imports
import React from "react";

// Screens Imports
import ContactsList from "./Screens/ContactsList";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true; // to disable the warnnings
    return <ContactsList />;
  }
}
