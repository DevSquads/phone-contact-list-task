// Libraries Imports
import React from "react";
import _ from "lodash";

// Components Imoprts
import { View, FlatList, Dimensions, Text } from "react-native";
import { ListItem } from "react-native-elements";

export default class NamesList extends React.Component {
  state = {
    list: _.orderBy(require("../NamesList.json"), ["name"], ["asc"]),
    copiedVersion: _.orderBy(require("../NamesList.json"), ["name"], ["asc"]), // To be able to render the new list according to search text
    emptyListFlag: false
  };

  // Lif-cycle methods implementation
  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      const filteredList = _.filter(this.state.copiedVersion, user =>
        user.name.includes(_.startCase(_.toLower(this.props.searchText)))
      );
      console.log(filteredList);
      if (filteredList.length === 0) {
        this.setState({ emptyListFlag: true });
      } else {
        this.setState({
          list: filteredList,
          emptyListFlag: false
        });
      }
    }
  }

  render() {
    if (!this.state.emptyListFlag) {
      return (
        <FlatList
          legacyImplementation={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.list}
          renderItem={({ item }) => (
            <ListItem
              testID="name"
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
    } else {
      return (
        <View
          testID="wrong-searchText"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 15, marginTop: 20 }}>
            There's no match for your search.
          </Text>
        </View>
      );
    }
  }

  // User defined functions

  // ------ Helper Components ------
  renderSperator = () => {
    const { width } = Dimensions.get("window");
    return (
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
  };
}
