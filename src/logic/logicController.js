const projectsList = [];

class ProjectFactory {
  constructor(title) {
    this.title = title;
  }

  addToProjectList(list) {
    if (!list.some((project) => project.title === this.title)) {
      list.push(this);
    }
  }

  deleteFromProjectList(list) {
    list.splice(list.indexOf(this), 1);
  }
}

export default function addProjectToProjectsList(title) {
  const project = new ProjectFactory(title);
  console.log('project created');
  project.addToProjectList(projectsList);
  console.log(projectsList);
}

export function deleteProjectFromProjectsList(title) {
  projectsList.forEach((project) => {
    if (project.title === title) {
      project.deleteFromProjectList(projectsList);
      console.log(projectsList);
    }
  });
}

export function getProjectList() {
  return projectsList;
}
