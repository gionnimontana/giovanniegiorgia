import { useState } from 'react';
import './App.css';
import Info from './Info/Info';
import ListaNozze from './ListaNozze/ListaNozze';
import Menu from './Menu/Menu';
import Ricevimento from './Ricevimento/Ricevimento';
import Page from './UI_kit/Page/Page';
import background from "./sfondogeg.png";

function App() {
  const [currentView, setCurrentView] = useState('menu')
  const goBack = () => setTimeout(() => {
    setCurrentView('menu')
  }, 200);

  return (
    <div className="app_main" style={{ backgroundImage: `url(${background})`}}>
      <div>
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
