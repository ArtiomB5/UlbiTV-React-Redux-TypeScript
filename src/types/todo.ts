export enum TodosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface fetchTodosActionType {
  type: TodosActionTypes.FETCH_TODOS;
}

interface fetchTodosSuccessActionType {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface fetchTodosErrorActionType {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface setTodosPageActionType {
  type: TodosActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoActionType =
  | fetchTodosActionType
  | fetchTodosSuccessActionType
  | fetchTodosErrorActionType
  | setTodosPageActionType;

export type TodoState = {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
};
