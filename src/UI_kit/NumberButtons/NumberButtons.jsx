import { useState } from 'react'
import Badge from '../Badge/Badge'
import './NumberButtons.css'

const NumberButtons = (p) => {
  const [selected, setSelected] = useState(undefined)
  const buttonArray = Array.from(Array(p.max).keys()).map(el => el + 1)

  const onClick = (el) => {
    setSelected(el)
    p.onSelect(selected)
  }

  return (
    <div className="numberButtons_container">
      {p.label !== undefined && !selected && (
        <div className="numberButtons_label">{p.label}</div>
      )}
      <div className="numberButtons_buttoncontainer">
        {selected === undefined && buttonArray.map(el =>(
          <div 
            key={el}
            className="basic_plain_button numberButtons_button" 
            onClick={() => onClick(el)}
          >
            {el}
          </div>
        ))}
        {selected && (
            <Badge text={`${p.label} ${selected}`} onClick={() => onClick(undefined)}/>
          )}
      </div>
    </div>
  )
}

export default NumberButtons