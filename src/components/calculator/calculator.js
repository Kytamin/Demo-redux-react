import { Input } from "@mui/material"
import { useState } from "react"

function Calculator(props) {
    const [input, setInput] = useState("")

    const handleSetInput = (number) =>{
      setInput(input+number)
    }
    const handleClear =()=>{
      setInput("")
    }
    const handleResuft=()=>{
      let resuft = eval(input)
      if(typeof resuft === "number"){
        setInput(resuft)
      }else{
        setInput("")
      }
      
    }
    return (
        <>
            <table >
  <tr>
    <td colspan="3"> <input class="dislay-box" type="text" value={input} /></td>
    <td><input  type="button" value="AC" onClick={()=>{handleClear()}} /></td>
  </tr>
  <tr>
    <td><input  type="button"value={1} onClick={()=>{handleSetInput(1)}}/></td>
    <td><input  type="button"value={2} onClick={()=>{handleSetInput(2)}}/></td>
    <td><input  type="button"value={3} onClick={()=>{handleSetInput(3)}}/></td>
    <td><input  type="button"value="/" onClick={()=>{handleSetInput("/")}}/></td>
  </tr>
  <tr>
    <td><input  type="button"value={4}onClick={()=>{handleSetInput(4)}}/></td>
    <td><input  type="button"value={5}onClick={()=>{handleSetInput(5)}}/></td>
    <td><input  type="button"value={6}onClick={()=>{handleSetInput(6)}}/></td>
    <td><input  type="button"value="-"onClick={()=>{handleSetInput("-")}}/></td>
  </tr>
  <tr>
    <td><input  type="button"value={7}onClick={()=>{handleSetInput(7)}}/></td>
    <td><input  type="button"value={8}onClick={()=>{handleSetInput(8)}}/></td>
    <td><input  type="button"value={9}onClick={()=>{handleSetInput(9)}}/></td>
    <td><input  type="button"value="+"onClick={()=>{handleSetInput("+")}}/></td>
  </tr>
  <tr>
    <td><input  type="button"value="."onClick={()=>{handleSetInput(".")}}/></td>
    <td><input  type="button"value={0}onClick={()=>{handleSetInput(0)}}/></td>
    <td><input  type="button"value="="onClick={()=>{handleResuft()}}/></td>
    <td><input  type="button"value="*"onClick={()=>{handleSetInput("*")}}/></td>
  </tr>
</table>
        </>
    )
}

export default Calculator