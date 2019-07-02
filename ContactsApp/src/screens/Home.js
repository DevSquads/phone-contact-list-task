import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Header, Button } from 'react-native-elements';
import { appActions } from '../redux-store/actions';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.checkUserContactsPermission();
  }


  checkUserContactsPermission = () => {
    Permissions.getAsync(Permissions.CONTACTS)
      .then(response => response.status)
      .then(status => {
        if (status === 'granted') {
          this.props.updateContactsPermission(true);
        } else {
          this.getUserContactsPermission();
        }
      });
  };

  getUserContactsPermission = () => {

    Permissions.askAsync(Permissions.CONTACTS)
      .then(status => {
        if (status === 'granted') {
          this.props.updateContactsPermission(true);
        } else {
          this.props.updateContactsPermission(false);
        }
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header
          centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 24 } }}
          backgroundColor={'#4b5779'}
        />
        <View style={styles.homeContainer}>
          <Text style={styles.text}>This is a small sample of Contacts App</Text>
          <Button buttonStyle={styles.button} title={'Go to contacts'} onPress={() => navigate('Contacts')}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ( {
  updateContactsPermission: (contactsPermission) => dispatch(appActions.updateContactsPermission(contactsPermission))
} );
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const styles = StyleSheet.create({
  homeContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#4b5779'
  }
});
