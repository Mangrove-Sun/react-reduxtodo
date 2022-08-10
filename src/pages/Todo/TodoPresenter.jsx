import React from 'react'
import {TodoItem, TodoAdd} from '../../components'
import * as S from './style'

function TodoPresenter({todos, onAdd, onDelete}) {

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd onAdd={onAdd} />
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            onDelete={onDelete}
            key={todo.id}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoPresenter