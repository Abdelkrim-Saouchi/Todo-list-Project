import {
  globalEventsHandler,
  renderProjects,
  renderTasks,
} from './dom/displayController';
import { loadData } from './logic/logicController';

import './style.css';

loadData().then(() => {
  // render page
  renderProjects();
  renderTasks();

  // events listeners
  document.addEventListener('click', globalEventsHandler);
});
