import './Badge.css'

const Badge = (p) => {
    return (
        <div className="badge_container" onClick={p.onClick}>
            <div className="badge_text">{p.text}</div>
            <i className="fa fa-times badge_icon"></i>
        </div>
    )
}

export default Badge