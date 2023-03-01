import addProjectToProjectsList from '../logic/logicController';

const addProjectBtn = document.querySelector('#add-project');
const projectsTasksSection = document.querySelector('.projects-tasks-section');

function renderProject(title) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');

  const projectBar = document.createElement('div');
  projectBar.classList.add('project-bar');

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = title;
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
    modalAddProject();
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
  const addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', () => {
    const projectName = document.querySelector('.modal input').value;
    if (projectName != null && projectName !== '') {
      addProjectToProjectsList(projectName);
      changeProjectModalDisplay('none');
    }
  });
}

// function getProjectModalData() {
//   const modalInput = document.querySelector('.modal input');
// }

export default function addProjectBtnFun() {
  displayProjectModal();
  // cancelAddingProject();
}
