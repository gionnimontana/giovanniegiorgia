import React, { useState } from 'react'
import Input from '../Input/Input'
import NumberButtons from '../NumberButtons/NumberButtons'
import './PeopleCard.css'

const PeopleCard = (p) => {
	const [name, setName] = useState(undefined)
	const [selected, setSelected] = useState(undefined)
	const [nameError, setNameError] = useState(undefined)
	const [rState, setRState] = useState(0)

	const onConfirm = () => {
		if (!name) {
			setNameError("il nome non puo' essere vuoto")
			return
		}
		p.onConfirm({ name, selected })
		setName(undefined)
		setSelected(undefined)
		setRState((s) => (s += 1))
	}

	const onChange = (e) => {
		if (nameError) setNameError(undefined)
		setName(e.target.value)
	}

	return (
		<div className="standardBox">
			<div className="peoplecard_header">Partecipante {p.targetNumber}</div>
			<Input
				label="Nome e cognome:"
				onChange={onChange}
				resetstate={rState}
				error={nameError}
			/>
			<NumberButtons
				labels={p.allergie}
				onSelect={(e) => setSelected(e)}
				label=""
				selected={selected}
				allowOther={true}
			/>
			{selected && (
				<div className="basic_plain_button peoplecard_button" onClick={onConfirm}>
					Conferma partecipante
				</div>
			)}
		</div>
	)
}

export default PeopleCard
