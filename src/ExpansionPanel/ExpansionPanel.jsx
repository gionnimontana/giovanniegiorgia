import React, { useState } from 'react'
import './ExpansionPanel.css'

const ExpansionPanel = (p) => {
    const [open, setOpen] = useState(false)

    const onClick = () => setOpen(!open)

    const cl = "expansion_panel_collapsible"

    return (
        <div>
            <button 
                onClick={onClick}
                type="button" 
                className={open ? `${cl} expansion_panel_active` : cl}
            >
                {p.title}
            </button>
            <div 
                className="expansion_panel_content"
                style={{display: open ? 'block' : 'none'}}
            >
                {p.children}
            </div>
        </div>
    )
}

export default ExpansionPanel