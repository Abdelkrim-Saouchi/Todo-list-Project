/* eslint-disable max-classes-per-file */
const projectsList = [];

class TodosFactory {
  constructor(title, todoId) {
    this.title = title;
    this.todoId = todoId;
  }
}

class ProjectFactory {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
  }

  addTodoTask(title, todoId) {
    const todo = new TodosFactory(title, todoId);
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
