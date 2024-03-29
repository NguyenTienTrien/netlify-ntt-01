import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos)

    // const todos = [
    //     {id: 1, title: "todo1", completed: false},
    //     {id: 2, title: "todo2", completed: false},
    //     {id: 3, title: "todo3", completed: false},
    //     {id: 4, title: "todo4", completed: false},
    //     {id: 5, title: "todo5", completed: true},
    // ];

    return (
      <ul>
          {todos.map((todo) =>(
              <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
          ))}
      </ul>
    );
};
export default TodoList;