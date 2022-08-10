import React, { useState } from 'react'
import * as S from './style'

export function TodoAdd({ onAdd }) {
  const [userInput, setUserInput] = useState({ date: '', content: '' })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={userInputHandler} />
      <S.AddInput name="content" onChange={userInputHandler} />
      <S.AddButton onClick={() => onAdd(userInput)}>
        추가하기
      </S.AddButton>
    </S.AddContainer>
  )
}