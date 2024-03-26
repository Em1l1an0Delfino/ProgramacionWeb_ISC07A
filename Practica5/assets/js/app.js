// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const showTasksButton = document.getElementById('show-tasks-button');

// Variables para almacenar el usuario seleccionado y sus tareas
let selectedUserId = null;
let selectedUserTasks = [];

// Funciones

function getAllUsers() {
  return fetch('data/usuarios.json')
    .then(resp => resp.json());
}

function getAllTasks() {
  return fetch('data/tareas.json')
    .then(resp => resp.json());
}

function updateUserInformation(user) {
  userContainer.innerHTML = `
    <h3>Informacion del usuario seleccionado</h3>
    <ul>
      <li>Nombre: ${user.firstname}</li>
      <li>Email: ${user.email}</li>
    </ul>
  `;
}

function displayUserTasks() {
  if (selectedUserId !== null) {
    taskContainer.innerHTML = `
      <h3>Lista de tareas del usuario</h3>
      <ul>
        ${selectedUserTasks.map(task => `
          <li>
            <span>${task.title}</span>
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
          </li>
        `).join('')}
      </ul>
    `;
  } else {
    taskContainer.innerHTML = '';
  }
}

function loadUsersIntoSelect(users) {
  userSelect.innerHTML = '<option value="">Seleccione un usuario</option>' + users.map(user => `
    <option value="${user.id}">${user.firstname}</option>
  `).join('');
}

function showTasks() {
  if (selectedUserId !== null) {
    getAllTasks()
      .then(tasks => {
        selectedUserTasks = tasks.filter(task => task.userId === selectedUserId);
        displayUserTasks();
      });
  }
}

// Al cargar la página, cargar los usuarios en el select
getAllUsers().then(users => loadUsersIntoSelect(users));

// Event Listener para cambio en la selección de usuario
userSelect.addEventListener('change', function() {
  selectedUserId = parseInt(userSelect.value);
  selectedUserTasks = [];
  if (selectedUserId !== 0) {
    getAllUsers()
      .then(users => {
        const selectedUser = users.find(user => user.id === selectedUserId);
        if (selectedUser) {
          updateUserInformation(selectedUser);
        }
      });
  } else {
    userContainer.innerHTML = '';
  }
  displayUserTasks();
});

// Event Listener para el botón de mostrar tareas
showTasksButton.addEventListener('click', showTasks);
