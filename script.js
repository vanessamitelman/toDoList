let createBtn = document.getElementById('createBtn');
let inputTodo = document.getElementById('todo');
let toDoList = document.getElementById('todoList');
let darkMode = document.getElementById('switch');
let mainEl = document.getElementById('main');

darkMode.addEventListener('click', () => {
  if (darkMode.checked == true) {
    mainEl.classList.add('dark-mode');
  } else {
    mainEl.classList.remove('dark-mode');
  }
});

inputTodo.focus();

function addToDo() {
  inputTodo.focus();
  let val = inputTodo.value;
  if (val == '') return;
  let toDoItem = document.createElement('li');
  let toDoText = document.createElement('input');
  toDoText.type = 'text';
  toDoText.setAttribute('readonly', 'readonly');
  let toDoEdit = document.createElement('button');
  let toDoSave = document.createElement('button');
  let toDoDelete = document.createElement('button');
  toDoText.value = val;
  inputTodo.value = '';
  toDoEdit.innerHTML = `<i class="fas fa-edit"></i>`;
  toDoSave.innerHTML = `<i class="fas fa-save"></i>`;
  toDoDelete.innerHTML = `<i class='fa fa-trash' aria-hidden='true'></i>`;
  toDoEdit.addEventListener('click', () => {
    toDoText.removeAttribute('readonly');
    toDoText.focus();
  });
  toDoDelete.addEventListener('click', () => {
    toDoItem.remove();
  });
  toDoSave.addEventListener('click', () => {
    readOnly();
  });
  toDoText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      readOnly();
    }
  });
  function readOnly() {
    toDoText.setAttribute('readonly', 'readonly');
  }
  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoEdit);
  toDoItem.appendChild(toDoSave);
  toDoItem.appendChild(toDoDelete);
  toDoList.appendChild(toDoItem);
}

createBtn.addEventListener('click', addToDo);
