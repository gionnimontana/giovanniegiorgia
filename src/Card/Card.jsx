import React from "react";
import Modal from "../Modal/Modal";
import PayementOptions from "../PaymentOptions/PaymentOptions";
import './Card.style.css'

const Card = (p) => {
    return (
        <div className="cardContainer borderBottom">
            <div className="cardImageContainer">
                <img className="cardImage" src={p.img} />
            </div>
            <div className="cardContent">
                <div className="cardTitle">{p.title}</div>
                <div className="cardText">{p.text}</div>
            </div>
            <div className="cardOpenModalButton">
                <Modal id={p.id} title="Regalaci un momento felice :)">
                    <div className="cardContainer">
                        <div className="cardContent">
                            <div className="cardTitle">{p.title}</div>
                            <div className="cardText">{p.text}</div>
                        </div>
                        <div className="cardImageLargeContainer">
                            <img className="cardImageLarge" src={p.img} />
                        </div>
                    </div>
                    <PayementOptions id={p.id}/>
                </Modal>
            </div>
        </div>
    )
}

export default Card