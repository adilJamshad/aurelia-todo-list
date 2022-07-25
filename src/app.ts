import { Todo } from "Todo";

export class App {
  public message: String = "";
  public todoList: Todo[] = [];
  public newItem: String = "";

  constructor() {
    this.message = "My first project";
    this.todoList.push(new Todo("first todo"));
    this.todoList.push(new Todo("second todo"));
    this.todoList.push(new Todo("third todo"));
    this.todoList.push(new Todo("forth todo"));
  }

  addTodo() {
    const newTodo = new Todo(this.newItem);
    this.todoList.push(newTodo);
    this.newItem = "";
  }

  removeTodo(todo: Todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
