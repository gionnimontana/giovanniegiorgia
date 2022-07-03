import React from 'react'
import './Menu.style.css'
import background from '../../images/g&g_cover.jpeg'
import CountDown from '../../UI_kit/CountDown'
import { slowly } from '../../utils'

const Menu = (p) => {
	const sw = (view) => () => slowly(() => p.setView(view))
	const logout = () => {
		localStorage.removeItem('user')
		window.location.reload()
	}

	return (
		<>
			<div className="standardBox" id="menu_main_container">
				<div className="ggCoverContainer">
					<img src={background} className="menu_ggCover" alt="g&g vieste" />
				</div>
				<div className="menu_body_container">
					<div className="menu_ggLogo">
						<div>Giovanni e Giorgia</div>
						<div>2 Luglio 2022</div>
					</div>
					{/* <CountDown /> */}
					<div className="menu_buttonsContainer">
						<button className="cake-button bigButton" onClick={sw('chat')}>
							Chat
						</button>
						{/* <button className="cake-button bigButton" onClick={sw('info')}>
							Info
						</button> */}
						{/* <button className="cake-button bigButton" onClick={sw('ricevimento')}>
							Ricevimento
						</button> */}
						<button className="cake-button bigButton" onClick={sw('listaNozze')}>
							Lista nozze
						</button>
					</div>
					<div className="menu_logout" onClick={logout}>
						Logout
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
