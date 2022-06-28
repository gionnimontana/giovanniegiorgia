import { useState, useEffect } from 'react'
import Info from './Pages/Info/Info'
import ListaNozze from './Pages/ListaNozze/ListaNozze'
import Menu from './Pages/Menu/Menu'
import Login from './Pages/Login/Login'
import Chat from './Pages/Chat/Chat'
import Ricevimento from './Pages/Ricevimento/Ricevimento'
import Page from './UI_kit/Page/Page'
import { slowly } from './utils'
import Background from './UI_kit/Background/Background'

function App() {
	const [currentView, setCurrentView] = useState('login')
	const goBack = () => slowly(() => setCurrentView('menu'))

	useEffect(() => {
		const data = localStorage.getItem('user')
		if (data) setCurrentView('menu')
		else setCurrentView('login')
	}, [])

	return (
		<div>
			<div className="app_main">
				<div>
					{currentView === 'login' && <Login setView={setCurrentView} />}
					{currentView === 'chat' && <Chat setView={setCurrentView} />}
					{currentView === 'menu' && <Menu setView={setCurrentView} />}
					{currentView === 'info' && (
						<Page label="Info" goBack={goBack}>
							<Info />
						</Page>
					)}
					{currentView === 'ricevimento' && (
						<Page label="Ricevimento" goBack={goBack}>
							<Ricevimento />
						</Page>
					)}
					{currentView === 'listaNozze' && (
						<Page label="Lista nozze" goBack={goBack}>
							<ListaNozze />
						</Page>
					)}
				</div>
			</div>
			<Background />
		</div>
	)
}

export default App
