import reduxConstants from '../../constants/redux';
import { appActions } from '../actions';
import { contactsService } from '../../services';

const { contactsConstants: contactsActionsConstants } = reduxConstants;


export const getContactsFromApi = () => {
  return (dispatch) => {
    dispatch(appActions.showLoading());

    contactsService.getContactsFromApi()
      .then(data => data.data).then(contacts => {
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

    contactsService.getContactsFromPhoneContacts().then(response => response.data)
      .then(contacts => {
        dispatch({
          type: contactsActionsConstants.GET_CONTACTS_FROM_PHONE_CONTACTS,
          contacts
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