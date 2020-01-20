import { connect } from 'react-redux';
import TodoList, { TodoListPanel } from '../components/TodoList';
import { VisibilityFilters } from '../constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todoList.todos, state.todoList.visibilityFilter),
  alltodos: state.todoList.todos,
  addAsyncLoading: state.todoList.addAsyncLoading
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: 'todoList/toggle',
      payload: {
        todo: { id }
      }
    }),
  setVisibilityFilter: filter =>
    dispatch({
      type: 'todoList/setVisibilityFilter',
      payload: {
        visibilityFilter: filter
      }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPanel);
