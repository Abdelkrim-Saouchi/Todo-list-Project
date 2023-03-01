const projectsList = [];

class ProjectFactory {
  constructor(
    title,
    description = 'No desc',
    dueDate = 'No Date',
    priority = 'green'
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  addToProjectList(list) {
    console.log('this: ', this);
    list.push(this);
  }

  deleteFromProjectList(list) {
    list.splice(list.indexOf(this), 1);
  }
}

export default function addProjectToProjectsList(title) {
  const project = new ProjectFactory(title);
  console.log('onbj');
  project.addToProjectList.call(project, projectsList);
  console.log(projectsList);
}
