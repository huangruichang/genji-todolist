import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

const { Search } = Input;

const AddTodo = props => {
  const { dispatch } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Search
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onSearch={value => {
          if (!value) return;
          dispatch({
            type: 'todoList/addAsync',
            payload: {
              todo: {
                id: new Date().getTime(),
                text: value,
                completed: false
              }
            }
          });
          setInputValue('');
        }}
        enterButton="Add Todo"
        loading={props.addAsyncLoading}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.todoList
  };
};

export default connect(mapStateToProps)(AddTodo);
