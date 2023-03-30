let createBtn = document.getElementById('createBtn');
let inputTodo = document.getElementById('todo');
let toDoList = document.getElementById('todoList');
let darkMode = document.getElementById('switch');
let mainEl = document.getElementById('main');
let priority = document.getElementById('important');
let noPriority = document.getElementById('not-important');
let counter = 0;

inputTodo.focus();

const noTask = () => {
  if (toDoList.innerHTML == '') {
    let emptyTask = document.createElement('div');
    emptyTask.setAttribute('id', 'empty');
    emptyTask.textContent = 'Please Add A New Task';
    toDoList.appendChild(emptyTask);
    document.getElementById('important-btns').classList.add('hide');
  }
};
const removeNoTask = () => {
  document.getElementById('important-btns').classList.remove('hide');
  if (document.getElementById('empty')) {
    document.getElementById('empty').remove();
  }
};
const addLoader = () => {
  if (createBtn.classList.contains('loader')) return;
  createBtn.classList.add('loader');
};

const addToDo = () => {
  counter++;
  inputTodo.focus();
  let val = inputTodo.value;
  if (val == '') return;
  addLoader();
  let toDoItem = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'check' + counter;
  checkbox.classList.add('priority');
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
    toDoText.setAttribute('readonly', 'readonly');
  });
  toDoText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      toDoText.setAttribute('readonly', 'readonly');
    }
  });

  setTimeout(() => {
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(toDoText);
    btnContainer.appendChild(toDoDelete);
    btnContainer.appendChild(toDoEdit);
    btnContainer.appendChild(toDoSave);

    toDoItem.appendChild(btnContainer);
    toDoList.appendChild(toDoItem);
    removeNoTask();
    createBtn.classList.remove('loader');
  }, 800);
};

createBtn.addEventListener('click', addToDo);
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addToDo();
  }
});
darkMode.addEventListener('click', () => {
  if (darkMode.checked == true) {
    mainEl.classList.add('dark-mode');
  } else {
    mainEl.classList.remove('dark-mode');
  }
});
priority.addEventListener('click', () => {
  const allPriority = document.querySelectorAll('.priority');
  for (let i = 0; i < allPriority.length; i++) {
    if (allPriority[i].checked) {
      allPriority[i].parentNode.classList.add('important');
      allPriority[i].checked = false;
    }
  }
});
noPriority.addEventListener('click', () => {
  const allPriority = document.querySelectorAll('.priority');
  for (let i = 0; i < allPriority.length; i++) {
    if (allPriority[i].checked) {
      allPriority[i].parentNode.classList.remove('important');
      allPriority[i].checked = false;
    }
  }
});
noTask();
