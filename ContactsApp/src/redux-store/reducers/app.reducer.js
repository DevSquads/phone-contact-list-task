import reduxConstants from '../../constants/redux';

const initialState = {
  showLoading: false
};

const { appConstants: appActionsConstants } = reduxConstants;


export const app = (state = initialState, action) => {
  switch (action.type) {

    case appActionsConstants.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case appActionsConstants.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      };
    default:
      return state;
  }
};