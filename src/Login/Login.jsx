import React, { useState } from "react";
import './Login.style.css';
import Input from '../UI_kit/Input/Input'

const Login = (p) => {
    const [name, setName] = useState(undefined)
    const [nameError, setNameError] = useState(undefined)
    const [surname, setSurname] = useState(undefined)
    const [surnameError, setSurnameError] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [passwordError, setPasswordError] = useState(undefined)

    const sw = () => {
        setNameError(undefined)
        setSurnameError(undefined)
        setPasswordError(undefined)

        if (!name) setNameError("non puo' essere vuoto")
        if (!surname) setSurnameError("non puo' essere vuoto")

        if (password !== process.env.REACT_APP_PASSWORD) setPasswordError("Password errata (la trovi nella partecipazione, controlla caratteri maiuscoli e minuscoli)")
        if (!name || !surname || password !== process.env.REACT_APP_PASSWORD) return

        localStorage.setItem('user', JSON.stringify({name, surname}))

        setTimeout(() => {
            p.setView('menu')
        }, 200);
    }

    return (
        <div className="standardBox">
            <div>
                <Input label="Nome:" error={nameError} onChange={(v) => setName(v)}/>
                <Input label="Cognome:" error={surnameError} onChange={(v) => setSurname(v)}/>
                <Input label="Parola d'ordine:" error={passwordError} onChange={(v) => setPassword(v)}/>
                <div id="columnLayout" style={{marginTop: '3rem'}}>
                    <button 
                        className="cake-button menuButton" 
                        onClick={sw}
                    >
                        Accedi
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login