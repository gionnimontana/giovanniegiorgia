import { useEffect, useState } from 'react'
import { getComments, writeComment } from '../../../service/graphql'
import Comment from '../../../ui_kit/Comment'
import Input from '../../../ui_kit/Input/Input'
import './Interactions.css'

const Interactions = ({ id }) => {
	const [loading, setLoading] = useState(true)
	const [sending, setSending] = useState(false)
	const [message, setMessage] = useState()
	const [comments, setComments] = useState([])
	const [resetInput, setResetInput] = useState(0)

	useEffect(() => {
		getData(id)
	}, [id])

	const getData = async (pkgname) => {
		const { errors, data } = await getComments(pkgname)
		if (errors) {
		}
		if (data) {
			setComments(data.comments)
		}
		setLoading(false)
	}

	const sendMessage = async () => {
		if (!message) return
		setSending(true)
		const user = JSON.parse(localStorage.getItem('user'))
		const cID = localStorage.getItem('clusterId')
		const { errors } = await writeComment(
			message,
			`${user.name} ${user.surname.charAt(0)}`,
			id,
			cID
		)
		if (errors) {
			alert('Ops, qualcosa è andato storto, ritenta, sarai più fortunato')
		} else {
			getData(id)
			setResetInput((i) => i + 1)
		}
		setSending(false)
	}

	return (
		<div>
			<div className="interactions_commentBox">
				{loading ? (
					<div>Loading...</div>
				) : (
					comments.map((el, i) => (
						<Comment
							key={i}
							id={el.id}
							author={el.author}
							message={el.message}
							clusterId={el.clusterId}
							updateComments={() => getData(id)}
						/>
					))
				)}
				<Input
					label="Lascia un messaggio (Pubblico):"
					onChange={(e) => setMessage(e.target.value)}
					fw={'true'}
					resetState={resetInput}
				/>
				{message && (
					<div className="interactions_senbuttonCase">
						<button
							className="cake-button interactions_sendButton"
							onClick={sendMessage}
							disabled={sending}>
							{sending ? 'Attendi...' : 'Invia'}
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Interactions
