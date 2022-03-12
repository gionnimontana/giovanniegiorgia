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
        const timer = setInterval(() => upDateCounter(), 3000);
        return () => clearInterval(timer);
    }, [])

    const upDateCounter = () => {
        const timeLeft = getTimeLeft(weddingDate)
        setDLeft(timeLeft.days)
        setHLeft(timeLeft.hours)
        setMLeft(timeLeft.minutes)
    }

    const between0n2 = n => n >= 1 && n <= 2
    const iToO = (n) => between0n2(n) ? 'o' : 'i'
    const eToA = (n) => between0n2(n) ? 'a' : 'e'

    return (
        <div className="counter_container">
            <div className="counter_numberBox">
                <div>{dLeft}</div>
                <div className="counter_numberLabel">giorn{iToO(dLeft)}</div>
                <div>{hLeft}</div>
                <div className="counter_numberLabel">or{eToA(hLeft)}</div>
                <div>{mLeft}</div>
                <div className="counter_numberLabel">minut{iToO(mLeft)}</div>
            </div>
            {/* <div className="counter_label">alla cerimonia</div> */}
        </div>
    )
}

export default CountDown