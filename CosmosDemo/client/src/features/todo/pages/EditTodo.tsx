import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useTodo } from "../../../app/hooks/todos";
import { useFormField } from "../../../app/hooks/useFormField";
import { useId } from "../../../app/hooks/useId";
import { TodoFormDto } from "../../../app/models/Todo";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useNotificationContext } from "../../../app/context/NotificationProvider";
import { useRequestContext } from "../../../app/context/RequestProvider";

const EditTodo = () => {
  const id = useId();
  const { todo, loadTodo, updateTodo } = useTodo();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState(new TodoFormDto());
  const history = useHistory();
  const { sendSuccessNotification } = useNotificationContext();
  const { runRequest } = useRequestContext();

  const { handleChange, handleSubmit } = useFormField(setValues, async () => {
    const action = () => updateTodo(todo.id, values);
    await runRequest(action, "Updating Todo");
    sendSuccessNotification("Todo Updated");
    history.push(`/${todo.id}`);
  });

  useEffect(() => {
    const load = async () => {
      const action = () => loadTodo(id);
      await runRequest(action, "Loading Todo");
      setLoading(false);
    };
    load();
  }, [id, loadTodo, runRequest]);

  useEffect(() => {
    if (todo) setValues(new TodoFormDto(todo));
  }, [setValues, todo]);

  if (loading && todo === undefined) return <p>Loading Todo...</p>;

  if (todo === undefined) return <p>Not Found</p>;

  return (
    <div>
      <h2>Edit Todo</h2>
      <Card variant="outlined">
        <form onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              id="title"
              name="title"
              label="Title"
              value={values.title}
              onChange={handleChange}
              margin="dense"
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              name="description"
              label="Description"
              value={values.description}
              onChange={handleChange}
              fullWidth
              multiline
            />
          </CardContent>
          <CardActions>
            <Button style={{ float: "right", marginTop: "8px" }} type="submit">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default EditTodo;
