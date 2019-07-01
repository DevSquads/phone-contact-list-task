import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Header, Icon, ListItem } from 'react-native-elements';
import SearchInput from '../components/SearchInput';
import { connect } from 'react-redux';
import { contactsActions } from '../redux-store/actions';

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      apiContacts: [],
      phoneContacts: []
    };
  }

  componentDidMount(): void {
    // dispatch action
    this.props.getContactsFromApi();
  }

  componentWillReceiveProps(nextProps, nextContext): void {
    const { contacts } = nextProps;
    this.setState({ ...contacts })
  }

  handleSearchChange = (text) => {
    this.setState({ searchText: text });
  };

  contactListKeyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={`${item.first_name} ${item.last_name}`}
      subtitle={item.email}
      leftAvatar={{ source: { uri: item.avatar } }}
    />
  );


  render() {
    const { navigate } = this.props.navigation;
    const { apiContacts } = this.state;
    const searchList = apiContacts.filter(item =>
      ( item.first_name.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        item.last_name.toLowerCase().includes(this.state.searchText.toLowerCase()) ));
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
        />
        <View style={styles.searchView}>
          <SearchInput onSearchChange={this.handleSearchChange}/>
        </View>
        <View>
          <FlatList
            keyExtractor={this.contactListKeyExtractor}
            data={searchList}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { contacts } = state;
  return { contacts };
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