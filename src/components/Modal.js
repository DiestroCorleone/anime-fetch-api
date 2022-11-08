import React from "react";

export default function Modal(props) {
  return (
    <div className={`modal ${props.showModal ? "is-active" : ""}`}>
      <div
        className="modal-background"
        onClick={() => props.setShowModal(false)}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h2 className="modal-card-title">{props.modalInfo[0]}</h2>
          <button
            className="delete"
            aria-label="close"
            onClick={() => props.setShowModal(false)}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="box">
            <p>{props.modalInfo[1]}</p>
          </div>
        </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => props.setShowModal(false)}
      ></button>
    </div>
  );
}
