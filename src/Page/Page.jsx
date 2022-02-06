import React from "react";
import './Page.style.css'

const Page = (p) => {
    return (
        <div id="pageContainer">
            <div id="pageHeader" className="standardBox">
                <button 
                    id="backButton"
                    className="cake-button"
                    onClick={p.goBack}
                >
                    {'<'}
                </button>
                <div id="pageLabel">{p.label}</div>
            </div>
            <div id="pageContent" className="standardBox">
                {p.children}
            </div>
        </div>
    )
}

export default Page