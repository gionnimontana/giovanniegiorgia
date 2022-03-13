import Card from '../../ui_kit/Card/Card'
import PayementOptions from './PaymentOptions'
import Interactions from './Interactions'
import elements from './pacchettiNozze'
import { useEffect, useState } from 'react'
import { getCommentsNumber } from '../../service/graphql'
import { FullHeartIcon } from '../../ui_kit/Icons'
import './ListaNozze.css'

const ListaNozze = () => {
	const [loading, setLoading] = useState(true)
	const [commentMap, setCommentMap] = useState({})

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		setLoading(true)
		const { errors, data } = await getCommentsNumber()
		if (errors) {
			console.log('errors', errors)
		}
		if (data) {
			const cmap = data.comments.reduce((acc, el) => {
				if (acc[el.pkgname]) acc[el.pkgname] = acc[el.pkgname] += 1
				else acc[el.pkgname] = 1
				return acc
			}, {})
			setCommentMap(cmap)
		}
		setLoading(false)
	}

	const eToA = (n) => (n === 1 ? 'a' : 'e')

	return (
		<div>
			{elements.map((el, index) => (
				<Card
					key={index}
					id={el.id}
					img={el.img}
					title={el.title}
					text={el.text}
					purchased={el.purchased}
					comments={loading ? '...' : commentMap[el.id]}
					callBack={() => getData()}>
					<div className="listanozze_purchasedMessage">
						<FullHeartIcon />
						<div className="listanozze_purchasedLabel">
							Questo Pacchetto è stato regalato da {el.purchased} person{eToA(el.purchased)}
						</div>
					</div>
					<PayementOptions id={el.id} />
					<Interactions id={el.id} />
				</Card>
			))}
		</div>
	)
}

export default ListaNozze
