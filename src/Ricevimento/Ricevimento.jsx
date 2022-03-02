import React, { useEffect, useState } from 'react'
import Badge from '../UI_kit/Badge/Badge'
import { executeInsert_users } from '../Service/graphql'
import './Ricevimento.css'
import NumberButtons from '../UI_kit/NumberButtons/NumberButtons'
import PeopleCard from './PeopleCards'

const Ricevimento = () => {
    const [ciSaro, setCiSaro] = useState(undefined)
    const [saremoIn, setSaremoIn] = useState(undefined)
    const [allergie, setAllergie] = useState(undefined)

    useEffect(() => {
        console.log('ciSaro', ciSaro)
        console.log('saremo in', saremoIn)
        console.log('allergie', allergie)
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

    return (
        <div>
        <div className="info_container">
            <div className="info_uppertitle">{name.toUpperCase()}, SARAI DEI NOSTRI OPPURE NO?</div>
            {ciSaro === undefined && <div className="ricevimento_ciSaroContainer">
                <div className="basic_plain_button" onClick={() => setCiSaro(true)}>Ci saro'</div>
                <div className="basic_plain_button" onClick={() => setCiSaro(false)}>Non ci saro'</div>
            </div>}
            {ciSaro === false && <div style={{marginTop: '2rem'}}>
                <Badge text="Non ci saro'" onClick={() => setCiSaro(undefined)}/>
            </div>}         
            {ciSaro && (
                <div>
                    <div style={{marginTop: '2rem'}}>
                        <Badge text="Ci saro'" onClick={() => setCiSaro(undefined)}/>
                    </div>
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
                        <PeopleCard allergie={allergieOptions}/>
                    </div>}
                </div>
            )}

            {/* <button onClick={() => startExecuteInsert_users([
                {name: "Giancarlo Malgioglio", confirmation: true}
            ])}>GENERATE USER</button> */}

        </div>
        </div>
    )
}

export default Ricevimento