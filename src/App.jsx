import { useState } from 'react';
import Info from './Info/Info';
import ListaNozze from './ListaNozze/ListaNozze';
import Menu from './Menu/Menu';
import Login from './Login/Login';
import Loading from './Loading/Loading';
import Ricevimento from './Ricevimento/Ricevimento';
import Page from './UI_kit/Page/Page';

function App() {
  const [currentView, setCurrentView] = useState('loading')
  const goBack = () => setTimeout(() => {
    setCurrentView('menu')
  }, 200);

  return (
    <div className="app_main">
      <div>
        {currentView === 'loading' && <Loading setView={setCurrentView}/>}
        {currentView === 'login' && <Login setView={setCurrentView}/>}
        {currentView === 'menu' && <Menu setView={setCurrentView}/>}
        {currentView === 'info' && (
          <Page label="Info" goBack={goBack} >
            <Info/>
          </Page>
        )}
        {currentView === 'ricevimento' && (
          <Page label="Ricevimento" goBack={goBack} >
            <Ricevimento/>
          </Page>
        )}
        {currentView === 'listaNozze' && (
          <Page label="Lista nozze" goBack={goBack} >
            <ListaNozze/>
          </Page>
        )}
      </div>
    </div>
  );
}

export default App;
