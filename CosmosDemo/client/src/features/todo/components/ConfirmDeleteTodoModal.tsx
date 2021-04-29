import React from "react";
import ConfirmDeleteModal from "../../../app/components/modals/ConfirmDeleteModal";
import { TodoDto, TodoSummaryDto } from "../../../app/models/Todo";

interface Props {
  handleClose: () => void;
  handleConfirm: () => void;
  todo: TodoSummaryDto | TodoDto;
}

const ConfirmDeleteTodoModal = ({
  todo,
  handleClose,
  handleConfirm,
}: Props) => {
  return (
    <ConfirmDeleteModal
      title="Confirm Delete Todo"
      prompt={`Are you sure you want to delete '${todo.title}'?`}
      onClose={handleClose}
      onConfirm={handleConfirm}
    />
  );
};

export default ConfirmDeleteTodoModal;
