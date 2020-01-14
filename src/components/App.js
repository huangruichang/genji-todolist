import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h3>Todo List</h3>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
