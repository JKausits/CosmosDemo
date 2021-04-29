import { TodoDto, TodoFormDto, TodoSummaryDto } from "../models/Todo";
import Agent from "./agent";

export default class TodoRequests {
  private baseUrl = "todo";
  constructor(private agent: Agent) {}

  getSummaries = () => this.agent.get<TodoSummaryDto[]>(this.baseUrl);

  getTodo = (id: string) =>
    this.agent
      .get<TodoDto>(`${this.baseUrl}/${id}`)
      .then((t) => this.formatTodoDate(t));

  createTodo = (dto: TodoFormDto) =>
    this.agent
      .post<TodoDto>(this.baseUrl, dto)
      .then((t) => this.formatTodoDate(t));

  updateTodo = (id: string, dto: TodoFormDto) =>
    this.agent
      .put<TodoDto>(`${this.baseUrl}/${id}`, dto)
      .then((t) => this.formatTodoDate(t));

  completeTodo = (id: string) =>
    this.agent.patch(`${this.baseUrl}/${id}/complete`, {});

  deleteTodo = (id: string) => this.agent.delete(`${this.baseUrl}/${id}`);

  private formatTodoDate = (todo: TodoDto) => {
    if (todo.completedDate) todo.completedDate = new Date(todo.completedDate);
    return todo;
  };
}
