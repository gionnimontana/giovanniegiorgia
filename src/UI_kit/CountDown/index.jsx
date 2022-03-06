import { useEffect, useState } from "react"
import { getTimeLeft } from "./utils"
import './CountDown.css'

const CountDown = () => {
    const [dLeft, setDLeft] = useState(999)
    const [hLeft, setHLeft] = useState(99)
    const [mLeft, setMLeft] = useState(99)

    const weddingDate = new Date(
        new Date("Sat, 2 July 2022 15:30:00").toLocaleString("en-US", {timeZone: "Europe/Rome"})
    );

    useEffect(() => {
        upDateCounter()
        const timer = setTimeout(() => upDateCounter(), 10000);
        return () => clearTimeout(timer);
    }, [])

    const upDateCounter = () => {
        const timeLeft = getTimeLeft(weddingDate)
        setDLeft(timeLeft.days)
        setHLeft(timeLeft.hours)
        setMLeft(timeLeft.minutes)
    }

    return (
        <div className="counter_container">
            <div className="counter_numberBox">
                <div>{dLeft}</div>
                <div className="counter_numberLabel">giorni</div>
                <div>{hLeft}</div>
                <div className="counter_numberLabel">ore</div>
                <div>{mLeft}</div>
                <div className="counter_numberLabel">minuti</div>
            </div>
            <div className="counter_label">alla cerimonia</div>
        </div>
    )
}

export default CountDown