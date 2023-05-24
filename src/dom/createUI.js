import { parse, format } from 'date-fns';
import projectImg from '../assets/project-img.svg';
import removeImg from '../assets/close-small-svgrepo-com.svg';
import settingImg from '../assets/setting-svgrepo-com.svg';
import taskImg from '../assets/task-svgrepo-com.svg';

// get projects container
const projectsDiv = document.querySelector('.projects-list');

// create functions
export const createProjectInDom = (title, projectId) => {
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
};

const createModal = (clss, labelText, addBtnId, cancelBtnId) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add(clss);

  const modalLabel = document.createElement('label');
  modalLabel.textContent = labelText;

  const modalInput = document.createElement('input');
  modalInput.id = 'modal-title';

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
};

export const createAddProjectModal = () =>
  createModal('modal', 'Write Project name', 'add-btn', 'cancel-btn');

export const createAddTaskModal = () => {
  const modal = createModal(
    'task-modal',
    'Enter Task name',
    'add-task-btn',
    'cancel-task-btn'
  );
  const btnContainer = modal.querySelector('.btn-container');

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date: ';

  const dueDateCalendar = document.createElement('input');
  dueDateCalendar.type = 'date';

  modal.insertBefore(dueDateLabel, btnContainer);
  modal.insertBefore(dueDateCalendar, btnContainer);

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority: ';
  priorityLabel.htmlFor = 'priority';

  const select = document.createElement('select');
  select.id = 'priority';
  const topOption = document.createElement('option');
  topOption.value = 'top';
  topOption.textContent = 'Top';
  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'Medium';
  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'Low';
  select.append(topOption, mediumOption, lowOption);

  modal.insertBefore(priorityLabel, btnContainer);
  modal.insertBefore(select, btnContainer);

  const descLabel = document.createElement('label');
  descLabel.htmlFor = 'description';

  const descArea = document.createElement('textarea');
  descArea.id = 'description';

  modal.insertBefore(descLabel, btnContainer);
  modal.insertBefore(descArea, btnContainer);

  return modal;
};

export const createUpdateTaskModal = () => {
  const modal = createAddTaskModal();
  modal.classList.remove('task-modal');
  modal.classList.add('update-task-modal');
  const updateBtn = modal.querySelector('#add-task-btn');
  updateBtn.textContent = 'Update';
  updateBtn.id = 'update-task-btn';
  const cancelUpdateBtn = modal.querySelector('#cancel-task-btn');
  cancelUpdateBtn.id = 'cancel-update-task-btn';

  return modal;
};

export const createTaskInDom = (name, id, dueDate, priority, description) => {
  // Handle empty date entry
  let formattedDate;
  if (dueDate !== '') {
    // to convert duDate form 'yyyy-MM-dd' format to 'MM-dd-yyyy' format
    const date = parse(dueDate, 'yyyy-MM-dd', new Date());
    formattedDate = format(date, 'MM-dd-yyyy');
  } else {
    formattedDate = 'No date';
  }

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task');
  taskContainer.dataset.taskId = id;

  const taskHeader = document.createElement('div');
  taskHeader.classList.add('task-header');

  const taskIcon = document.createElement('img');
  taskIcon.src = taskImg;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = name;

  const taskDate = document.createElement('p');
  taskDate.classList.add('task-due-date');
  taskDate.textContent = `Date: ${formattedDate}`;

  const taskPriority = document.createElement('p');
  taskPriority.classList.add('task-priority');
  taskPriority.textContent = `Priority: ${priority}`;

  const taskSettingIcon = document.createElement('img');
  taskSettingIcon.src = settingImg;
  taskSettingIcon.classList.add('setting-icon');

  taskHeader.append(
    taskIcon,
    taskTitle,
    taskDate,
    taskPriority,
    taskSettingIcon
  );

  const taskDetails = document.createElement('div');
  taskDetails.classList.add('task-details');
  taskDetails.id = `detail-${id}`;

  const descTitle = document.createElement('h4');
  descTitle.classList.add('task-description-title');
  descTitle.textContent = 'Description: ';

  const taskDesc = document.createElement('p');
  taskDesc.classList.add('task-description');
  taskDesc.textContent = description;

  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('task-btns-container');

  const editTaskBtn = document.createElement('button');
  editTaskBtn.textContent = 'Edit';
  editTaskBtn.classList.add('edit-task-btn');

  const removeTaskBtn = document.createElement('button');
  removeTaskBtn.textContent = 'Remove';
  removeTaskBtn.classList.add('remove-task-btn');

  btnsContainer.append(editTaskBtn, removeTaskBtn);

  taskDetails.append(descTitle, taskDesc, btnsContainer);

  taskContainer.append(taskHeader, taskDetails);

  return taskContainer;
};
