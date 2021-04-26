function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure about that?</p>
      <button className="btn btn--alt" onClick={props.closeHandler}>
        Cancel
      </button>
      <button className="btn" onClick={props.confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
