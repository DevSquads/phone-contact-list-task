import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onSearchChange = (text) => {
    this.setState({ searchText: text });
    this.props.onSearchChange(text);
  };

  render() {
    return (
      <View style={{}}>
        <Input
          placeholder={'Search...'}
          rightIcon={{ type: 'font-awesome', name: 'search', color: '#ced0d8' }}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          labelStyle={styles.placeholder}
          placeholderTextColor={'#ecf0f1'}
          value={this.state.searchText}
          onChangeText={this.onSearchChange}
        />
      </View>
    );
  }
}

export default SearchInput;

SearchInput.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    marginTop: 0,
    marginHorizontal: 40,
    backgroundColor: '#646d8c',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#828ba6',
    paddingRight: 10
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    color: '#ecf0f1',
    height: 28,
  },
  placeholder: {
    color: '#fff'
  }
});