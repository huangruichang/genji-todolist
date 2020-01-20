import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { Tabs, Spin } from 'antd';
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

export const TodoListPanel = ({ todos, alltodos, toggleTodo, setVisibilityFilter, addAsyncLoading }) => {
  const tablistKey = [VisibilityFilters.SHOW_ALL, VisibilityFilters.SHOW_COMPLETED, VisibilityFilters.SHOW_ACTIVE];
  return (
    <Tabs defaultActiveKey={VisibilityFilters.SHOW_ALL} onChange={key => setVisibilityFilter(key)}>
      {tablistKey.map(key => (
        <TabPane tab={key} key={key}>
          <Spin spinning={addAsyncLoading}>
            <TodoList todos={todos} toggleTodo={toggleTodo} alltodos={alltodos} />
          </Spin>
        </TabPane>
      ))}
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
