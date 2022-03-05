import React, { useState } from "react";
import Badge from "../Badge/Badge";
import Input from "../Input/Input";
import NumberButtons from "../NumberButtons/NumberButtons";
import './PeopleCard.css'

const PeopleCard = (p) => {
    const [name, setName] = useState(undefined)
    const [selected, setSelected] = useState(undefined)

    const onConfirm = () => {
        p.onConfirm({ name, selected })
    }

    return (
        <div className="standardBox">
            <Input label="Nome e cognome:" onChange={(e) => setName(e)}/>
            <NumberButtons 
                labels={p.allergie} 
                onSelect={(e) => setSelected(e)}
                query="Allergie"
                label="Allergie:"
                selected={selected}
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