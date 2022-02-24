import React, { useState } from 'react'
import Badge from '../UI_kit/Badge/Badge'
import { executeInsert_users } from '../Service/graphql'
import './Ricevimento.css'

const Ricevimento = () => {
    const [ciSaro, setCiSaro] = useState(undefined)
    const [saremoIn, setSaremoIn] = useState(undefined)

    async function startExecuteInsert_users(usersArray) {
        const { errors, data } = await executeInsert_users(usersArray);
        if (errors) {
          console.error(errors);
        }
        console.log(data);
    }

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

            <div>Nome:</div>
            <input></input>

            <button onClick={() => startExecuteInsert_users([
                {name: "Giancarlo Malgioglio", confirmation: true}
            ])}>GENERATE USER</button>

        </div>
        </div>
    )
}

export default Ricevimento