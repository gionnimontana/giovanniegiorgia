import { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Page from './Page/Page';

function App() {
  const [currentView, setCurrentView] = useState('menu')
  const goBack = () => setTimeout(() => {
    setCurrentView('menu')
  }, 200);
  return (
    <div>
      {currentView === 'menu' && <Menu setView={setCurrentView}/>}
      {currentView === 'info' && (
        <Page label="Info" goBack={goBack} >
          <div> Page Content</div>
        </Page>
      )}
      {currentView === 'ricevimento' && (
        <Page label="Ricevimento" goBack={goBack} >
          <div> Page Content</div>
        </Page>
      )}
      {currentView === 'listaNozze' && (
        <Page label="Lista nozze" goBack={goBack} >
          <div> Page Content</div>
        </Page>
      )}

    </div>
  );
}

export default App;
