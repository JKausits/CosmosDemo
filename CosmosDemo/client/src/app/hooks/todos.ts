import { useCallback, useState } from "react";
import RequestFactory from "../api/request-factory";
import { TodoDto, TodoFormDto, TodoSummaryDto } from "../models/Todo";
const todoRequests = RequestFactory.TodoRequests;

export const useTodoSummaries = () => {
  const [todos, setTodos] = useState<TodoSummaryDto[]>([]);

  const loadTodos = useCallback(async () => {
    const todos = await todoRequests.getSummaries();
    setTodos(todos);
  }, [setTodos]);

  const createTodo = useCallback(
    async (dto: TodoFormDto) => {
      const todo = await todoRequests.createTodo(dto);
      const summary = TodoSummaryDto.fromTodo(todo);
      setTodos((todos) => [summary, ...todos]);
    },
    [setTodos]
  );

  const updateTodo = useCallback(
    async (id: string, dto: TodoFormDto) => {
      const todo = await todoRequests.updateTodo(id, dto);
      const summary = TodoSummaryDto.fromTodo(todo);
      setTodos((todos) =>
        todos.map((t) => {
          if (t.id === id) return summary;

          return t;
        })
      );
    },
    [setTodos]
  );

  const completeTodo = useCallback(
    async (id: string) => {
      await todoRequests.completeTodo(id);
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === id) todo.isCompleted = true;

          return todo;
        })
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      await todoRequests.deleteTodo(id);
      setTodos((todos) => todos.filter((t) => t.id !== id));
    },
    [setTodos]
  );

  return { todos, loadTodos, createTodo, updateTodo, completeTodo, deleteTodo };
};

export const useTodo = () => {
  const [todo, setTodo] = useState<TodoDto>();

  const loadTodo = useCallback(
    async (id: string) => {
      const todo = await todoRequests.getTodo(id);
      setTodo(todo);
    },
    [setTodo]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      await todoRequests.deleteTodo(id);
      setTodo(undefined);
    },
    [setTodo]
  );

  const completeTodo = useCallback(
    async (id: string) => {
      await todoRequests.completeTodo(id);
      setTodo((todo) => ({ ...todo, completedDate: new Date() }));
    },
    [setTodo]
  );

  const updateTodo = useCallback(
    async (id: string, dto: TodoFormDto) => {
      const todo = await todoRequests.updateTodo(id, dto);
      setTodo(todo);
    },
    [setTodo]
  );

  return { todo, loadTodo, deleteTodo, updateTodo, completeTodo };
};
