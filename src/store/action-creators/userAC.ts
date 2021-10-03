import axios from "axios";
import { Dispatch } from "redux";
import { UsersActionTypes, UserActionType } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    try {
      dispatch({
        type: UsersActionTypes.FETCH_USERS
      });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UsersActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: UsersActionTypes.FETCH_USER_ERROR,
        payload: "There was an error loading users"
      });
    }
  };
};
