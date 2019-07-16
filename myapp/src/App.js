import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/layout/Header";
import a1 from "./components/a1.png";
import a2 from "./components/a2.png";
import a3 from "./components/a3.png";
import a4 from "./components/a4.png";
import a5 from "./components/a5.png";

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Divan Raj",
        career: "Visual Designer",
        picture: a1
      },
      {
        id: 2,
        name: "Allan Samuel",
        career: "Content Writer",
        picture: a2
      },
      {
        id: 3,
        name: "Manoj Karthik",
        career: "Web Developer",
        picture: a3
      },
      {
        id: 4,
        name: "Anushka Tiwari",
        career: "Marketer",
        picture: a4
      },
      {
        id: 5,
        name: "Jhonson",
        career: "Android developer",
        picture: a5
      }
    ]
  };

  render() {
    return (
      <div
        className="App"
        style={{
          width: "300px",
          height: "300px",
          marginLeft: "50px",
          marginTop: "10px"
        }}
      >
        <Header />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
