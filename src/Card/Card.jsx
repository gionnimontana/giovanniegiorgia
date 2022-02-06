import React from "react";
import Modal from "../Modal/Modal";
import './Card.style.css'

const Card = (p) => {
    return (
        <div className="cardContainer">
                   <img  className="cardImage" src={p.img} />
            <div className="cardContent">
                <div className="cardTitle">{p.title}</div>
                <div className="cardText">{p.text}</div>
            </div>
            <Modal id={p.id} title="Regalaci un momento felice :)">
                <div className="cardContainer">
                    <div className="cardContent">
                        <div className="cardTitle">{p.title}</div>
                        <div className="cardText">{p.text}</div>
                    </div>
                    <div className="cardImage">
                        <img src={p.img} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Card