import { useEffect, useState } from 'react'
import { deleteComment } from '../../Service/graphql'
import './Comment.css'

const Comment = ({ id, author, message, clusterId, updateComments }) => {
	const [deleting, setDeleting] = useState(false)
	const [sameAuthor, setSameAuthor] = useState(false)

	useEffect(() => {
		const cID = localStorage.getItem('clusterId')
		if (cID === clusterId) {
			setSameAuthor(true)
		} else setSameAuthor(false)
	}, [clusterId])

	const onCrossClick = async () => {
		if (deleting) return
		setDeleting(true)
		const { errors } = await deleteComment(id)
		if (errors) {
			alert('Ops, qualcosa è andato storto, ritenta, sarai più fortunato')
		} else {
			updateComments()
		}
		setDeleting(false)
	}

	return (
		<div
			className="comment_box"
			style={{
				background: sameAuthor ? 'var(--colorShadeD)' : 'white'
			}}>
			<div className="comment_header">
				<div className="comment_author">{author}:</div>
				{sameAuthor && (
					<div className="comment_cross" onClick={onCrossClick}>
						x
					</div>
				)}
			</div>
			<div className="comment_message">{message}</div>
		</div>
	)
}

export default Comment
