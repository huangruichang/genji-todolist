import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

const { Search } = Input;

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Search
        onSearch={value => {
          if (!value) return;
          dispatch({
            type: 'todoList/add',
            payload: {
              todo: {
                id: new Date().getTime(),
                text: value,
                completed: false
              }
            }
          });
          input.input.input.value = '';
        }}
        ref={node => (input = node)}
        enterButton="Add Todo"
      ></Search>
    </div>
  );
};

export default connect()(AddTodo);
