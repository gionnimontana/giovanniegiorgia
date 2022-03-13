import './Comment.css'

const Comment = ({author, message}) => {
    return (
        <div className="comment_box">
            <div className="comment_author">{author}:</div>
            <div className="comment_message">{message}</div>
        </div>
    )
}

export default Comment