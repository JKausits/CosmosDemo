import React, { useEffect } from "react";
import AddButton from "../../../app/components/buttons/AddButton";
import { useModalContext } from "../../../app/context/ModalProvider";
import { useTodoSummaries } from "../../../app/hooks/todos";
import { TodoFormDto, TodoSummaryDto } from "../../../app/models/Todo";
import ConfirmDeleteTodoModal from "../components/ConfirmDeleteTodoModal";
import TodoFormModal from "../components/TodoFormModal";
import TodoListItem from "../components/TodoListItem";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { useNotificationContext } from "../../../app/context/NotificationProvider";

const useStyles = makeStyles({
  addContainer: {
    display: "flex",
  },
  addButton: {
    marginLeft: "auto",
  },
});

const TodoList = () => {
  const {
    todos,
    loadTodos,
    deleteTodo,
    completeTodo,
    createTodo,
  } = useTodoSummaries();
  const history = useHistory();
  const { open, close } = useModalContext();
  const { sendSuccessNotification } = useNotificationContext();
  const classes = useStyles();

  const handleDeleteTodo = (todo: TodoSummaryDto) => {
    open(
      <ConfirmDeleteTodoModal
        handleClose={close}
        handleConfirm={async () => {
          await deleteTodo(todo.id);
          close();
          sendSuccessNotification("Todo Deleted");
        }}
        todo={todo}
      />
    );
  };

  const handleCompleteTodo = async (todo: TodoSummaryDto) => {
    await completeTodo(todo.id);
    sendSuccessNotification("Todo Completed");
  };

  const handleEditClicked = (todo: TodoSummaryDto) => {
    history.push(`/${todo.id}/edit`);
  };

  const handleInfoClicked = (todo: TodoSummaryDto) =>
    history.push(`/${todo.id}`);

  const handleCreateTodoClicked = () => {
    open(
      <TodoFormModal
        onClose={close}
        onSubmit={async (dto: TodoFormDto) => {
          await createTodo(dto);
          close();
          sendSuccessNotification("Todo Created");
        }}
      />
    );
  };

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);
  return (
    <>
      <div className={classes.addContainer}>
        <AddButton
          tooltip="Add Todo"
          onClick={handleCreateTodoClicked}
          className={classes.addButton}
        />
      </div>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
                onDeleteClicked={handleDeleteTodo}
                onCompleteClicked={handleCompleteTodo}
                onEditClicked={handleEditClicked}
                onInfoClicked={handleInfoClicked}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoList;
