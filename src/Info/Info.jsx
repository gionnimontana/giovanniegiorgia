import React from "react";
import './Info.css'

const Info = () => {
    return (
        <div className="info_container">
            <div className="info_uppertitle">Ci sposiamo!</div>
            <div className="info_ImageLargeContainer">
                <img className="info_ImageLarge" src="https://www.comoeilsuolago.it/img/chiesa-tremezzo.jpg"/>
            </div>
            <div className="info_marginTop info_italic">CHIESA</div>
            <div className="info_marginTop">San Lorenzo</div>
            <div>Piazza Sagrado San Lorenzo 2</div>
            <div>Tremezzo CO</div> 
            <div className="info_marginTop info_italic">RICEVIMENTO</div>
            <div className="info_marginTop">Villa Monastero Pax</div>
            <div>Via Antica Regina</div>
            <div>Lenno CO</div>   
            <div className="info_marginTop info_italic">CONSIGLI UTILI</div>  
            <div className="info_marginTop info_nocenter">I parcheggi sono limitati, vi chiediamo di utilizzare il minor numero di macchine possibile</div> 
            <div className="info_nocenter">Tacchi bassi e/o scarpe basse di ricambio per le donne: pavimentazione prevalente di ghiaia e ciottoli</div>   
        </div>
    )
}

export default Info