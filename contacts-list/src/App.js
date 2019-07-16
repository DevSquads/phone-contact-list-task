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
  HandleSearch = SearchText => {
    console.log("before");
    if (SearchText != "") {
      console.log("afteriftrue");

      const filterdArr = ArrData.filter(item => {
        var PerName = item.name.toLowerCase();
        return (
          PerName.includes(SearchText.toLowerCase()) ||
          PerName.search(SearchText.toLowerCase()) > 0
        );
      });
      console.log(filterdArr);
      this.setState({ ListOFConatcts: filterdArr });
    } else {
      console.log("afteriffalse");
      this.setState({ ListOFConatcts: ArrData });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div className="col-9 mt-5">
            <SerchBar HandelSearchChange={this.HandleSearch} />
            <div className="row pre-scrollable " style={{ height: "600px" }}>
              {this.state.ListOFConatcts.map(i => {
                return <ContList name={i["name"]} imageU={i["ImgUrl"]} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
