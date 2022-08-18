import React from "react";
import {useSelector} from "react-redux";

const TotalCompleteItems = () => {
    const completeTodos = useSelector(state => state.todos.filter((todo) => todo.completed === true))


    return <h4>Total complete items: {completeTodos.length}</h4>
};

export default TotalCompleteItems;