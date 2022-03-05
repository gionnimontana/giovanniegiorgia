import { useEffect } from 'react';
import './Input.css'

const Input = (p) => {

  const feCN = p.error ? "input_field_error" : ""
  const leCN = p.error ? "input_label_error" : ""

  const id = (Math.random() + 1).toString(36).substring(7);

  useEffect(() => {
    document.getElementById(id).value = ''
  }, [p.resetState])

  return <div className="input_container">
      <div className={`input_label ${leCN}`}>{p.label}</div>
      <input id={id} className={`input_field ${feCN}`} onChange={(e) => p.onChange(e.target.value)}></input>
      {p.error && <div className="input_error_label">*{p.error}</div>}
    </div>
}

export default Input