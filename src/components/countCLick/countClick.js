import { useState } from "react"

function CountClick(){
   let[value,setValue]= useState(0)

   let decrease=()=>{
    setValue(value-=1)
   }
   let increase=()=>{
    setValue(value+=1)
   }

    return(
        <div style={{ textAlign: "center", padding: 30 }}>
        <button onClick={()=>{decrease()}}>Decrease</button>
        <span style={{ padding: 10 }}>{value}</span>
        <button onClick={()=>{increase()}}>Increase</button>
      </div>
    )
}

export default CountClick