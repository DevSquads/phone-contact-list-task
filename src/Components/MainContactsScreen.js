// Libraries Imports
import React from "react";

// Components Imoprts
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import * as Animatable from "react-native-animatable";

// User Defined Components Imports
import NamesList from "./NamesList";

export default class MainContactsScreen extends React.Component {
  state = {
    search: "",
    searchBarFocused: false
  };

  // Lif-cycle methods implementation
  componentDidMount() {
    if (Platform.OS === "ios") {
      this.keyboardWillShow = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardWillShow
      );
    } else {
      this.keyboardDidShow = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardDidShow
      );
    }
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidHide.remove();
  }

  render() {
    const { search } = this.state;

    return (
      // ------ Header Section --------
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#00529B" />
          <View style={styles.header}>
            <Text style={styles.name}>Contacts List</Text>
            <Animatable.View
              style={styles.inputContainer}
              animation="slideInRight"
              duration={500}
            >
              <Animatable.View
                animation={
                  this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
                }
              >
                <Icon
                  name={this.state.searchBarFocused ? "chevron-left" : "search"}
                  color="#fff"
                  size={30}
                  onPress={() => this.inputBlur()}
                />
              </Animatable.View>
              <TextInput
                placeholder="Search Contacts ..."
                style={styles.input}
                placeholderTextColor="#fff"
                value={search}
                testID="searchText"
                onChangeText={this.updateSearch}
                ref={ref => (this.ref = ref)}
                duration={400}
              />
            </Animatable.View>
          </View>

          {/* ----- List of names to be rendered and search functionality implementation ------ */}
          <NamesList searchText={this.state.search} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // -------- Event Handlers ---------

  // Input Event Handlers
  updateSearch = search => {
    this.setState({ search });
  };
  inputBlur() {
    this.ref.blur();
    this.setState({ searchBarFocused: false });
  }

  // Keyboard Event Handlers
  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  keyboardDidHide = () => {
    this.ref.blur();
    this.setState({ searchBarFocused: false });
  };
}

// Styles
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    height: height * 0.154,
    backgroundColor: "#00529B",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    alignItems: "center"
  },
  name: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    paddingTop: 0.02 * height
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    height: 0.06 * height,
    backgroundColor: "#005bac",
    borderRadius: 25,
    width: 0.75 * width,
    marginTop: 0.02 * height
  },
  input: {
    height: 0.4 * height,
    flex: 1,
    color: "#fff"
  }
});
