import requestFactory from '../utils/request-factory';

export default {
  getContactsFromApi: () => {
    return requestFactory.get('https://reqres.in/api/users?page=1&&per_page=50');
  },
  getContactsFromPhoneContacts: () => {
    return [{user: 'af', phone: '01255'}];
  }
};