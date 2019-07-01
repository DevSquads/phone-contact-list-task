
import reduxConstants from '../../constants/redux';
import { appActions } from '../actions';
import { contactsService } from '../../services';

const { contactsConstants: contactsActionsConstants } = reduxConstants;


export const getContactsFromApi = () => {
  console.log('from action => ');

  return (dispatch) => {
    dispatch(appActions.showLoading());

    contactsService.getContactsFromApi()
      .then(data => data.data).then(contacts => {
      console.log(contacts);
      dispatch({
        type: contactsActionsConstants.GET_CONTACTS_FROM_API,
        contacts
      });
      dispatch(appActions.hideLoading());

    })
      .catch();
  };
};

export const getContactsFromPhoneContacts = () => {
  return (dispatch) => {
    dispatch(appActions.showLoading());

    contactsService.getContactsFromPhoneContacts().then(response => {
      dispatch({
        type: contactsActionsConstants.GET_CONTACTS_FROM_PHONE_CONTACTS,
        user: response
      });
      dispatch(appActions.hideLoading());

    })
      .catch();
  };
};

export default {
  getContactsFromApi,
  getContactsFromPhoneContacts
}