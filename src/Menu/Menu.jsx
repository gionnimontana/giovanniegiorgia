import React from "react";
import './Menu.style.css';
import background from "../g&g_cover.jpeg";
import CountDown from '../UI_kit/CountDown'

const Menu = (p) => {
    const sw = (view) => () => setTimeout(() => {
        p.setView(view)
    }, 200);

    return (
        <div >
            <div className="standardBox" id="menu_main_container">
                <div className="ggCoverContainer">
                    <img src={background} className="ggCover"/>
                </div>
                <div className="menu_body_container">
                    <div id="ggLogo">
                        <div>Giovanni e Giorgia</div>
                        <div>2 Luglio 2022</div>
                    </div>
                    <CountDown />
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
            </div>
        </div>
    )
}

export default Menu