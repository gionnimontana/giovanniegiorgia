import React from 'react'
import './Menu.style.css'
import background from '../../images/g&g_cover.jpeg'
import CountDown from '../../ui_kit/CountDown'
import { slowly } from '../../utils'

const Menu = (p) => {
	const sw = (view) => () => slowly(() => p.setView(view))
	const logout = () => {
		localStorage.removeItem('user')
		window.location.reload()
	}

	return (
		<div>
			<div className="standardBox" id="menu_main_container">
				<div className="ggCoverContainer">
					<img src={background} className="ggCover" alt="g&g vieste"/>
				</div>
				<div className="menu_body_container">
					<div id="ggLogo">
						<div>Giovanni e Giorgia</div>
						<div>2 Luglio 2022</div>
					</div>
					<CountDown />
					<div id="columnLayout">
						<button className="cake-button menuButton" onClick={sw('info')}>
							Info
						</button>
						<button className="cake-button menuButton" onClick={sw('ricevimento')}>
							Ricevimento
						</button>
						<button className="cake-button menuButton" onClick={sw('listaNozze')}>
							Lista nozze
						</button>
					</div>
					<div className="menu_logout" onClick={logout}>
						Logout
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
