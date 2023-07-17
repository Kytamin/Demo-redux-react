import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";

function CountDown() {
    const [timer, setTimer] = useState({
        minute:0,
        seconds: 0
    })

    const [isStart, setIsStart] = useState(false)

    const handleChange = (e) => {
        setTimer({...timer, [e.target.name]: e.target.value})
    }

    const start = () => {
        setIsStart(true)
    }

    useEffect(() => {
        if (isStart) {
            let countTimer = setInterval(() => {
                let newSecond;
                let currentMinute = timer.minute
                if (timer.seconds > 0) {
                    newSecond = Number(timer.seconds) - 1;
                } else {
                    if (currentMinute == 0) {
                        newSecond = 0;
                        setIsStart(false);
                        alert('Time Out')
                    } else {
                        newSecond = "59";
                        currentMinute = currentMinute - 1
                    }
                    if(currentMinute<0){
                        currentMinute=(currentMinute * -1)-2
                    }
                }

                setTimer({
                    minute: currentMinute,
                    seconds: newSecond
                })

                clearInterval(countTimer)
            }, 1000)

        }
    }, [isStart, timer]);

    return (
        <>
        <TextField type="number" min="0" oninput="validity.valid||(value='');" id="outlined-basic" value={timer.minute} onChange={handleChange} name="minute" label="Minute" variant="outlined" />
        <TextField type="number" min="0" oninput="validity.valid||(value='');" id="outlined-basic" value={timer.seconds} onChange={handleChange} name="seconds" label="Seconds" variant="outlined" />
        <Button variant="outlined" onClick={start}>Start</Button>
        <h2>{timer.minute} p : {timer.seconds} s</h2>
    </>
    )
}

export default CountDown