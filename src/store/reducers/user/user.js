import {extend} from '../../../helpers/helpers.js';
import {Actions} from '../../actions/user/user.js';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setAuthorizationStatus:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case Actions.setUser:
      return extend(state, {
        user: action.payload
      });
  }

  return state;
};

export default reducer;
