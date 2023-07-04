// eslint-disable-next-line import/no-extraneous-dependencies
import { addDoc, collection, getDocs, writeBatch } from 'firebase/firestore';
import TodosFactory from './todosFactory';
import ProjectFactory from './projectFactory';
import { db } from '../firebase-config';

const projectsList = [];
const inbox = [];

// get data from firestore
export const getDataFromFireStore = async (path, array) => {
  try {
    const q = await getDocs(collection(db, path));
    q.forEach((document) => {
      array.push({ ...document.data(), id: document.id });
    });
  } catch (error) {
    console.error(error);
  }
};

export const loadData = async () => {
  await getDataFromFireStore('projects', projectsList);
  await getDataFromFireStore('inbox', inbox);
};

// update data in firstore
export const updateFirestore = async (collect, valuesList) => {
  // delete existing documents in firestore
  const q = await getDocs(collection(db, collect));
  const batch = writeBatch(db);
  q.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  // add new documents to firstore
  valuesList.forEach(async (value) => {
    if (collect === 'projects') {
      await addDoc(collection(db, collect), {
        title: value.title,
        projectId: value.projectId,
        tasks: value.tasks.map((task) => ({
          title: task.title,
          todoId: task.todoId,
          dueDate: task.dueDate,
          priority: task.priority,
          description: task.description,
        })),
      });
    } else {
      await addDoc(collection(db, collect), {
        title: value.title,
        todoId: value.todoId,
        dueDate: value.dueDate,
        priority: value.priority,
        description: value.description,
      });
    }
  });
};

// tasks functions
export const getInbox = () => inbox;

function addTask(title, todoId, dueDate, priority, description) {
  const todo = new TodosFactory(title, todoId, dueDate, priority, description);
  this.tasks.push(todo);
}

export function setTodoTask(title, dueDate, priority, description) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.description = description;
}

export const addTaskToInbox = (
  inboxList,
  taskName,
  dueDate,
  priority,
  description
) => {
  const task = new TodosFactory(
    taskName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
  inboxList.push(task);
};

// Projects functions
export const getProjectList = () => projectsList;

export const addProjectToProjectsList = (title) => {
  const project = new ProjectFactory(title, Date.now().toString());
  projectsList.push(project);
  // updateLocalStorage('projects-list', projectsList);
  updateFirestore('projects', projectsList);
};

export const deleteProjectFromProjectsList = (projectId) => {
  projectsList.forEach((project) => {
    if (project.projectId === projectId) {
      projectsList.splice(projectsList.indexOf(project), 1);
    }
  });
  // updateLocalStorage('projects-list', projectsList);
  updateFirestore('projects', projectsList);
};

export const addTodoTask = (project, title, dueDate, priority, description) => {
  // eslint-disable-next-line no-param-reassign
  project.addTask = addTask;
  // Add project name to todo task
  const projName = `(${project.title})`;
  const titlePlusProjName = `${title} ${projName}`;

  // add task to specific project
  project.addTask(
    titlePlusProjName,
    Date.now().toString(),
    dueDate,
    priority,
    description
  );
};
