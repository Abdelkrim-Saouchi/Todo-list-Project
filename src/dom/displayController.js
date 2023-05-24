import { getInbox, getProjectList } from '../logic/logicController';
import {
  createProjectInDom,
  createAddProjectModal,
  createAddTaskModal,
  createUpdateTaskModal,
  createTaskInDom,
} from './createUI';
import {
  resetModalInputs,
  addProject,
  deleteProject,
  switchSidebarOptions,
  resetActiveSate,
  addTask,
  deleteTask,
  fillUpdateTaskModal,
  updateTask,
  getTodayTasks,
  getWeekTasks,
  updatePriorityBg,
} from './utilities';

// global variables
const projectsDiv = document.querySelector('.projects-list');

// Display functions
export const renderProjects = () => {
  projectsDiv.innerHTML = '';

  const projects = getProjectList();
  projects.forEach((project) => {
    createProjectInDom(project.title, project.id);
  });
};

const displayModal = (selector, createFunction) => {
  let modal = document.querySelector(selector);
  if (modal === null) {
    modal = createFunction();
    document.querySelector('body').appendChild(modal);
  }
  modal.style.display = 'flex';
};

const displayProjectModal = () => {
  displayModal('.modal', createAddProjectModal);
};

const displayTaskModal = () => {
  displayModal('.task-modal', createAddTaskModal);
};

const displayUpdateTaskModal = () => {
  displayModal('.update-task-modal', createUpdateTaskModal);
};

const changeDisplay = (selector, display) => {
  document.querySelector(selector).style.display = display;
};

const changeTaskDisplay = (display, target) => {
  const taskDataId = target.parentElement.parentElement.dataset.taskId;
  const taskDetailsDisplay = document.querySelector(`#detail-${taskDataId}`)
    .style.display;
  // eslint-disable-next-line no-unused-expressions
  taskDetailsDisplay === display
    ? changeDisplay(`#detail-${taskDataId}`, 'none')
    : changeDisplay(`#detail-${taskDataId}`, display);
};

const cancelAdding = (selector) => {
  changeDisplay(selector, 'none');
};

const taskBtnsHidder = () => {
  const btnsContainers = Array.from(
    document.querySelectorAll('.task .task-btns-container')
  );
  btnsContainers.forEach((btnContainer) => {
    // eslint-disable-next-line no-param-reassign
    btnContainer.style.display = 'none';
  });
};

export const renderTasks = () => {
  const tasksSection = document.querySelector('.projects-tasks-section');
  const sideBarOptionTitle =
    document.querySelector('#plan-item-title').textContent;

  const projectsList = getProjectList();

  tasksSection.innerHTML = '';

  if (sideBarOptionTitle === 'Inbox') {
    const inbox = getInbox();
    inbox.forEach((task) => {
      const taskTodo = createTaskInDom(
        task.title,
        task.todoId,
        task.dueDate,
        task.priority,
        task.description
      );
      tasksSection.appendChild(taskTodo);
    });
    return;
  }
  if (sideBarOptionTitle === 'Today') {
    const todayTasks = getTodayTasks();
    todayTasks.forEach((task) => {
      const taskTodo = createTaskInDom(
        task.title,
        task.todoId,
        task.dueDate,
        task.priority,
        task.description
      );
      tasksSection.appendChild(taskTodo);
      taskBtnsHidder(); // hide edit remove btns to make today and this week display only tasks
    });
    return;
  }

  if (sideBarOptionTitle === 'This week') {
    const weekTasks = getWeekTasks();
    weekTasks.forEach((task) => {
      const taskTodo = createTaskInDom(
        task.title,
        task.todoId,
        task.dueDate,
        task.priority,
        task.description
      );
      tasksSection.appendChild(taskTodo);
      taskBtnsHidder(); // hide edit remove btns to make today and this week display only tasks
    });
    return;
  }
  projectsList.forEach((project) => {
    if (project.title === sideBarOptionTitle) {
      project.tasks.forEach((task) => {
        const taskTodo = createTaskInDom(
          task.title,
          task.todoId,
          task.dueDate,
          task.priority,
          task.description
        );
        tasksSection.appendChild(taskTodo);
      });
    }
  });
};

// Event handler functions
export const globalEventsHandler = (e) => {
  // Manage active states and switches of inbox, today and this week
  if (e.target.matches('.plan-items .wrapper')) {
    switchSidebarOptions('.plan-items .wrapper, [data-project-id]', e.target);
    renderTasks();
    updatePriorityBg();
  }
  if (e.target.matches('.plan-items .wrapper *')) {
    // added to make sure event will start if child element was pressed
    switchSidebarOptions(
      '.plan-items .wrapper, [data-project-id]',
      e.target.parentElement
    );
    renderTasks();
    updatePriorityBg();
  }
  // Handle add projects button events
  if (e.target.matches('#add-project') || e.target.matches('#add-project *')) {
    displayProjectModal();
    resetModalInputs('.modal');
  }
  // Handle cancel button events in AddProject modal
  if (e.target.matches('#cancel-btn')) {
    cancelAdding('.modal');
  }
  // Handle add button events in AddProject Modal
  if (e.target.matches('#add-btn')) {
    addProject();
    changeDisplay('.modal', 'none');
    renderProjects();
    resetActiveSate();
    renderTasks();
  }
  // Handle close icon events in project's div
  if (e.target.matches('.close-icon')) {
    deleteProject(e.target);
    renderProjects();
    resetActiveSate();
    renderTasks();
    updatePriorityBg();
  }
  // Manage active states changes of projects
  if (e.target.matches('[data-project-id]')) {
    switchSidebarOptions('.plan-items .wrapper, [data-project-id]', e.target);
    renderTasks();
    updatePriorityBg();
  }
  if (e.target.matches('[data-project-id] .project-icon, h3')) {
    // added to make sure event will start if child element was pressed,
    // I avoided wild selector * to prevent conflict between switchSidebarOptions() and resetActiveState()
    switchSidebarOptions(
      '.plan-items .wrapper, [data-project-id]',
      e.target.parentElement
    );
    renderTasks();
    updatePriorityBg();
  }
  // Handle Add task button's events
  if (e.target.matches('.add-task, .add-task *')) {
    displayTaskModal();
    resetModalInputs('.task-modal');
    // updatePriorityBg();
  }
  // Handle cancel adding task event
  if (e.target.matches('#cancel-task-btn')) {
    cancelAdding('.task-modal');
  }
  // Handle add task events
  if (e.target.matches('#add-task-btn')) {
    addTask();
    renderTasks();
    changeDisplay('.task-modal', 'none');
    updatePriorityBg();
  }
  // Handle task's setting icon event
  if (e.target.matches('.setting-icon')) {
    changeTaskDisplay('flex', e.target);
  }
  // Handle task remove button
  if (e.target.matches('.remove-task-btn')) {
    deleteTask(e.target);
    renderTasks();
    updatePriorityBg();
  }
  // Handle edit task button
  if (e.target.matches('.edit-task-btn')) {
    displayUpdateTaskModal();
    fillUpdateTaskModal(e.target);

    // Handle update edit task button
    const updateBtn = document.querySelector('#update-task-btn');
    updateBtn.addEventListener('click', () => {
      updateTask(e.target);
      renderTasks();
      changeDisplay('.update-task-modal', 'none');
      updatePriorityBg();
    });
  }
  // Handle cancel edit task button
  if (e.target.matches('#cancel-update-task-btn')) {
    cancelAdding('.update-task-modal');
  }
};
