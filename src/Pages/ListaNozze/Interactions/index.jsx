import Input from '../../../ui_kit/Input/Input'
import './Interactions.css'

const Interactions = (p) => {
	return (
		<div>
			<div className="interactions_commentBox">
				<Input label="Nickname" onChange={() => console.log('change')} fullWidth />
				<Input label="Messaggio" onChange={() => console.log('change')} fullWidth />
			</div>
		</div>
	)
}

export default Interactions
