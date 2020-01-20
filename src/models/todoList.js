import { VisibilityFilters } from '../constants';

export default {
  namespace: 'todoList',
  state: {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
  },
  actionCreators: {
    async addAsync({ payload }, { pick, save }) {
      const todos = pick('todos');
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
      save({ todos: [...todos, payload.todo] });
    },
    setVisibilityFilter({ payload }, { pick, save }) {
      save({ visibilityFilter: payload.visibilityFilter });
    },
    toggle({ payload }, { save, pick }) {
      let todos = pick('todos');
      todos = todos.map(todo => {
        if (todo.id === payload.todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
      save({ todos });
    }
  }
};
