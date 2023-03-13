/* eslint-disable max-classes-per-file */
if (!localStorage.getItem('projects-list')) {
  localStorage.setItem('projects-list', JSON.stringify([]));
}
const projectsList = JSON.parse(localStorage.getItem('projects-list'));

if (!localStorage.getItem('inbox')) {
  localStorage.setItem('inbox', JSON.stringify([]));
}
const inbox = JSON.parse(localStorage.getItem('inbox'));

class TodosFactory {
  constructor(title, todoId, dueDate, priority, description) {
    this.title = title;
    this.todoId = todoId;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}

export function setTodoTask(title, dueDate, priority, description) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.description = description;
}

class ProjectFactory {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
  }
}

function addTask(title, todoId, dueDate, priority, description) {
  const todo = new TodosFactory(title, todoId, dueDate, priority, description);
  this.tasks.push(todo);
}

export function updateLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function addProjectToProjectsList(title) {
  const project = new ProjectFactory(title, Date.now().toString());
  projectsList.push(project);
  updateLocalStorage('projects-list', projectsList);
}

export function deleteProjectFromProjectsList(projectId) {
  projectsList.forEach((project) => {
    if (project.id === projectId) {
      projectsList.splice(projectsList.indexOf(project), 1);
    }
    updateLocalStorage('projects-list', projectsList);
  });
}

export function getProjectList() {
  return projectsList;
}

export function getInbox() {
  return inbox;
}

export function addTaskToInbox(
  inboxList,
  taskName,
  dueDate,
  priority,
  description
) {
  const task = new TodosFactory(
    taskName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
  inboxList.push(task);
}

export function addTodoTask(project, title, dueDate, priority, description) {
  // eslint-disable-next-line no-param-reassign
  project.addTask = addTask;
  // Add project name to todo task
  const projName = `(${project.title})`;
  const titlePlusProjName = `${title} ${projName}`;

  project.addTask(
    titlePlusProjName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
}
