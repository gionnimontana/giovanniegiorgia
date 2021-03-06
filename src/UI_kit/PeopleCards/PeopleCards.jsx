import React from 'react'
import Badge from '../Badge/Badge'
import PeopleCard from '../PeopleCard/PeopleCard'
import './PeopleCards.css'

const PeopleCards = (p) => {
	const onConfirm = (v) => {
		p.setConfirmed([...p.confirmed, v])
	}

	const removeIndex = (i) => () => {
		const newPayload = p.confirmed.filter((el, ind) => ind !== i)
		p.setConfirmed(newPayload)
	}

	const allPeopleDone = p.saremoIn === p.confirmed.length

	return (
		<div>
			{p.confirmed.map((el, i) => (
				<div className="peoplecards_badgecontainer" key={i}>
					<Badge text={`${el.name}: ${el.selected}`} onClick={removeIndex(i)} />
				</div>
			))}
			{!allPeopleDone && (
				<PeopleCard
					allergie={p.allergie}
					onConfirm={onConfirm}
					targetNumber={p.confirmed.length + 1}
				/>
			)}
		</div>
	)
}

export default PeopleCards
