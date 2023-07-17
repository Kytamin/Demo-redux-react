import { useState } from "react";

function ColorBg() {
    const [color, setColor] = useState("black")
    setTimeout(() => {
        setColor("red")
    }, 5000);


    return (
        <div>
            <div
                style={{
                    backgroundColor: color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'
                }}
            />
        </div>
    );
}

export default ColorBg