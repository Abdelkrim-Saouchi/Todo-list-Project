import addProjectToProjectsList from '../logic/logicController';
import projectImg from '../assets/project-img.svg';
import removeImg from '../assets/close-small-svgrepo-com.svg';
import { deleteProjectFromProjectsList } from '../logic/logicController';
import { getProjectList } from '../logic/logicController';

const addProjectBtn = document.querySelector('#add-project');
// const projectsTasksSection = document.querySelector('.projects-tasks-section');
const projectsDiv = document.querySelector('.projects-list');
console.log(projectsDiv);

function createProject(title) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('wrapper');

  const projectIcon = document.createElement('img');
  projectIcon.src = projectImg;
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = title;
  const removeIcon = document.createElement('img');
  removeIcon.src = removeImg;
  removeIcon.classList.add('close-icon');
  // removeIcon.id = `${title}-close-icon`;

  projectContainer.append(projectIcon, projectTitle, removeIcon);
  projectsDiv.appendChild(projectContainer);
}

function renderProjects() {
  console.log('render');
  projectsDiv.innerHTML = '';

  const projects = getProjectList();
  projects.forEach((project) => {
    createProject(project.title);
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

function ControlProjectModal() {
  addProjectBtn.addEventListener('click', () => {
    let projectModal = document.querySelector('.modal');
    if (projectModal === null) {
      projectModal = createAddProjectModal();
      document.querySelector('body').appendChild(projectModal);
    }
    projectModal.style.display = 'flex';
    // eslint-disable-next-line no-use-before-define
    cancelAddingProject();
    // eslint-disable-next-line no-use-before-define

    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', () => {
      modalAddProject();
      changeProjectModalDisplay('none');
      renderProjects();
      deleteProject();
    });
  });
}

function changeProjectModalDisplay(display) {
  document.querySelector('.modal').style.display = display;
}

function cancelAddingProject() {
  const cancelBtn = document.querySelector('#cancel-btn');
  cancelBtn.addEventListener('click', () => {
    changeProjectModalDisplay('none');
  });
}

function modalAddProject() {
  const projectName = document.querySelector('.modal input').value;
  if (projectName != null && projectName !== '') {
    addProjectToProjectsList(projectName);
  }
}

function deleteProject() {
  const projects = document.querySelector('.projects-list .wrapper');
  console.log(projects);
  if (projects != null) {
    console.log('entred delete');
    const projectsList = Array.from(projects);
    projectsList.forEach((project) => {
      project.addEventListener('click', (e) => {
        console.log('enetred delete 2');
        if (e.target.className === 'close-icon') {
          let title = project.querySelector('h3').textContent;
          deleteProjectFromProjectsList(title);
        }
      });
    });
  }
}

// function getProjectModalData() {
//   const modalInput = document.querySelector('.modal input');
// }

export default function addProjectBtnFun() {
  ControlProjectModal();
  // cancelAddingProject();
  // renderProjects();
  deleteProject();
}
