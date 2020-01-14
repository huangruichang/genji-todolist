import { VisibilityFilters } from '../constants';

export default {
  namespace: 'todoList',
  state: {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
  },
  reducers: {
    add(state, { payload }) {
      state.todos.push(payload.todo);
      return {
        todos: [...state.todos]
      };
    },
    setVisibilityFilter(state, { payload }) {
      return {
        visibilityFilter: payload.visibilityFilter
      };
    },
    toggle(state, { payload }) {
      return {
        todos: state.todos.map(todo => {
          if (todo.id === payload.todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    }
  }
};
