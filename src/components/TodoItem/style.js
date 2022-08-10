import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-shrink: 0;

  background-color: #f9f9c5;
  opacity: ${({ isChecked }) => (isChecked ? '0.5' : '1')};
  border-radius: 10px;
  color: black;
  width: 90%;
  height: 5rem;
  margin: 0.5rem;
`

export const ItemButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const ItemText = styled.div`
  font-size: 1rem;
  width: 30%;
`