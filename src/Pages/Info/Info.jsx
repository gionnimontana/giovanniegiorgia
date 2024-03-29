import React from 'react'
import GMapsButton from '../../UI_kit/GMapsButton'
import './Info.css'

const Info = () => {
	return (
		<div className="info_container">
			<div className="info_uppertitle">Ci sposiamo!</div>
			<div className="info_ImageLargeContainer">
				<img alt="foto_chiesa" className="info_ImageLarge" src="/img/chiesa-tremezzo-min.jpeg" />
			</div>
			<div className="info_marginTop info_italic">CERIMONIA</div>
			<div className="info_marginTop">Chiesa San Lorenzo</div>
			<GMapsButton
				text="Piazza Sagrado San Lorenzo 2"
				address="https://goo.gl/maps/ABxo8tzCBPPFV5Ee9"
			/>
			<div>Tremezzo, CO</div>
			<div>Ore 15:30</div>
			<br></br>
			<div className="info_nocenter">
				Vicino alla chiesa abbiamo riservato 2 zone parcheggio da 25 posti auto ciascuna:
			</div>
			<div className="info_ImageParkingContainer">
				<img alt="parcheggi" className="info_ImageParking" src="/img/parcheggi.jpg" />
			</div >
			<div className="info_parkingButtonContainer">
				<GMapsButton
					text="Parcheggio aperto"
					address="https://goo.gl/maps/1juCyLJRAJBtmmbb8"
				/>
				<GMapsButton
					text="Parcheggio coperto"
					address="https://goo.gl/maps/BNbTjoB99Eu9U8Gm7"
				/>
			</div>
			<div className="info_ImageLargeContainer">
				<img alt="foto_villa" className="info_ImageLarge" src="/img/monastero-pax-min.jpeg" />
			</div>
			<div className="info_marginTop info_italic">RICEVIMENTO</div>
			<div className="info_marginTop">Villa Monastero Pax</div>
			<GMapsButton
				text="Via Antica Regina, Lenno CO"
				address="https://goo.gl/maps/jcEfqDy7ixkRxzDE6"
			/>
			<div className="info_nocenter">
				Per raggiungere il parcheggio e l'ingresso della location seguire le frecce gialle lungo il percorso:
			</div>
			<div className="info_ImageParkingContainer">
				<img alt="parcheggi" className="info_ImageParking" src="/img/freccia_indicazioni_stradali.jpg" />
			</div >
			<div style={{ height: '2rem' }}></div>
			<div className="info_marginTop info_italic">CONSIGLI UTILI</div>
			<div className="info_marginTop info_nocenter">
				<strong>•</strong> I parcheggi sono limitati, vi chiediamo di utilizzare il minor numero di
				macchine possibile
			</div>
			<div className="info_nocenter">
				<strong>•</strong> Tacchi bassi e/o scarpe basse di ricambio per le donne: pavimentazione
				prevalente di ghiaia e ciottoli
			</div>
		</div>
	)
}

export default Info
