// Libraries Imports
import React from "react";

// Components Imoprts
import { View, FlatList, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";

// Requiring the file contains the names to be rendered
const list = require("../NamesList.json");

// the width of the current screen
const { width } = Dimensions.get("window");

export default class NamesList extends React.Component {
  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
              source: require("../../assests/male-avatar.jpg")
            }}
          />
        )}
        ItemSeparatorComponent={this.renderSperator}
      />
    );
  }

  // User defined functions
  renderSperator = () => (
    <View
      style={{
        height: 1,
        opacity: 0.5,
        width: width * 0.8,
        backgroundColor: "#CED0CE",
        marginLeft: width * 0.05
      }}
    />
  );
}
