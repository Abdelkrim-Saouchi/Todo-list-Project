import {
  globalEventsHandler,
  renderProjects,
  renderTasks,
} from './dom/displayController';
import './style.css';

// render page
renderProjects();
renderTasks();

// events listeners
document.addEventListener('click', globalEventsHandler);
