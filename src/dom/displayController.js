import addProjectToProjectsList, {
  addTodoTask,
  deleteProjectFromProjectsList,
  getProjectList,
} from '../logic/logicController';
import projectImg from '../assets/project-img.svg';
import removeImg from '../assets/close-small-svgrepo-com.svg';

const projectsDiv = document.querySelector('.projects-list');

const itemTitle = document.querySelector('.container #plan-item-title');

function createProjectInDom(title, projectId) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('wrapper');
  projectContainer.dataset.projectId = projectId;

  const projectIcon = document.createElement('img');
  projectIcon.src = projectImg;
  projectIcon.classList.add('.project-icon');
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

function createModal(clss, labelText, addBtnId, cancelBtnId) {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add(clss);

  const modalLabel = document.createElement('label');
  modalLabel.textContent = labelText;

  const modalInput = document.createElement('input');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.id = addBtnId;

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.id = cancelBtnId;

  btnContainer.append(addBtn, cancelBtn);
  modalContainer.append(modalLabel, modalInput, btnContainer);

  return modalContainer;
}

function createAddProjectModal() {
  return createModal('modal', 'Write Project name', 'add-btn', 'cancel-btn');
}

function createAddTaskModal() {
  return createModal(
    'task-modal',
    'Enter Task name',
    'add-task-btn',
    'cancel-task-btn'
  );
}

function displayModal(selector, createFunction) {
  let modal = document.querySelector(selector);
  if (modal === null) {
    modal = createFunction();
    document.querySelector('body').appendChild(modal);
  }
  modal.style.display = 'flex';
}

function displayProjectModal() {
  displayModal('.modal', createAddProjectModal);
}

function displayTaskModal() {
  displayModal('.task-modal', createAddTaskModal);
}

function changeModalDisplay(selector, display) {
  document.querySelector(selector).style.display = display;
}

function cancelAdding(selector) {
  changeModalDisplay(selector, 'none');
}

function addProject() {
  const projectName = document.querySelector('.modal input').value;
  if (projectName != null && projectName !== '') {
    addProjectToProjectsList(projectName);
  }
}

function deleteProject(closeIcon) {
  const { projectId } = closeIcon.parentElement.dataset;
  deleteProjectFromProjectsList(projectId);
}

/* manage active state */
function switchItemActiveState(items, target) {
  items.forEach((item) => {
    item.classList.remove('active');
  });
  target.classList.add('active');
}

function getSelectedItemName(items) {
  let selectedItemName;
  items.forEach((item) => {
    if (
      item.classList.contains('active') &&
      !item.hasAttribute('data-project-id')
    ) {
      selectedItemName = item.lastElementChild.textContent;
    } else if (
      item.classList.contains('active') &&
      item.hasAttribute('data-project-id')
    ) {
      selectedItemName = item.querySelector('h3').textContent;
    }
  });
  return selectedItemName;
}

function changeItemTitle(items, itmTitle) {
  const selectedName = getSelectedItemName(items);
  if (selectedName == null) return;
  // eslint-disable-next-line no-param-reassign
  itmTitle.textContent = selectedName;
}

function switchSidebarOptions(selector, target) {
  switchItemActiveState(
    Array.from(document.querySelectorAll(selector, target)),
    target
  );
  changeItemTitle(
    Array.from(document.querySelectorAll(selector, target)),
    itemTitle
  );
}

function resetActiveSate() {
  const sideBarOptions = Array.from(
    document.querySelectorAll('.plan-items .wrapper, [data-project-id]')
  );
  const projects = Array.from(document.querySelectorAll('[data-project-id]'));

  if (projects.length === 0) {
    const upperSideBarOptions = Array.from(
      document.querySelectorAll('.plan-items .wrapper')
    );
    switchItemActiveState(upperSideBarOptions, upperSideBarOptions[0]);
    changeItemTitle(upperSideBarOptions, itemTitle);
  } else {
    switchItemActiveState(sideBarOptions, projects[projects.length - 1]);
    changeItemTitle(projects, itemTitle);
  }
}

function addTask() {
  const inputValue = document.querySelector('.task-modal input').value;
  const projectName = document.querySelector('#plan-item-title').textContent;
  const projectsList = getProjectList();

  if (inputValue == null || inputValue === '') return;
  projectsList.forEach((project) => {
    if (project.title === projectName) {
      addTodoTask(project, inputValue);
      console.log('tasks:', project.tasks);
    }
  });
}

function globalEventsHandler() {
  document.addEventListener('click', (e) => {
    // Manage active states and switches of inbox, today and this week
    if (e.target.matches('.plan-items .wrapper')) {
      switchSidebarOptions('.plan-items .wrapper, [data-project-id]', e.target);
    }
    if (e.target.matches('.plan-items .wrapper *')) {
      // added to make sure event will start if child element was pressed
      switchSidebarOptions(
        '.plan-items .wrapper, [data-project-id]',
        e.target.parentElement
      );
    }
    // Handle add projects button events
    if (
      e.target.matches('#add-project') ||
      e.target.matches('#add-project *')
    ) {
      displayProjectModal();
    }
    // Handle cancel button events in AddProject modal
    if (e.target.matches('#cancel-btn')) {
      cancelAdding('.modal');
    }
    // Handle add button events in AddProject Modal
    if (e.target.matches('#add-btn')) {
      addProject();
      changeModalDisplay('.modal', 'none');
      renderProjects();
      resetActiveSate();
    }
    // Handle close icon events in project's div
    if (e.target.matches('.close-icon')) {
      deleteProject(e.target);
      renderProjects();
      resetActiveSate();
    }
    // Manage active states changes of projects
    if (e.target.matches('[data-project-id]')) {
      switchSidebarOptions('.plan-items .wrapper, [data-project-id]', e.target);
    }
    if (e.target.matches('[data-project-id] .project-icon, h3')) {
      // added to make sure event will start if child element was pressed,
      // I avoided wild selector * to prevent conflict between switchSidebarOptions() and resetActiveState()
      switchSidebarOptions(
        '.plan-items .wrapper, [data-project-id]',
        e.target.parentElement
      );
    }
    // Handle Add task button's events
    if (e.target.matches('.add-task, .add-task *')) {
      displayTaskModal();
    }
    // Handle cancel adding task event
    if (e.target.matches('#cancel-task-btn')) {
      cancelAdding('.task-modal');
    }
    // Handle add task events
    if (e.target.matches('#add-task-btn')) {
      console.log('entred event');
      addTask();
      changeModalDisplay('.task-modal', 'none');
    }
  });
}

export default function displayController() {
  globalEventsHandler();
}
