import { useState } from "react"
function Hello(){
    let [display,setDisplay] = useState(true)
    let comp
    if(display){
        comp=<h1>Hello World</h1>
    }
  let deletetext=()=>{
    setDisplay(false)
  }


return (
        <div style={{ textAlign: 'center' }}>
            {comp}
        <button onClick={()=>{deletetext()}}>
          Delete the component
        </button>
      </div>
    )
}

export default Hello