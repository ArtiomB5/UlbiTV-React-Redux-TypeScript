import { UserState, UserActionType, UsersActionTypes } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = (
  state = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UsersActionTypes.FETCH_USER_ERROR:
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
