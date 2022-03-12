import React from "react";
import './Page.style.css'

const Page = (p) => {
    return (
        <div id="page_container">
            <div id="page_header" className="standardBox">
                <button 
                    id="page_backbutton"
                    className="cake-button"
                    onClick={p.goBack}
                >
                    {'<'}
                </button>
                <div id="page_label">
                    <span
                        id="page_labelnavigation"
                        onClick={p.goBack}
                    >
                        Home / {' '}
                    </span>
                    {p.label}
                </div>
            </div>
            <div id="page_content" className="standardBox">
                {p.children}
            </div>
        </div>
    )
}

export default Page