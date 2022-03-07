import React from "react";
import Modal from "../Modal/Modal";
import './Card.style.css'

const Card = (p) => {
    const openModal = () => {
        const modalId = `modal-${p.id}`
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    }

    return (
        <div className="cardContainer borderBottom">
            <div className="cardImageContainer">
                <img className="cardImage" src={p.img} onClick={openModal}/>
            </div>
            <div className="cardContent">
                <div className="cardTitle">{p.title}</div>
                <div className="cardText">{p.text}</div>
            </div>
            <div className="cardOpenModalButton">
                <Modal id={p.id} title="">
                    <div className="cardContainer">
                        <div className="cardContent">
                            <div className="cardTitle">{p.title}</div>
                            <div className="cardText">{p.text}</div>
                        </div>
                        <div className="cardImageLargeContainer">
                            <img className="cardImageLarge" src={p.img} />
                        </div>
                    </div>
                    {p.children}
                </Modal>
            </div>
        </div>
    )
}

export default Card