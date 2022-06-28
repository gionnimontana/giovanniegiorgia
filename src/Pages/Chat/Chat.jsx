import { useEffect, useState } from 'react'
import { getComments, writeComment } from '../../Service/graphql'
import { scrollToBottom } from '../../utils'
import Comment from '../../UI_kit/Comment'
import { FlatLoader } from '../../UI_kit/FlatLoader'
import { FullCommentIcon } from '../../UI_kit/Icons'
import Input from '../../UI_kit/Input/Input'
import './Chat.css'

const Chat = (p) => {
    const goMenu = () => p.setView('menu')

	const [loading, setLoading] = useState(true)
	const [sending, setSending] = useState(false)
	const [message, setMessage] = useState()
	const [comments, setComments] = useState([])
	const [resetInput, setResetInput] = useState(0)
	const id = 'all'

	useEffect(() => {
		getData(id)
		const refreshPolling = setInterval(() => getData(id), 8000)
		return () => clearInterval(refreshPolling)
	}, [])

	useEffect(() => {
		if (!loading && comments.length > 1) scrollToBottom('chat_comment_container')
	}, [loading, comments])

	const getData = async (pkgname, silent) => {
		const { errors, data } = await getComments(pkgname)
		if (errors) {
		}
		if (data) {
			setComments(data.comments)
		}
		if (!silent) setLoading(false)
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
		<>
			<div className="chat_main_container">
				<div id="chat_comment_container">
					{loading ? (
						<FlatLoader id="chat_main_loader"/>
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
				</div>
				<div className="chat_input_container">
					<Input
						icon={<FullCommentIcon className="chat_interactions_commentIcon" />}
						label="Scrivi un messaggio:"
						onChange={(e) => setMessage(e.target.value)}
						fw={'true'}
						resetstate={resetInput}
						onKeyPress={onKP}
					/>
					<div className="interactions_senbuttonCase">
						<button
							className="cake-button interactions_sendButton"
							onClick={sendMessage}
							disabled={!message || sending}>
							{sending ? 'Attendi...' : 'Invia'}
						</button>
					</div>
				</div>
			</div>
			<button className="chat-view-button"  onClick={goMenu}>MENU</button>
		</>
	)
}

export default Chat

