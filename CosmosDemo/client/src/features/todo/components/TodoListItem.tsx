import { TableCell, TableRow } from "@material-ui/core";
import React, { Fragment } from "react";
import CompleteButton from "../../../app/components/buttons/CompleteButton";
import DeleteButton from "../../../app/components/buttons/DeleteButton";
import EditButton from "../../../app/components/buttons/EditButton";
import InfoButton from "../../../app/components/buttons/InfoButton";
import { TodoSummaryDto } from "../../../app/models/Todo";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

interface IProps {
  todo: TodoSummaryDto;
  onDeleteClicked: (todo: TodoSummaryDto) => void;
  onCompleteClicked: (todo: TodoSummaryDto) => void;
  onEditClicked: (todo: TodoSummaryDto) => void;
  onInfoClicked: (todo: TodoSummaryDto) => void;
}

const TodoListItem = ({
  todo,
  onDeleteClicked,
  onCompleteClicked,
  onEditClicked,
  onInfoClicked,
}: IProps) => {
  return (
    <Fragment>
      <TableRow>
        <TableCell>{todo.title}</TableCell>
        <TableCell>
          {todo.isCompleted && <CheckCircleIcon style={{ color: "green" }} />}
        </TableCell>
        <TableCell>
          <DeleteButton
            tooltip="Delete Todo"
            onClick={() => onDeleteClicked(todo)}
          />
          <InfoButton onClick={() => onInfoClicked(todo)} tooltip="View Todo" />
          {todo.isCompleted === false && (
            <Fragment>
              <EditButton
                tooltip="Edit Todo"
                onClick={() => onEditClicked(todo)}
              />
              <CompleteButton
                tooltip="Complete Todo"
                onClick={() => onCompleteClicked(todo)}
              />
            </Fragment>
          )}
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default TodoListItem;
