// 액션 타입
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

// 액션 생성 함수
// 새로운 todoItem
let todoId = 1;
export function addTodo(todoItem) {
  return {
    type: ADD_TODO,
    payload: {...todoItem, id: todoId ++}
  }
}
// 지금 지우고자 하는 item의 id
export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {todoId}
  }
}

// 초기값
const initialState = [];

// 리듀서
export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.todoId);
    default: 
      return state;
  }
}