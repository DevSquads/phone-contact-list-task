import reduxConstants from '../../constants/redux';

const initialState = { phoneContacts: [], apiContacts: [] };

const { contactsConstants: contactsActionsConstants } = reduxConstants;


export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case contactsActionsConstants.GET_CONTACTS_FROM_API:
      return {
        ...state,
        apiContacts: [...( action.contacts )]
      };
    case contactsActionsConstants.GET_CONTACTS_FROM_PHONE_CONTACTS:
      return {
        ...state,
        phoneContacts: [...( action.contacts )]
      };
    default:
      return state;
  }
};