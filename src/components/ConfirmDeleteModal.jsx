import React from "react";
import { Modal } from "./Modal";
import Button from "./UI/button/Button";

const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
  return (
    <Modal onClose={onClose}>
      <p>Вы уверенны что хотите удалить?</p>
      <Button color="red" onClick={onClose}>
        Нет
      </Button>
      <Button color="green" onClick={onConfirm}>
        Да
      </Button>
    </Modal>
  );
};
export default ConfirmDeleteModal;
