import React from "react";
import './Modal.style.css'

const Modal = (p) => {
    const modalId = `modal-${p.id}`
    const openModal = () => {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
    const closeModal = () => {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    }
    return (
        <div>
            <button 
                className="cake-button actionForward"
                onClick={openModal}
                >
                {'>'}
            </button>
            <div id={modalId} className="modal-container">
                <div className="modal-content standardBox">
                    <div className="modal-header">
                        <div className="modal-title">{p.title}</div>
                        <div onClick={closeModal} className="modal-close">&times;</div>
                    </div>
                    <div className="modal-body">
                        {p.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal