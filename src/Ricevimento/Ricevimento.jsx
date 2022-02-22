import React, { useState } from 'react'
import Badge from '../UI_kit/Badge/Badge'
import './Ricevimento.css'

const Ricevimento = () => {
    const [ciSaro, setCiSaro] = useState(undefined)

    return (
        <div>
        <div className="info_container">
            <div className="info_uppertitle">SARAI DEI NOSTRI OPPURE NO?</div>
            {ciSaro === undefined && <div className="ricevimento_ciSaroContainer">
                <div className="ricevimento_ciSaroButton" onClick={() => setCiSaro(true)}>Ci saro'</div>
                <div className="ricevimento_ciSaroButton" onClick={() => setCiSaro(false)}>Non ci saro'</div>
            </div>}
            {ciSaro === false && <div style={{marginTop: '2rem'}}>
                <Badge text="Non ci saro'" onClick={() => setCiSaro(undefined)}/>
            </div>}         
            {ciSaro && (
                <div style={{marginTop: '2rem'}}>
                    <Badge text="Ci saro'" onClick={() => setCiSaro(undefined)}/>
                </div>
            )}

            <div>Commenti:</div>
            <input></input>

            <div className="info_marginTop info_italic">CERIMONIA</div>
            <div className="info_marginTop">Chiesa San Lorenzo</div>
            <div className="info_marginTop info_italic">CONSIGLI UTILI</div>  
            <div className="info_marginTop info_nocenter"><strong>•</strong> I parcheggi sono limitati, vi chiediamo di utilizzare il minor numero di macchine possibile</div> 
            <div className="info_nocenter"><strong>•</strong> Tacchi bassi e/o scarpe basse di ricambio per le donne: pavimentazione prevalente di ghiaia e ciottoli</div>   
        </div>
        </div>
    )
}

export default Ricevimento