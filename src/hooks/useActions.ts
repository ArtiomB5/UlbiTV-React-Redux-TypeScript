import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/userAC";
import * as TodosActionCreators from "../store/action-creators/todoAC";

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};

export const useTodoActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodosActionCreators, dispatch);
};
