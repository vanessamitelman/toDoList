let createBtn = document.getElementById('createBtn');
let inputTodo = document.getElementById('todo');
let toDoList = document.getElementById('todoList');
let darkMode = document.getElementById('switch');
let mainEl = document.getElementById('main');

function noTask() {
  if (toDoList.innerHTML == '') {
    let emptyTask = document.createElement('div');
    emptyTask.setAttribute('id', 'empty');
    emptyTask.textContent = 'Please Add A New Task';
    toDoList.appendChild(emptyTask);
  }
}
function removeNoTask() {
  if (document.getElementById('empty')) {
    document.getElementById('empty').remove();
  }
}
function addLoader() {
  if (createBtn.classList.contains('loader')) return;
  createBtn.classList.add('loader');
}
function removeLoader() {
  createBtn.classList.remove('loader');
}

darkMode.addEventListener('click', () => {
  if (darkMode.checked == true) {
    mainEl.classList.add('dark-mode');
  } else {
    mainEl.classList.remove('dark-mode');
  }
});

inputTodo.focus();
noTask();

function addToDo() {
  inputTodo.focus();
  let val = inputTodo.value;
  if (val == '') return;
  addLoader();
  let toDoItem = document.createElement('li');
  let toDoText = document.createElement('input');
  toDoText.type = 'text';
  toDoText.setAttribute('readonly', 'readonly');
  let btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
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
    noTask();
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
  setTimeout(() => {
    toDoItem.appendChild(toDoText);
    btnContainer.appendChild(toDoDelete);
    btnContainer.appendChild(toDoEdit);
    btnContainer.appendChild(toDoSave);

    toDoItem.appendChild(btnContainer);
    toDoList.appendChild(toDoItem);
    removeNoTask();
    removeLoader();
  }, 800);
}

createBtn.addEventListener('click', addToDo);
