import { Card, CardContent, Grid } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import DeleteButton from "../../../app/components/buttons/DeleteButton";
import CompleteButton from "../../../app/components/buttons/CompleteButton";
import { useTodo } from "../../../app/hooks/todos";
import { useId } from "../../../app/hooks/useId";
import EditButton from "../../../app/components/buttons/EditButton";
import { useHistory } from "react-router";
import { useModalContext } from "../../../app/context/ModalProvider";
import { useNotificationContext } from "../../../app/context/NotificationProvider";
import ConfirmDeleteTodoModal from "../components/ConfirmDeleteTodoModal";
import BackButton from "../../../app/components/buttons/BackButton";
import { useRequestContext } from "../../../app/context/RequestProvider";

const TodoDetail = () => {
  const id = useId();
  const { todo, loadTodo, deleteTodo, completeTodo } = useTodo();
  const [loading, setLoading] = useState(true);
  const { open, close } = useModalContext();
  const { sendSuccessNotification } = useNotificationContext();
  const { runRequest } = useRequestContext();

  const history = useHistory();

  const handleDeleteClicked = () => {
    open(
      <ConfirmDeleteTodoModal
        handleClose={close}
        handleConfirm={async () => {
          const action = () => deleteTodo(todo!.id);
          await runRequest(action, "Deleting Todo");
          close();
          history.push("/");
          sendSuccessNotification("Todo Deleted");
        }}
        todo={todo!}
      />
    );
  };

  const handleCompleteClick = async () => {
    const action = () => completeTodo(todo.id);
    runRequest(action, "Completing Todo");
    sendSuccessNotification("Todo Completed");
  };

  const handleEditClicked = () => {
    history.push(`/${todo.id}/edit`);
  };

  useEffect(() => {
    const load = async () => {
      const action = () => loadTodo(id);
      await runRequest(action, "Loading Todo");
      setLoading(false);
    };
    load();
  }, [id, loadTodo, runRequest]);

  if (loading && todo === undefined) return <p>Loading Todo...</p>;

  if (todo === undefined) return <p>Not Found</p>;
  return (
    <Fragment>
      <div className="d-flex">
        <BackButton style={{ marginTop: "10px", marginBottom: "10px" }} />
      </div>
      <Card elevation={6}>
        <CardContent>
          <div className="d-flex">
            <h2 style={{ display: "inline-block" }}>{todo.title}</h2>
            <div style={{ float: "right" }}>
              <DeleteButton
                className="ml-auto"
                tooltip="Delete Todo"
                onClick={handleDeleteClicked}
              />

              {todo.completedDate === null && (
                <Fragment>
                  <CompleteButton
                    tooltip="Complete Todo"
                    onClick={handleCompleteClick}
                  />
                  <EditButton tooltip="Edit Todo" onClick={handleEditClicked} />
                </Fragment>
              )}
            </div>
          </div>
          <Grid container>
            <Grid item md={2}>
              <strong>Description: </strong>
            </Grid>
            <Grid item md={9}>
              {todo.description}
            </Grid>

            {todo.completedDate && (
              <Fragment>
                <Grid item md={2}>
                  <strong>Completed</strong>
                </Grid>
                <Grid item md={9}>
                  {todo.completedDate.toLocaleString()}
                </Grid>
              </Fragment>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default TodoDetail;
