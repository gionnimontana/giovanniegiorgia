import { useEffect, useState } from 'react'
import './Input.css'

const Input = (p) => {
	const initId = (Math.random() + 1).toString(36).substring(7)
	const [id] = useState(initId)
	const feCN = p.error ? 'input_field_error' : ''
	const leCN = p.error ? 'input_label_error' : ''

	useEffect(() => {
		document.getElementById(id).value = ''
	}, [p.resetstate, id])

	return (
		<div className="input_container">
			<div className={`input_label ${leCN}`}>{p.label}</div>
			<input
				id={id}
				className={`input_field ${feCN}`}
				style={{ width: p.fw ? '95%' : '16rem' }}
				{...p}
			/>
			{p.error && <div className="input_error_label">*{p.error}</div>}
		</div>
	)
}

export default Input
