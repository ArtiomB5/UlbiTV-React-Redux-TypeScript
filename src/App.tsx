import "./styles.css";
import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <UserList />
      <TodoList />
    </div>
  );
}
