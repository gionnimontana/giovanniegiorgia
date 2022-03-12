import React, { useState} from 'react';
import { genRandomStr } from '../../utils'
import './CopyTextCell.css';

const CopyTextCell = ({text}) => {
  const [buttonIcon, setButtonIcon] = useState('copy')
  const textId = genRandomStr()
  const containerId = `c-${textId}`

  const copyFunction = () => {
    const copyText = document.getElementById(textId);
    if (copyText) {
      const txt = copyText.innerText
      navigator.clipboard.writeText(txt)
      setButtonIcon('check')
      setTimeout(() => setButtonIcon('copy'), 1500)
    }
  }


  return (
    <div id={containerId} className="CTC_container">
       <div className="CTC_copyButton" onClick={copyFunction}>
        <i className={`fa fa-${buttonIcon} CTC_copyIcon`}></i>
      </div>
      <div id={textId}>{text}</div>
    </div>
  );
};

export default CopyTextCell;
