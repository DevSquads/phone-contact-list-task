import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';
import SearchInput from '../components/SearchInput';
import { connect } from 'react-redux';
import { contactsActions } from '../redux-store/actions';

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      apiContacts: [],
      phoneContacts: [],
      apiActive: true
    };
  }

  componentDidMount(): void {
    // dispatch action
    this.props.getContactsFromApi();
    if (this.props.contactsAccessOk) {
      this.props.getContactsFromPhoneContacts();
    }
  }

  componentWillReceiveProps(nextProps, nextContext): void {
    const { contacts } = nextProps;
    this.setState({ ...contacts })
  }

  handleSearchChange = (text) => {
    this.setState({ searchText: text });
  };


  renderApiContactsItem = ({ item }) => {
    return (
      <ListItem
        title={`${item.first_name} ${item.last_name}`}
        subtitle={item.email}
        leftAvatar={{ source: { uri: item.avatar } }}
      />
    );

  };

  renderPhoneContactsItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.phoneNumbers && item.phoneNumbers[0].number}
      leftAvatar={item.imageAvailable ?
        { source: { uri: item.image.uri } } :
        { source: require('../../assets/avatar.jpg') }
      }
    />
  );

  contactListKeyExtractor = (item, index) => index.toString();

  searchForContacts = (text) => {
    const { apiActive, apiContacts, phoneContacts } = this.state;
    if (apiActive) {
      return apiContacts.filter(item =>
        ( item.first_name.toLowerCase()
            .includes(text.toLowerCase()) ||
          item.last_name.toLowerCase()
            .includes(text.toLowerCase()) ));
    } else {
      return phoneContacts.filter(item =>
        ( item.name.toLowerCase()
          .includes(text.toLowerCase()) ));
    }
  };


  render() {
    const { navigate } = this.props.navigation;
    const { apiActive, searchText } = this.state;
    const searchList = this.searchForContacts(searchText);
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
          backgroundColor={'#4b5779'}
          centerComponent={{ text: 'Contacts List', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={
            <Icon name={'contacts'}
                  type={'antdesign'}
                  color={'#fff'}
                  onPress={() => this.setState({ apiActive: false })}
            />}
        />
        < View style={styles.searchView}>
          <SearchInput onSearchChange={this.handleSearchChange}/>
        </View>
        <View>
          <FlatList
            keyExtractor={this.contactListKeyExtractor}
            data={searchList}
            renderItem={
              apiActive ?
                this.renderApiContactsItem :
                this.renderPhoneContactsItem
            }
            extraData={this.state}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { contacts, app } = state;
  const { contactsAccessOk } = app;
  return { contacts, contactsAccessOk };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContactsFromApi: () => dispatch(contactsActions.getContactsFromApi()),
    getContactsFromPhoneContacts: () => dispatch(contactsActions.getContactsFromPhoneContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);


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
  searchView: {
    backgroundColor: '#4b5779',
    marginTop: -1
  }
});