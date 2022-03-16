import React, { useEffect, useState } from 'react'
import './Modal.style.css'

const Modal = (p) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (p.openModal > 0 && !open) openModal()
	}, [p.openModal])

	const modalId = `modal-${p.id}`
	const openModal = () => {
		const modal = document.getElementById(modalId)
		modal.style.display = 'block'
		setOpen(true)
	}
	const closeModal = () => {
		const modal = document.getElementById(modalId)
		modal.style.display = 'none'
		setOpen(false)
		p.callBack && p.callBack()
	}
	return (
		<div>
			<button className="cake-button modal_actionButton" onClick={openModal}>
				{'>'}
			</button>
			<div id={modalId} className="modal_container">
				<div className="modal_content standardBox">
					<div className="modal_header">
						<div className="modal_title">{p.title}</div>
						<div onClick={closeModal} className="modal_close">
							&times;
						</div>
					</div>
					<div className="modal_body">{open ? p.children : undefined}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
