import { useTypedSelector } from "../hooks/useTypedSelector";
import { useTodoActions } from "../hooks/useActions";
import { useEffect } from "react";

export const TodoList: React.FC = () => {
  const { error, loading, todos, limit, page } = useTypedSelector(
    (stateFC) => stateFC.todoR
  );

  const { fetchTodos, setTodoPage } = useTodoActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>Error!</h1>
        <h2>{error}</h2>
      </div>
    );
  }

  // const pagesArray = () => {
  //   const pagesCount = Math.ceil(todos.length / limit);
  //   const pages = [];
  //   for (let index = 0; index < pagesCount; index++) {
  //     pages.push(index + 1);
  //   }
  //   return pages;
  // };

  const pagesArray = [1, 2, 3, 4, 5];

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div style={{ border: "1px solid black", marginTop: "10px" }}>
            id:{todo.id}
            <br />
            task: {todo.title}
            <br />
            task status: {todo.completed ? "completed" : "uncompleted"}
          </div>
        );
      })}
      {pagesArray.map((mapPage) => {
        return (
          <button
            style={{ color: mapPage === page ? "red" : "black" }}
            onClick={() => setTodoPage(mapPage)}
          >
            {mapPage}
          </button>
        );
      })}
    </div>
  );
};
