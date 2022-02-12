import React from 'react'
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel'
import './PaymentOptions.css'

const PayementOptions = (p) => {
    return (
        <div>
            <ExpansionPanel title="Bonifico">
                <div className="payment_option_text">
                    Fai un bonifico a questo iban di un importo a tua scelta, usa come causale quella indicata qui sotto, la utilizzeremo per associare la tua donazione a questo pacchetto
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Iban:</div>
                    <div className="payment_option_value">IT60 Q061 7551 7320 0000 0343 680</div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Info:</div>
                    <div className="payment_option_value">BANCA CARIGE SPA</div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Causale:</div>
                    <div className="payment_option_value">{p.id}</div>
                </div>
            </ExpansionPanel>
        </div>
    )
}

export default PayementOptions