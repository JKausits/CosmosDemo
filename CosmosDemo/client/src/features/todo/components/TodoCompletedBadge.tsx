import Badge from "@material-ui/core/Badge";
import React, { Fragment } from "react";
import { TodoSummaryDto } from "../../../app/models/Todo";

interface IProps {
  todo: TodoSummaryDto;
}

const TodoCompletedBadge = ({ todo }: IProps) => {
  if (todo.isCompleted === false) return <Fragment></Fragment>;

  return <Badge color="secondary">Completed</Badge>;
};

export default TodoCompletedBadge;
