import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";

const ToDo = ({ user }) => {
  const [myTodos, setMyTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const history = useHistory();

  const getData = () => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((querySnapshot) => {
        if (querySnapshot.exists) {
          setMyTodos(querySnapshot.data().todos);
        } else {
          console.log("NO TOdos");
        }
      });
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    getData();
  }, [myTodos]);

  const TodoHandler = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...myTodos, todoText],
      });
    setTodoText("");
    console.log(myTodos);
  };

  const deleteTodo = (deleteMyTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSanp) => {
      const result = docSanp
        .data()
        .todos.filter((todo) => todo !== deleteMyTodo);
      docRef.update({
        todos: result,
      });
    });
  };

  return (
    <div className="center-item">
      <h1>ToDo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter Your Todo"
      />
      <button onClick={TodoHandler}>Add ToDo</button>

      <div>
        <ul>
          {myTodos.map((myTodo, index) => {
            return (
              <li key={index} className="todo-item">
                {myTodo}
                <strong onClick={() => deleteTodo(myTodo)}> (X)</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
