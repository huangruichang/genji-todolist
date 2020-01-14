import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { Tabs } from 'antd';
import { VisibilityFilters } from '../constants';

const { TabPane } = Tabs;

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export const TodoListPanel = ({ todos, toggleTodo, setVisibilityFilter }) => {
  return (
    <Tabs defaultActiveKey={VisibilityFilters.SHOW_ALL} onChange={key => setVisibilityFilter(key)}>
      <TabPane tab={VisibilityFilters.SHOW_ALL} key={VisibilityFilters.SHOW_ALL}>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </TabPane>
      <TabPane tab={VisibilityFilters.SHOW_COMPLETED} key={VisibilityFilters.SHOW_COMPLETED}>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </TabPane>
      <TabPane tab={VisibilityFilters.SHOW_ACTIVE} key={VisibilityFilters.SHOW_ACTIVE}>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </TabPane>
    </Tabs>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
