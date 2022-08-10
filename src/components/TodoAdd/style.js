import styled from 'styled-components'

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;

  color: black;
  width: 90%;
  margin-bottom: 1rem;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #d9f8c4;
  height: 2rem;
  width: 5rem;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }
`

export const AddInput = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0rem 0.5rem;

  height: 2rem;
  width: 30%;
`