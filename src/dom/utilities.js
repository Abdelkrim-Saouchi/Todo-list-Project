import { parseISO, isSameDay, getISOWeek } from 'date-fns';
import {
  addProjectToProjectsList,
  addTaskToInbox,
  addTodoTask,
  deleteProjectFromProjectsList,
  getInbox,
  getProjectList,
  setTodoTask,
  updateLocalStorage,
} from '../logic/logicController';

// get section title
const itemTitle = document.querySelector('.container #plan-item-title');

// Utility functions
export const resetModalInputs = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  const inputs = Array.from(modal.querySelectorAll('input,textarea'));
  inputs.forEach((input) => {
    // eslint-disable-next-line no-param-reassign
    input.value = '';
  });
};

export const addProject = () => {
  const projectName = document.querySelector('.modal input').value;
  if (projectName != null && projectName !== '') {
    addProjectToProjectsList(projectName);
  }
};

export const deleteProject = (closeIcon) => {
  const { projectId } = closeIcon.parentElement.dataset;
  deleteProjectFromProjectsList(projectId);
};

/* manage active state */
const switchItemActiveState = (items, target) => {
  items.forEach((item) => {
    item.classList.remove('active');
  });
  target.classList.add('active');
};

const getSelectedItemName = (items) => {
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
};

const changeItemTitle = (items, itmTitle) => {
  const selectedName = getSelectedItemName(items);
  if (selectedName == null) return;
  // eslint-disable-next-line no-param-reassign
  itmTitle.textContent = selectedName;
};

export const switchSidebarOptions = (selector, target) => {
  switchItemActiveState(
    Array.from(document.querySelectorAll(selector, target)),
    target
  );
  changeItemTitle(
    Array.from(document.querySelectorAll(selector, target)),
    itemTitle
  );
};

export const resetActiveSate = () => {
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
};

export const addTask = () => {
  const taskTitle = document.querySelector('.task-modal #modal-title').value;
  const taskDate = document.querySelector('.task-modal [type="date"]').value;

  const taskPriority = document.querySelector('.task-modal #priority').value;
  const taskDesc = document.querySelector('.task-modal #description').value;

  const projectName = document.querySelector('#plan-item-title').textContent;
  const projectsList = getProjectList();

  if (taskTitle == null || taskTitle === '') return;
  if (
    projectName === 'Inbox' ||
    projectName === 'Today' ||
    projectName === 'This week'
  ) {
    const inbox = getInbox();
    addTaskToInbox(inbox, taskTitle, taskDate, taskPriority, taskDesc);
    updateLocalStorage('inbox', inbox);
    return;
  }
  projectsList.forEach((project) => {
    if (project.title === projectName) {
      addTodoTask(project, taskTitle, taskDate, taskPriority, taskDesc);
    }
  });
  updateLocalStorage('projects-list', projectsList);
};

export const deleteTask = (target) => {
  const task = target.parentElement.parentElement.parentElement;
  const { taskId } = task.dataset;
  const sectionTitle = document.querySelector('#plan-item-title').textContent;
  const projects = getProjectList();

  if (sectionTitle === 'Inbox') {
    const inbox = getInbox();
    inbox.forEach((todoTask) => {
      if (todoTask.todoId === taskId) {
        inbox.splice(inbox.indexOf(todoTask), 1);
      }
    });
    updateLocalStorage('inbox', inbox);
    return;
  }

  projects.forEach((project) => {
    if (project.title === sectionTitle) {
      project.tasks.forEach((todoTask) => {
        if (todoTask.todoId === taskId) {
          project.tasks.splice(project.tasks.indexOf(todoTask), 1);
        }
      });
    }
  });
  updateLocalStorage('projects-list', projects);
};

export const getTaskData = (listType, taskId) => {
  const data = [];
  if (listType === 'project') {
    const projects = getProjectList();
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.todoId === taskId) {
          data.push(task.title);
          data.push(task.dueDate);
          data.push(task.priority);
          data.push(task.description);
        }
      });
    });
  } else {
    const inbox = getInbox();
    inbox.forEach((task) => {
      if (task.todoId === taskId) {
        data.push(task.title);
        data.push(task.dueDate);
        data.push(task.priority);
        data.push(task.description);
      }
    });
  }

  return data;
};

export const fillUpdateTaskModal = (target) => {
  const modal = document.querySelector('.update-task-modal');
  const taskTitle = modal.querySelector('#modal-title');
  const taskDueDate = modal.querySelector('[type="date"]');
  const taskPriority = modal.querySelector('select');
  const taskDesc = modal.querySelector('textarea');
  const targetTask = target.parentElement.parentElement.parentElement;
  const targetTaskId = targetTask.dataset.taskId;
  const sectionTitle = document.querySelector('#plan-item-title').textContent;

  if (sectionTitle === 'Inbox') {
    const [title, dueDate, priority, description] = getTaskData(
      'inbox',
      targetTaskId
    );
    taskTitle.value = title;
    taskDueDate.value = dueDate;
    taskPriority.value = priority;
    taskDesc.value = description;
  } else {
    const [title, dueDate, priority, description] = getTaskData(
      'project',
      targetTaskId
    );
    taskTitle.value = title;
    taskDueDate.value = dueDate;
    taskPriority.value = priority;
    taskDesc.value = description;
  }
};

export const updateTask = (target) => {
  const targetTask = target.parentElement.parentElement.parentElement;
  const targetTaskId = targetTask.dataset.taskId;
  const sectionTitle = document.querySelector('#plan-item-title').textContent;
  const modal = document.querySelector('.update-task-modal');
  const taskTitle = modal.querySelector('#modal-title').value;
  const taskDueDate = modal.querySelector('[type="date"]').value;
  const taskPriority = modal.querySelector('select').value;
  const taskDesc = modal.querySelector('textarea').value;
  const projects = getProjectList();

  if (sectionTitle === 'Inbox') {
    const inbox = getInbox();
    inbox.forEach((task) => {
      if (task.todoId === targetTaskId) {
        // eslint-disable-next-line no-param-reassign
        task.setTodoTask = setTodoTask;
        task.setTodoTask(taskTitle, taskDueDate, taskPriority, taskDesc);
      }
    });
    updateLocalStorage('inbox', inbox);
    return;
  }
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.todoId === targetTaskId) {
        // eslint-disable-next-line no-param-reassign
        task.setTodoTask = setTodoTask;
        task.setTodoTask(taskTitle, taskDueDate, taskPriority, taskDesc);
      }
    });
  });
  updateLocalStorage('projects-list', projects);
};

export const getAllTasks = () => {
  const inbox = getInbox();
  const projectTasks = [];
  const projects = getProjectList();
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      projectTasks.push(task);
    });
  });

  return [...inbox, ...projectTasks];
};

export const getTodayTasks = () => {
  const allTasks = getAllTasks();
  const todayTasks = [];

  const todayDate = new Date();
  allTasks.forEach((task) => {
    const taskDate = parseISO(task.dueDate);
    if (isSameDay(taskDate, todayDate)) {
      todayTasks.push(task);
    }
  });

  return todayTasks;
};

export const getWeekTasks = () => {
  const allTasks = getAllTasks();
  const weekTasks = [];

  const currentWeekNumber = getISOWeek(new Date());
  allTasks.forEach((task) => {
    const taskWeekNumber = getISOWeek(new Date(task.dueDate));
    if (currentWeekNumber === taskWeekNumber) {
      weekTasks.push(task);
    }
  });

  return weekTasks;
};

export const updatePriorityBg = () => {
  const priorities = document.querySelectorAll('.task-priority');
  if (priorities == null) return;
  const prioritiesList = Array.from(priorities);
  prioritiesList.forEach((priority) => {
    const text = priority.textContent.slice(10);
    priority.classList.remove('top');
    priority.classList.remove('medium');
    priority.classList.remove('low');

    if (text === 'top') priority.classList.add('top');
    else if (text === 'medium') priority.classList.add('medium');
    else priority.classList.add('low');
  });
};
