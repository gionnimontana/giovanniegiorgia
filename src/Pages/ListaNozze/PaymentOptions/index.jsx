import React from 'react'
import CopyTextCell from '../../../ui_kit/CopyTextCell'
import ExpansionPanel from '../../../ui_kit/ExpansionPanel/ExpansionPanel'
import './PaymentOptions.css'
import sImg from '../../../images/satispayAddress.jpg'
import eImg from '../../../images/btcAddress.png'
import bImg from '../../../images/ethAddress.png'

const PayementOptions = (p) => {
	return (
		<div>
			<ExpansionPanel title="Bonifico">
				<div className="payment_option_text">
					Fai un bonifico a questo iban di un importo a tua scelta, usa come causale quella indicata
					qui sotto, la utilizzeremo per associare la tua donazione a questo pacchetto
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Iban:</div>
					<div className="payment_option_value">
						<CopyTextCell text="IT60 Q061 7551 7320 0000 0343 680" />
					</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Intestato a:</div>
					<div className="payment_option_value">Giovanni Montanari</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Info:</div>
					<div className="payment_option_value">Banca Carige Spa</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Causale:</div>
					<div className="payment_option_value">
						<CopyTextCell text={p.id} />
					</div>
				</div>
			</ExpansionPanel>
			<div style={{ height: '0.5rem' }} />
			<ExpansionPanel title="Satispay">
				<div className="payment_option_text">
					Se sei registrato con l'applicazione <a href="https://www.satispay.com/">Satispay</a> e
					hai Giovanni tra i contatti puoi inviare un importo a tua scelta, usa come commento il
					codice indicata qui sotto, lo utilizzeremo per associare la tua donazione a questo
					pacchetto
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Utente:</div>
					<div className="payment_option_value">Giovanni Montanari</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Commento:</div>
					<div className="payment_option_value">
						<CopyTextCell text={p.id} />
					</div>
				</div>
				<div className="payment_option_img_box">
					<img alt="satispay_address" src={sImg} id="payment_option_satispay_img" />
				</div>
			</ExpansionPanel>
			<div style={{ height: '0.5rem' }} />
			<ExpansionPanel title="Criptovalute (BTC o ETH)">
				<div className="payment_option_text">
					Vuoi donare in crypto? nessun problema! invia una somma di tua scelta a uno di questi
					indirizzi. Ricordati di mandare un messaggio con il codice pacchetto che trovi qui sotto
					insieme all'id della transazione
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Codice pacchetto:</div>
					<div className="payment_option_value">
						<CopyTextCell text={p.id} />
					</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Indirizzo Bitcoin:</div>
					<div style={{ width: '22rem' }} className="payment_option_value">
						<CopyTextCell text="bc1qaff4y2c69ngdjnae4cmny4vn3urqm8k4s8lxfp" />
					</div>
					<div className="payment_option_img_box">
						<img alt="bitcoin_address" src={bImg} id="payment_option_btc_img" />
					</div>
				</div>
				<div className="payment_option_line">
					<div className="payment_option_field">Indirizzo Ethereum:</div>
					<div style={{ width: '22rem' }} className="payment_option_value">
						<CopyTextCell text="0x5419568535B4D8Cbd26BbdA69fb5D6E15c79617d" />
					</div>
					<div className="payment_option_img_box">
						<img alt="ethereum_address" src={eImg} id="payment_option_eth_img" />
					</div>
				</div>
			</ExpansionPanel>
		</div>
	)
}

export default PayementOptions
