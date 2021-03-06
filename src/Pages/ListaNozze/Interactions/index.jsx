import { useEffect, useState } from 'react'
import { getComments, writeComment } from '../../../Service/graphql'
import Comment from '../../../UI_kit/Comment'
import { FlatLoader } from '../../../UI_kit/FlatLoader'
import { FullCommentIcon } from '../../../UI_kit/Icons'
import Input from '../../../UI_kit/Input/Input'
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

	const onKP = (e) => {
		if (e.charCode === 13) sendMessage()
	}

	return (
		<div>
			<div className="interactions_commentBox">
				<FullCommentIcon className="interactions_commentIcon" />
				{loading ? (
					<FlatLoader />
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
					resetstate={resetInput}
					onKeyPress={onKP}
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
