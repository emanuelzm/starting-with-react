import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const todos = [
  {text: "cortar cebolla", completed: false},
  {text: "Tomar el curso de intro a React", completed: false},
  {text: "Llorar con la llorona", completed: false},
  { text: 'LALALALAA', completed: false },
];

function App(props) {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;