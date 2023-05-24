export default class TodosFactory {
  constructor(title, todoId, dueDate, priority, description) {
    this.title = title;
    this.todoId = todoId;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}
