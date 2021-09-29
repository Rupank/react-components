import React, { useRef, useCallback, useEffect } from "react";
import "./Modal.css";
function Modal({ showModal, toggleModal }) {
  const modelRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        toggleModal(false);
      }
    },
    [showModal, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);
  const onClose = (e) => {
    if (modelRef.current === e.target) {
      toggleModal(false);
    }
  };
  if (!showModal) {
    return null;
  }
  return (
    <>
      <div className="background" ref={modelRef} onClick={onClose}>
        <div className="modal-container">
          <button onClick={toggleModal}>X</button>
          <div>Title</div>
          <div>Body</div>
          <div>Footer</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
