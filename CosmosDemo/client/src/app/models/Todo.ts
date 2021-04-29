export class TodoSummaryDto {
  id: string;
  title: string;
  isCompleted: boolean;

  public static fromTodo(todo: TodoDto) {
    const summary = new TodoSummaryDto();
    summary.id = todo.id;
    summary.title = todo.title;
    summary.isCompleted = !!todo.completedDate;
    return summary;
  }
}

export class TodoDto {
  id: string;
  title: string;
  description: string;
  completedDate: Date;
}

export class TodoFormDto {
  title: string = "";
  description: string = "";

  constructor(todo?: TodoDto) {
    if (todo) {
      this.title = todo.title;
      this.description = todo.description;
    }
  }
}
