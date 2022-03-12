import React from 'react'
import Modal from '../Modal/Modal'
import { CommentIcon, HeartIcon } from '../Icons'
import './Card.style.css'

const Card = (p) => {
	const openModal = () => {
		const modalId = `modal-${p.id}`
		const modal = document.getElementById(modalId)
		modal.style.display = 'block'
	}

	return (
		<div className="cardContainer borderBottom">
			<div className="cardImageContainer">
				<img className="cardImage" src={p.img} onClick={openModal} alt="card"/>
			</div>
			<div className="cardContent">
				<div className="cardTitle">{p.title}</div>
				<div className="cardText">{p.text}</div>
			</div>
			<div className="cardOpenModalButton">
				<div className="card_iconbox" onClick={openModal}>
					<HeartIcon />
					<CommentIcon />
				</div>
				<Modal id={p.id} title="">
					<div className="cardContainer">
						<div className="cardContent">
							<div className="cardTitle">{p.title}</div>
							<div className="cardText">{p.text}</div>
						</div>
						<div className="cardImageLargeContainer">
							<img className="cardImageLarge" src={p.img} alt="card modal"/>
						</div>
					</div>
					{p.children}
				</Modal>
			</div>
		</div>
	)
}

export default Card
