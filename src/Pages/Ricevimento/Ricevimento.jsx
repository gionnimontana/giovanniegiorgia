import React, { useEffect, useState } from 'react'
import Badge from '../../ui_kit/Badge/Badge'
import { executeInsert_users, executeDeleteByClusterId } from '../../service/graphql'
import NumberButtons from '../../ui_kit/NumberButtons/NumberButtons'
import PeopleCards from '../../ui_kit/PeopleCards/PeopleCards'
import { refreshWarning } from '../../utils'
import './Ricevimento.css'

const maxPeopleNumber = 8
const allergieOptions = [
	'Mangio tutto',
	'Menu` bambini',
	'Infante (0-2 anni)',
	'Vegetariano',
	'Vegano',
	'Celiaco',
	'Non mangio'
]

const Ricevimento = () => {
	const [ciSaro, setCiSaro] = useState(undefined)
	const [saremoIn, setSaremoIn] = useState(undefined)
	const [confirmed, setConfirmed] = useState([])
	const [isLoading, setLoading] = useState(false)
	const [cID, setCID] = useState(undefined)
	const [canEdit, setCanEdit] = useState(true)
	const nameObj = localStorage.getItem('user')
	const name = JSON.parse(nameObj).name
	const surname = JSON.parse(nameObj).surname

	useEffect(() => {
		refreshWarning()
		const a = localStorage.getItem('ciSaro')
		const b = localStorage.getItem('saremoIn')
		const c = localStorage.getItem('confirmed')
		const d = localStorage.getItem('clusterId')
		if (a === 'false') setCiSaro(false)
		if (a === 'true' && b && c && d) {
			setCanEdit(false)
			setCiSaro(Boolean(a))
			setSaremoIn(Number(b))
			setConfirmed(JSON.parse(c))
			setCID(d)
		}
	}, [])

	const handleSaremo = (e) => {
		setSaremoIn(e)
		setConfirmed([])
	}

	async function startExecuteInsert_users(usersArray, clusterId) {
		if (cID) await executeDeleteByClusterId(cID)
		const { errors } = await executeInsert_users(usersArray)
		if (errors) {
			alert('Ops, qualcosa è andato storto, ritenta, sarai più fortunato')
		} else {
			localStorage.setItem('ciSaro', ciSaro)
			if (ciSaro) {
				localStorage.setItem('saremoIn', saremoIn)
				localStorage.setItem('confirmed', JSON.stringify(confirmed))
				localStorage.setItem('clusterId', clusterId)
			}
			setCID(clusterId)
			setCanEdit(false)
		}
	}

	const onConfirm = async () => {
		setLoading(true)
		const clusterId = localStorage.getItem('clusterId')
		if (ciSaro) {
			const userPromises = confirmed.map((el) => {
				const payload = {
					name: el.name,
					confirmation: true,
					menu_options: el.selected,
					clusterId
				}
				return startExecuteInsert_users(payload, clusterId)
			})
			await Promise.all(userPromises)
		} else {
			await startExecuteInsert_users(
				{ name: `${name} ${surname}`, confirmation: false, clusterId },
				clusterId
			)
		}
		setLoading(false)
	}

	return (
		<div>
			{canEdit && (
				<div className="info_container">
					<div className="info_uppertitle">{name.toUpperCase()}, SARAI DEI NOSTRI OPPURE NO?</div>
					{ciSaro === undefined && (
						<div className="ricevimento_ciSaroContainer">
							<div className="basic_plain_button" onClick={() => setCiSaro(true)}>
								Ci saro'
							</div>
							<div className="basic_plain_button" onClick={() => setCiSaro(false)}>
								Non ci saro'
							</div>
						</div>
					)}
					{ciSaro === false && <Badge text="Non ci saro'" onClick={() => setCiSaro(undefined)} />}
					{ciSaro && (
						<div>
							<Badge
								text="Ci saro'"
								onClick={() => {
									setCiSaro(undefined)
									setConfirmed([])
								}}
							/>
							<div>
								<NumberButtons
									labels={Array.from(Array(maxPeopleNumber).keys()).map((el) => el + 1)}
									onSelect={handleSaremo}
									label="Saremo in"
									selected={saremoIn}
								/>
							</div>
							{saremoIn && (
								<div>
									<PeopleCards
										allergie={allergieOptions}
										confirmed={confirmed}
										setConfirmed={setConfirmed}
										saremoIn={saremoIn}
									/>
								</div>
							)}
						</div>
					)}

					{(ciSaro === false || saremoIn === confirmed.length) && (
						<button
							className="cake-button menuButton"
							style={{ marginTop: '4rem', width: '12rem' }}
							onClick={isLoading ? undefined : onConfirm}>
							{isLoading ? 'Attendi...' : 'Conferma'}
						</button>
					)}
				</div>
			)}
			{!canEdit && (
				<div className="info_container">
					<div className="info_uppertitle">
						{name.toUpperCase()},
						{ciSaro && " grazie per la conferma, non vediamo l' ora di festeggiare con voi"}
						{!ciSaro && ' ci dispiace che non sarai dei nostri, alla prossima!'}
					</div>
					<button
						className="cake-button menuButton"
						style={{ marginTop: '4rem', width: '12rem', margin: 'auto' }}
						onClick={() => setCanEdit(true)}>
						Modifica
					</button>
				</div>
			)}
		</div>
	)
}

export default Ricevimento
