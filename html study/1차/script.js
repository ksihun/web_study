// 할 일 목록 배열
let todos = [];

// 할 일 추가 함수
function addTodo() {
  // 할 일 입력 폼 요소
  const todoInput = document.getElementById('todo-input');
  // 입력한 할 일
  const newTodo = todoInput.value.trim();

  // 입력한 할 일이 빈 문자열이면 함수 종료
  if (!newTodo) return;

  // 할 일 목록 배열에 추가
  todos.push(newTodo);

  // 할 일 목록 출력 함수 호출
  renderTodoList();

  // 입력 폼 초기화
  todoInput.value = '';
}

// 할 일 삭제 함수
function deleteTodo() {
  // 클릭한 삭제 버튼 요소
  const deleteButton = event.target;
  // 삭제할 할 일의 인덱스
  const index = deleteButton.dataset.index;

  // 할 일 목록 배열에서 삭제
  todos.splice(index, 1);

  // 할 일 목록 출력 함수 호출
  renderTodoList();
}

// 할 일 목록 출력 함수
function renderTodoList() {
  // 할 일 목록을 출력할 ul 요소
  const todoList = document.getElementById('todo-list');

  // 할 일 목록을 li 요소로 변환하여 ul에 추가
  todoList.innerHTML = todos.map((todo, index) => {
    return `<li>${todo} <button type="button" data-index="${index}" onclick="deleteTodo()">삭제</button></li>`;
  }).join('');
}
