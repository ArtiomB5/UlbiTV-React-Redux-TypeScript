export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersActionType {
  type: UsersActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessActionType {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorActionType {
  type: UsersActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type UserActionType =
  | FetchUsersActionType
  | FetchUsersSuccessActionType
  | FetchUsersErrorActionType;

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
