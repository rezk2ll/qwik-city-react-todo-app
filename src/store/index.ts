import { proxy } from 'valtio';

export type Todo = {
  value: string;
  completed: boolean;
  id: number;
};

export const store = proxy<{ todos: Todo[]}>({
  todos: []
});

export const add = (todo: Todo) => store.todos.push(todo);

export const remove = (id: number) => store.todos = store.todos.filter(todo => todo.id != id);

export const toggle = (id: number) => store.todos = store.todos.map(todo => {
  if (todo.id === id) {
    return { ...todo, completed: !todo.completed }
  }

  return todo;
});
