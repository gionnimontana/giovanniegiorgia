import { useState } from 'react'
import Badge from '../Badge/Badge'
import './NumberButtons.css'

const NumberButtons = ({onSelect, selected, label, labels}) => {

  const onClick = (el) => {
    onSelect(el)
  }

  return (
    <div className="numberButtons_container">
      {label !== undefined && !selected && (
        <div className="numberButtons_label">{label}</div>
      )}
      <div className="numberButtons_buttoncontainer">
        {selected === undefined && labels.map(el =>(
          <div 
            key={el}
            className="basic_plain_button numberButtons_button" 
            onClick={() => onClick(el)}
          >
            {el}
          </div>
        ))}
        {selected && (
            <Badge text={`${label} ${selected}`} onClick={() => onClick(undefined)}/>
          )}
      </div>
    </div>
  )
}

export default NumberButtons