import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header
          leftComponent={
            <Icon name='arrowleft'
                  type='antdesign'
                  color='#ffffff'
                  onPress={() => navigate('Home')}
            />
          }
          centerComponent={{ text: 'Contacts List', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Contacts</Text>
      </View>
    );
  }
}

export default ContactsScreen;