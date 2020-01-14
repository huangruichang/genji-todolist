import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { Tabs } from 'antd';
import { VisibilityFilters } from '../constants';
import genjiPic from '../assets/genji.png';

const { TabPane } = Tabs;

const TodoList = ({ todos, toggleTodo, alltodos }) =>
  alltodos.length > 0 ? (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  ) : (
    <div style={{ textAlign: 'center' }}>
      <img width={300} src={genjiPic} />
    </div>
  );

export const TodoListPanel = ({ todos, alltodos, toggleTodo, setVisibilityFilter }) => {
  return (
    <Tabs defaultActiveKey={VisibilityFilters.SHOW_ALL} onChange={key => setVisibilityFilter(key)}>
      <TabPane tab={VisibilityFilters.SHOW_ALL} key={VisibilityFilters.SHOW_ALL}>
        <TodoList todos={todos} toggleTodo={toggleTodo} alltodos={alltodos} />
      </TabPane>
      <TabPane tab={VisibilityFilters.SHOW_COMPLETED} key={VisibilityFilters.SHOW_COMPLETED}>
        <TodoList todos={todos} toggleTodo={toggleTodo} alltodos={alltodos} />
      </TabPane>
      <TabPane tab={VisibilityFilters.SHOW_ACTIVE} key={VisibilityFilters.SHOW_ACTIVE}>
        <TodoList todos={todos} toggleTodo={toggleTodo} alltodos={alltodos} />
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
