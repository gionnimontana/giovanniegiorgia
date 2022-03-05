import React, { useEffect, useState } from 'react'
import Badge from '../UI_kit/Badge/Badge'
import { executeInsert_users } from '../Service/graphql'
import './Ricevimento.css'
import NumberButtons from '../UI_kit/NumberButtons/NumberButtons'
import PeopleCards from '../UI_kit/PeopleCards/PeopleCards'

const maxPeopleNumber = 8
const allergieOptions = [
    'Mangio tutto',
    'Menu` bambini',
    'Infante (0-2 anni)',
    'Vegetariano',
    'Vegano',
    'Celiaco',
    'Non mangio'
]

const Ricevimento = () => {
    const [ciSaro, setCiSaro] = useState(undefined)
    const [saremoIn, setSaremoIn] = useState(undefined)
    const [confirmed, setConfirmed] = useState([])

    useEffect(() => {
        console.log('ciSaro', ciSaro)
        console.log('saremo in', saremoIn)
    })

    async function startExecuteInsert_users(usersArray) {
        const { errors, data } = await executeInsert_users(usersArray);
        if (errors) {
          console.error(errors);
        }
        console.log(data);
    }

    const nameObj = localStorage.getItem('user')
    const name = JSON.parse(nameObj).name

    return (
        <div>
        <div className="info_container">
            <div className="info_uppertitle">{name.toUpperCase()}, SARAI DEI NOSTRI OPPURE NO?</div>
            {ciSaro === undefined && <div className="ricevimento_ciSaroContainer">
                <div className="basic_plain_button" onClick={() => setCiSaro(true)}>Ci saro'</div>
                <div className="basic_plain_button" onClick={() => setCiSaro(false)}>Non ci saro'</div>
            </div>}
            {ciSaro === false && <Badge text="Non ci saro'" onClick={() => setCiSaro(undefined)}/>}         
            {ciSaro && (
                <div>
                    <Badge text="Ci saro'" onClick={() => setCiSaro(undefined)}/>
                    <div>
                        <NumberButtons 
                            labels={Array.from(Array(maxPeopleNumber).keys()).map(el => el + 1)} 
                            onSelect={(e) => setSaremoIn(e)}
                            query="In quanti sarete?"
                            label="Saremo in"
                            selected={saremoIn}
                        />
                    </div>
                    {saremoIn && <div>
                        <PeopleCards 
                            allergie={allergieOptions}
                            confirmed={confirmed}
                            setConfirmed={setConfirmed}
                            saremoIn={saremoIn}
                        />
                    </div>}
                </div>
            )}

            {/* <button onClick={() => startExecuteInsert_users([
                {name: "Giancarlo Malgioglio", confirmation: true}
            ])}>GENERATE USER</button> */}


            {saremoIn === confirmed.length && (
                <button className="cake-button menuButton">Conferma Partecipazione</button>
            )}
        </div>
        </div>
    )
}

export default Ricevimento