import requestFactory from '../utils/request-factory';
import * as Contacts from 'expo-contacts';

export default {
  getContactsFromApi: () => {
    return requestFactory.get('https://reqres.in/api/users?page=1&&per_page=50');
  },
  getContactsFromPhoneContacts: () => {
    return Contacts.getContactsAsync();
  }
};