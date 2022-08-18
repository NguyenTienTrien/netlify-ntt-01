import './App.css';
import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
    return (
        <div className="App">
            <h1>My Todo List</h1>
            <AddTodoForm/>
            <TodoList/>
            <TotalCompleteItems/>
        </div>
    );
}

export default App;


// use redux debug : https://viblo.asia/p/debug-cung-redux-dev-tool-OeVKB8kAlkW