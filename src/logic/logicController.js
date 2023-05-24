import TodosFactory from './todosFactory';
import ProjectFactory from './projectFactory';

// get Data from localStorage
const getDataFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data || [];
};

const projectsList = getDataFromLocalStorage('projects-list');
const inbox = getDataFromLocalStorage('inbox');

// LocalStorage functions
export const updateLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// tasks functions
export const getInbox = () => inbox;

function addTask(title, todoId, dueDate, priority, description) {
  const todo = new TodosFactory(title, todoId, dueDate, priority, description);
  this.tasks.push(todo);
}

export function setTodoTask(title, dueDate, priority, description) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.description = description;
}

export const addTaskToInbox = (
  inboxList,
  taskName,
  dueDate,
  priority,
  description
) => {
  const task = new TodosFactory(
    taskName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
  inboxList.push(task);
};

// Projects functions
export const getProjectList = () => projectsList;

export const addProjectToProjectsList = (title) => {
  const project = new ProjectFactory(title, Date.now().toString());
  projectsList.push(project);
  updateLocalStorage('projects-list', projectsList);
};

export const deleteProjectFromProjectsList = (projectId) => {
  projectsList.forEach((project) => {
    if (project.id === projectId) {
      projectsList.splice(projectsList.indexOf(project), 1);
    }
  });
  updateLocalStorage('projects-list', projectsList);
};

export const addTodoTask = (project, title, dueDate, priority, description) => {
  // eslint-disable-next-line no-param-reassign
  project.addTask = addTask;
  // Add project name to todo task
  const projName = `(${project.title})`;
  const titlePlusProjName = `${title} ${projName}`;

  // add task to specific project
  project.addTask(
    titlePlusProjName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
};
