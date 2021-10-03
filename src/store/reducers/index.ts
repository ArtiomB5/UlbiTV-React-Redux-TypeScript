import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  userR: userReducer,
  todoR: todoReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;
