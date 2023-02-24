const addProjectBtn = document.querySelector('#add-project');

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

function dispalyProjectModal() {
  addProjectBtn.addEventListener('click', () => {
    let projectModal = document.querySelector('.modal');
    if (projectModal === null) {
      projectModal = createAddProjectModal();
      document.querySelector('body').appendChild(projectModal);
    }
    projectModal.style.display = 'flex';
  });
}

function changeProjectModalDisplay(display) {
  document.querySelector('.modal').style.display = display;
}

function canelAddingProject() {
  const cancelBtn = document.querySelector('#cancel-btn');
  console.log(cancelBtn);
  cancelBtn.addEventListener('click', changeProjectModalDisplay('none'));
}

// function getProjectModalData() {
//   const modalInput = document.querySelector('.modal input');
// }

export default function addProjectBtnFun() {
  dispalyProjectModal();
  canelAddingProject();
}
