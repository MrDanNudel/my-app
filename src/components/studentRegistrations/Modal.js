import React from "react";
import "./Modal.css"; // Assuming you have some basic CSS for the modal

function Modal({ closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Modal Title</h2>
        <p>Modal Content goes here</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
}

export default Modal;
