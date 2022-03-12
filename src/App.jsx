import { useState } from 'react'
import Info from './pages/Info/Info'
import ListaNozze from './pages/ListaNozze/ListaNozze'
import Menu from './pages/Menu/Menu'
import Login from './pages/Login/Login'
import Ricevimento from './pages/Ricevimento/Ricevimento'
import Loading from './ui_kit/Loading'
import Page from './ui_kit/Page/Page'
import { slowly } from './utils'

function App() {
	const [currentView, setCurrentView] = useState('loading')
	const goBack = () => slowly(() => setCurrentView('menu'))

	return (
		<div className="app_main">
			<div>
				{currentView === 'loading' && <Loading setView={setCurrentView} />}
				{currentView === 'login' && <Login setView={setCurrentView} />}
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
	)
}

export default App
