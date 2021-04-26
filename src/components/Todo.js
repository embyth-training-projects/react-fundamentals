import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteButtonClickHandler() {
    setIsModalOpen(true);
  }

  function modalCloseHandler() {
    setIsModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button
          className="btn"
          type="button"
          onClick={deleteButtonClickHandler}
        >
          Delete
        </button>
      </div>

      {isModalOpen && <Backdrop closeHandler={modalCloseHandler} />}
      {isModalOpen && (
        <Modal
          closeHandler={modalCloseHandler}
          confirmHandler={modalCloseHandler}
        />
      )}
    </div>
  );
}

export default Todo;
