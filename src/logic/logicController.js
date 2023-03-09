/* eslint-disable max-classes-per-file */
const projectsList = [];
const inbox = [];
class TodosFactory {
  constructor(title, todoId, dueDate, priority, description) {
    this.title = title;
    this.todoId = todoId;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }

  setTodoTask(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}

class ProjectFactory {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
  }

  addTodoTask(title, todoId, dueDate, priority, description) {
    const todo = new TodosFactory(
      title,
      todoId,
      dueDate,
      priority,
      description
    );
    this.tasks.push(todo);
  }

  // addToProjectList(list) {
  //   if (!list.some((project) => project.title === this.title)) {
  //     list.push(this);
  //   }
  // }

  // deleteFromProjectList(list) {
  //   list.splice(list.indexOf(this), 1);
  // }
}

export default function addProjectToProjectsList(title) {
  const project = new ProjectFactory(title, Date.now().toString());
  console.log('project created');
  projectsList.push(project);
  console.log(projectsList);
}

export function deleteProjectFromProjectsList(projectId) {
  projectsList.forEach((project) => {
    if (project.id === projectId) {
      projectsList.splice(projectsList.indexOf(project), 1);
      console.log(projectsList);
    }
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
  project.addTodoTask(
    title,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
}
