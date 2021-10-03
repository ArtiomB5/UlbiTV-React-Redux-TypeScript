import React, { FC } from "react";
import { useSelector } from "react-redux";
import { rootReducerType } from "../store/reducers/index";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchUsers } from "../store/action-creators/userAC";
import { useDispatch } from "react-redux";
import { useUserActions } from "../hooks/useActions";

export const UserList: FC = () => {
  //Вариант №1 типизации useSelector
  // const state = useSelector((stateFP: rootReducerType) => stateFP.userR);

  //Вариант №2 типизации useSelector(использование кастомного хука)
  // const state = useTypedSelector((stateFP) => stateFP.userR);

  //деструктурируещее присваивание
  const { error, loading, users } = useTypedSelector(
    (stateFP) => stateFP.userR
  );

  // const dispatch = useDispatch();
  const { fetchUsers } = useUserActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>{"Loading..."}</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>{"Error!"}</h1>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};
