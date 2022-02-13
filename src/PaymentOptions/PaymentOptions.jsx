import React from 'react'
import CopyTextCell from '../UI_kit/CopyTextCell'
import ExpansionPanel from '../UI_kit/ExpansionPanel/ExpansionPanel'
import './PaymentOptions.css'
import s from './satispay_giovanni_montanari.jpg'

const PayementOptions = (p) => {
    return (
        <div>
            <ExpansionPanel title="Bonifico">
                <div className="payment_option_text">
                    Fai un bonifico a questo iban di un importo a tua scelta, usa come causale quella indicata qui sotto, la utilizzeremo per associare la tua donazione a questo pacchetto
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Iban:</div>
                    <div className="payment_option_value">
                        <CopyTextCell text="IT60 Q061 7551 7320 0000 0343 680"/>
                    </div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Info:</div>
                    <div className="payment_option_value">Banca Carige Spa</div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Causale:</div>
                    <div className="payment_option_value">
                        <CopyTextCell text={p.id}/>
                    </div>
                </div>
            </ExpansionPanel>
            <div style={{height: "0.5rem"}}/>
            <ExpansionPanel title="Satispay">
                <div className="payment_option_text">
                    Se sei registrato con l'applicazione <a href="https://www.satispay.com/">Satispay</a> e hai Giovanni tra i contatti puoi inviare un importo a tua scelta, usa come commento il codice indicata qui sotto, lo utilizzeremo per associare la tua donazione a questo pacchetto
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Utente:</div>
                    <div className="payment_option_value">
                        Giovanni Montanari
                    </div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Commento:</div>
                    <div className="payment_option_value">
                        <CopyTextCell text={p.id}/>
                    </div>
                </div>
                <div className="payment_option_img_box">
                    <img src={s} id="payment_option_satispay_img"/>
                </div>
            </ExpansionPanel>
            <div style={{height: "0.5rem"}}/>
            <ExpansionPanel title="Criptovalute (BTC o ETH)">
                <div className="payment_option_text">
                    Sei un vero 
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Utente:</div>
                    <div className="payment_option_value">
                        Giovanni Montanari
                    </div>
                </div>
                <div className="payment_option_line">
                    <div className="payment_option_field">Commento:</div>
                    <div className="payment_option_value">
                        <CopyTextCell text={p.id}/>
                    </div>
                </div>
                <div className="payment_option_img_box">
                    <img src={s} id="payment_option_satispay_img"/>
                </div>
            </ExpansionPanel>
        </div>
    )
}

export default PayementOptions