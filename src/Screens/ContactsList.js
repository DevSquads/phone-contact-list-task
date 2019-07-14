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
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import * as Animatable from "react-native-animatable";

export default class ContactsList extends React.Component {
  state = {
    search: "",
    searchBarFocused: false,
    orientation: "portrait"
  };

  // Implementing life-cycle Functions
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#00529B" />
          <View style={styles.header}>
            <Text style={styles.name}>CONTACTS LIST</Text>
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
                onChangeText={this.updateSearch}
                ref={ref => (this.ref = ref)}
                duration={400}
              />
            </Animatable.View>
          </View>
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
const styles = StyleSheet.create({
  header: {
    height: 120,
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
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    paddingTop: 20
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    height: 40,
    backgroundColor: "#005bac",
    borderRadius: 100,
    width: "75%",
    marginTop: 20
  },
  input: {
    height: 40,
    flex: 1,
    color: "#fff"
  }
});
