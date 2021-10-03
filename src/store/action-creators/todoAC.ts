import axios from "axios";
import { Dispatch } from "redux";
import { TodoActionType, TodosActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActionType>) => {
    try {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS
      });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({
          type: TodosActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: "There was an error loading todos"
      });
    }
  };
};

export const setTodoPage = (page: number) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: TodosActionTypes.SET_TODO_PAGE,
      payload: page
    });
  };
};
// return {
//   type: TodosActionTypes.SET_TODO_PAGE,
//   payload: page
// };
