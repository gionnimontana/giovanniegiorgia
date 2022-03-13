import { useState } from 'react'
import Badge from '../Badge/Badge'
import Input from '../Input/Input'
import './NumberButtons.css'

const NumberButtons = ({onSelect, selected, label, labels, allowOther}) => {
  const [otherOption, setOtherOption] = useState(false)

  const onClick = (el) => {
    onSelect(el)
  }

  return (
    <div className="numberButtons_container">
      {label !== undefined && !selected && !otherOption && (
        <div className="numberButtons_label">{label}</div>
      )}
      <div className="numberButtons_buttoncontainer">
        {selected === undefined && (
          <>
            {!otherOption && labels.map(el =>(
              <div 
                key={el}
                className="basic_plain_button numberButtons_button" 
                onClick={() => onClick(el)}
              >
                {el}
              </div>
            ))}
            {allowOther && !otherOption && (
              <div 
                className="basic_plain_button numberButtons_button" 
                onClick={() => setOtherOption(true)}
              >
                Altro
              </div>
              )}
            </>
        )}
      </div>
      {otherOption && (
        <div>
          <Badge text={`Altro:`} onClick={() => {
            onClick(undefined)
            setOtherOption(false)
          }}/>
          <Input
            onChange={(e) => onSelect(e)}
          />
        </div>

      )}
      {selected && !otherOption && (
            <Badge text={`${label} ${selected}`} onClick={() => onClick(undefined)}/>
          )}
    </div>
  )
}

export default NumberButtons