import React, { useEffect, useState} from 'react';
import './CopyTextCell.css';

const CopyTextCell = ({text}) => {
  const [buttonIcon, setButtonIcon] = useState('copy')
  const textId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
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
