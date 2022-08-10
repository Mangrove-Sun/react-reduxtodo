import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../../modules/todo';
import TodoPresenter from './TodoPresenter';

function TodoContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);

  const onAdd = (todoItem) => {
    dispatch(addTodo(todoItem));
  };
  const onDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <TodoPresenter todos={todos} onAdd={onAdd} onDelete={onDelete} />
  );
}

export default TodoContainer