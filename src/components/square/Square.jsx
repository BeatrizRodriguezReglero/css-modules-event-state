import { useState } from "react"
import { StyledSquare } from "./square.styles"

const Square=()=>{
    const [color, setColor]= useState(true)
    return (<>
        <StyledSquare $color={color}/>
        <button onClick={()=>changeColor(color, setColor)}>Change Color</button>
    </>
    )

}

const changeColor =(color,setColor)=>{

    setColor(!color)
}
export default Square