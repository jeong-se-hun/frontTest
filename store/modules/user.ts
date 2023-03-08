// Action Types
import { AnyAction } from 'redux';
import { LOGIN, LOGOUT, UserType, InitialStateType } from '../../src/constants/index';

// Action Creators
export const loginAction = (user: UserType): AnyAction => {
  return { type: LOGIN, payload: user };
};

export const logoutAction = () => ({ type: LOGOUT });

// Initial State
const initialState: InitialStateType = {
  isLoggedIn: false,
  user: { name: null, email: null, age: null, gender: null, birthday: null },
};

// export default userReducer;
const userReducer = (state = initialState, action: { type: string; payload?: { user: UserType } }) => {
  console.log('action');
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        user: action.payload ?? null,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
