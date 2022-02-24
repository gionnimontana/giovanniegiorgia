import './Input.css'

const Input = (p) => {

  const feCN = p.error ? "input_field_error" : ""
  const leCN = p.error ? "input_label_error" : ""

  return <div className="input_container">
      <div className={`input_label ${leCN}`}>{p.label}</div>
      <input className={`input_field ${feCN}`} onChange={(e) => p.onChange(e.target.value)}></input>
      {p.error && <div className="input_error_label">*{p.error}</div>}
    </div>
}

export default Input