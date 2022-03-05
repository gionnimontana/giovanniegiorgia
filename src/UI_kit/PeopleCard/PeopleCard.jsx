import React, { useState } from "react";
import Badge from "../Badge/Badge";
import Input from "../Input/Input";
import NumberButtons from "../NumberButtons/NumberButtons";
import './PeopleCard.css'

const PeopleCard = (p) => {
    const [name, setName] = useState(undefined)
    const [selected, setSelected] = useState(undefined)
    const [rState, setRState] = useState(0)

    const onConfirm = () => {
        p.onConfirm({ name, selected })
        setName(undefined)
        setRState(s => s += 1)
    }

    return (
        <div className="standardBox">
            <div className="peoplecard_header">Partecipante {p.targetNumber}</div>
            <Input label="Nome e cognome:" onChange={(e) => setName(e)} resetState={rState}/>
            <NumberButtons 
                labels={p.allergie} 
                onSelect={(e) => setSelected(e)}
                label="Allergie:"
                selected={selected}
                allowOther={true}
            />
            {name && selected && (
                <div 
                    className="basic_plain_button peoplecard_button"
                    onClick={onConfirm}
                >
                    Conferma partecipante
                </div>
            )}
        </div>
    )
}

export default PeopleCard