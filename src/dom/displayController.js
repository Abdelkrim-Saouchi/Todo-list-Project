import addProjectToProjectsList, {
  deleteProjectFromProjectsList,
  getProjectList,
} from '../logic/logicController';
import projectImg from '../assets/project-img.svg';
import removeImg from '../assets/close-small-svgrepo-com.svg';

const projectsDiv = document.querySelector('.projects-list');

function createProjectInDom(title, projectId) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('wrapper');
  projectContainer.dataset.projectId = projectId;

  const projectIcon = document.createElement('img');
  projectIcon.src = projectImg;
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = title;
  const removeIcon = document.createElement('img');
  removeIcon.src = removeImg;
  removeIcon.classList.add('close-icon');

  projectContainer.append(projectIcon, projectTitle, removeIcon);
  projectsDiv.appendChild(projectContainer);
}

function renderProjects() {
  projectsDiv.innerHTML = '';

  const projects = getProjectList();
  projects.forEach((project) => {
    createProjectInDom(project.title, project.id);
  });
}

function createAddProjectModal() {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');

  const modalLabel = document.createElement('label');
  modalLabel.textContent = 'Write Project name';

  const modalInput = document.createElement('input');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.id = 'add-btn';

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.id = 'cancel-btn';

  btnContainer.append(addBtn, cancelBtn);
  modalContainer.append(modalLabel, modalInput, btnContainer);

  return modalContainer;
}

function displayProjectModal() {
  let projectModal = document.querySelector('.modal');
  if (projectModal === null) {
    projectModal = createAddProjectModal();
    document.querySelector('body').appendChild(projectModal);
  }
  projectModal.style.display = 'flex';
}

function changeProjectModalDisplay(display) {
  document.querySelector('.modal').style.display = display;
}

function cancelAddingProject() {
  changeProjectModalDisplay('none');
}

function addProject() {
  const projectName = document.querySelector('.modal input').value;
  if (projectName != null && projectName !== '') {
    addProjectToProjectsList(projectName);
  }
}

function deleteProject(closeIcon) {
  const { projectId } = closeIcon.parentElement.dataset;
  console.log('projectId:', projectId);
  deleteProjectFromProjectsList(projectId);
}

function globalEventsHandler() {
  document.addEventListener('click', (e) => {
    if (
      e.target.matches('#add-project') ||
      e.target.matches('#add-project *')
    ) {
      displayProjectModal();
    }
    if (e.target.matches('#cancel-btn')) {
      cancelAddingProject();
    }
    if (e.target.matches('#add-btn')) {
      addProject();
      changeProjectModalDisplay('none');
      renderProjects();
    }
    if (e.target.matches('.close-icon')) {
      deleteProject(e.target);
      renderProjects();
    }
  });
}

export default function displayController() {
  globalEventsHandler();
}
