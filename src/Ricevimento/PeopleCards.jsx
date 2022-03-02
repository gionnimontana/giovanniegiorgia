import React, { useState } from "react";
import Badge from "../UI_kit/Badge/Badge";
import Input from "../UI_kit/Input/Input";
import NumberButtons from "../UI_kit/NumberButtons/NumberButtons";

const PeopleCard = (p) => {
    const [target, setTarget] = useState(undefined)

    const badjes = []

    return (
        <div>
            {badjes.length > 0 && 
               badjes.map(el => (
                    <Badge 
                        text={`${el.label} oo- ${el.selected}`} 
                        onClick={() => undefined}
                    />
               )) 
            }
            {
                true && (
                    <div className="standardBox">
                        <Input label="Nome e cognome:" onChange={(e) => setTarget((t) => ({...t, name: e }))}/>
                        <NumberButtons 
                            labels={p.allergie} 
                            onSelect={(e) => setTarget((t) => ({...t, option: e }))}
                            query="Allergie"
                            label="Allergie:"
                            selected={undefined}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default PeopleCard