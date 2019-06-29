import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Header, Button } from 'react-native-elements';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  static navigationOptions = () => ( {
    title: 'Contacts List',
    headerTitle: 'Notifications',
  } );

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header
          centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 24 } }}
        />
        <View style={styles.homeContainer}>
          <Text style={styles.text}>This is a small sample of Contacts App</Text>
          <Button title={'Go to contacts'} onPress={() => navigate('Contacts')}/>
        </View>
      </View>
    );
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  homeContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
  }
});
