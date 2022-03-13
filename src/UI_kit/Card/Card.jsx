import React from 'react'
import Modal from '../Modal/Modal'
import { CommentIcon, HeartIcon } from '../Icons'
import './Card.style.css'

const Card = (p) => {

	return (
		<div className="cardContainer borderBottom">
			<div className="cardImageContainer">
				<img className="cardImage" src={p.img} alt="card" />
			</div>
			<div className="cardContent">
				<div className="cardTitle">{p.title}</div>
				<div className="cardText">{p.text}</div>
			</div>
			<div className="cardOpenModalButton">
				<div className="card_iconbox">
					<HeartIcon value={p.purchased} />
					<CommentIcon value={p.comments} />
				</div>
				<Modal id={p.id} title="" callBack={p.callBack}>
					<div className="cardContainer">
						<div className="cardContent">
							<div className="cardTitle">{p.title}</div>
							<div className="cardText">{p.text}</div>
						</div>
						<div className="cardImageLargeContainer">
							<img className="cardImageLarge" src={p.img} alt="card modal" />
						</div>
					</div>
					{p.children}
				</Modal>
			</div>
		</div>
	)
}

export default Card
