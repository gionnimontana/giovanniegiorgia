import React from "react";
import './Menu.style.css';

const Menu = (p) => {

    const sw = (view) => () => setTimeout(() => {
        p.setView(view)
    }, 200);
    return (
        <div>
            <div id="ggLogo">
                <div>Giovanni e Giorgia</div>
                <div>2 Luglio 2022</div>
            </div>
            <div id="columnLayout">
                <button 
                    className="cake-button menuButton" 
                    onClick={sw('info')}
                >
                    Info
                </button>
                <button 
                    className="cake-button menuButton" 
                    onClick={sw('ricevimento')}
                >
                    Ricevimento
                </button>
                <button 
                    className="cake-button menuButton" 
                    onClick={sw('listaNozze')}
                >
                    Lista nozze
                </button>
            </div>
        </div>
    )
}

export default Menu