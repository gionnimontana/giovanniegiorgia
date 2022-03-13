import React, { useState } from 'react'
import Input from '../../ui_kit/Input/Input'
import { easterEgg, slowly } from '../../utils'
import './Login.style.css'

const Login = (p) => {
	const [name, setName] = useState(undefined)
	const [nameError, setNameError] = useState(undefined)
	const [surname, setSurname] = useState(undefined)
	const [surnameError, setSurnameError] = useState(undefined)
	const [password, setPassword] = useState(undefined)
	const [passwordError, setPasswordError] = useState(undefined)

	const sw = () => {
		if (easterEgg(password)) return

		setNameError(undefined)
		setSurnameError(undefined)
		setPasswordError(undefined)

		if (!name) setNameError("non puo' essere vuoto")
		if (!surname) setSurnameError("non puo' essere vuoto")

		if (password !== process.env.REACT_APP_PASSWORD)
			setPasswordError(
				'Password errata (la trovi nella partecipazione, controlla caratteri maiuscoli e minuscoli)'
			)
		if (!name || !surname || password !== process.env.REACT_APP_PASSWORD) return

		localStorage.setItem('user', JSON.stringify({ name, surname }))

		slowly(() => p.setView('menu'))
	}

	const onKP = (e) => {
		if (e.charCode === 13) sw()
	}

	return (
		<div className="standardBox">
			<div>
				<Input
					label="Nome:"
					error={nameError}
					onChange={(v) => setName(v.target.value)}
					onKeyPress={onKP}
				/>
				<Input
					label="Cognome:"
					error={surnameError}
					onChange={(v) => setSurname(v.target.value)}
					onKeyPress={onKP}
				/>
				<Input
					label="Parola d'ordine:"
					error={passwordError}
					onChange={(v) => setPassword(v.target.value)}
					onKeyPress={onKP}
				/>
				<div id="columnLayout" style={{ marginTop: '3rem' }}>
					<button className="cake-button menuButton" onClick={sw}>
						Accedi
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
