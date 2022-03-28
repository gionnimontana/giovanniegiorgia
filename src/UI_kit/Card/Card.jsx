import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { CommentIcon, HeartIcon } from '../Icons'
import './Card.style.css'

const Card = (p) => {
	const [modalState, setModalState] = useState(0)

	const openModal = () => setModalState((v) => v + 1)

	return (
		<div className="card_Container borderBottom">
			<div className="card_ImageContainer" onClick={openModal}>
				<img className="card_Image" src={p.img} alt="card_" />
			</div>
			<div className="card_Content" onClick={openModal}>
				<div className="card_Title">{p.title}</div>
				<div className="card_Text">{p.text}</div>
			</div>
			<div className="card_OpenModalButton">
				<div className="card__iconbox" onClick={openModal}>
					<HeartIcon value={p.purchased} />
					<CommentIcon value={p.comments} />
				</div>
				<Modal id={p.id} title="" callBack={p.callBack} openModal={modalState}>
					<div className="card_Container">
						<div className="card_Content">
							<div className="card_Title">{p.title}</div>
							<div className="card_Text">{p.text}</div>
						</div>
						<div className="card_ImageLargeContainer">
							<img className="card_ImageLarge" src={p.img} alt="card_ modal" />
						</div>
					</div>
					{p.children}
				</Modal>
			</div>
		</div>
	)
}

export default Card
