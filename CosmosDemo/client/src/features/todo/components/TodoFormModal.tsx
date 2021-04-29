import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { TodoDto, TodoFormDto } from "../../../app/models/Todo";
import TextField from "@material-ui/core/TextField";
import { useFormField } from "../../../app/hooks/useFormField";

interface Props {
  onClose: () => void;
  onSubmit: (dto: TodoFormDto) => void;
  todo?: TodoDto;
}

const TodoFormModal = ({ onClose, onSubmit, todo }: Props) => {
  const [values, setValues] = useState(new TodoFormDto(todo));
  const { handleChange, handleSubmit } = useFormField(setValues, () =>
    onSubmit(values)
  );

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="alert-dialog-title">
          {todo ? "Edit" : "Create"} Todo
        </DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            value={values.description}
            onChange={handleChange}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Fragment>
  );
};

export default TodoFormModal;
