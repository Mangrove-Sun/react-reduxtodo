import React from 'react'
import * as S from './style'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export function TodoItem({ todo, onDelete }) {
  return (
    <S.ItemContainer isChecked={todo.checked}>
      <S.ItemButton>
        {todo.checked ? <GrCheckboxSelected /> : <GrCheckbox />}
      </S.ItemButton>
      <S.ItemText>{todo.date}</S.ItemText>
      <S.ItemText>{todo.content}</S.ItemText>
      <S.ItemButton onClick={() => onDelete(todo.id)}>
        <AiOutlineCloseCircle />
      </S.ItemButton>
    </S.ItemContainer>
  )
}