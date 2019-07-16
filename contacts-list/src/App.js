import React from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ArrData from "./DummyData";
import ContList from "./Components/ContList/ContList";
import SerchBar from "./Components/SerchBar/SerchBar";

export default class App extends React.Component {
  state = {
    ListOFConatcts: ArrData
  };
  render() {
    return (
      <div>
        <SerchBar />
        {this.state.ListOFConatcts.map(i => {
          return <ContList name={i["name"]} imageU={i["ImgUrl"]} />;
        })}
      </div>
    );
  }
}
