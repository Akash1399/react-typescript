import React from 'react'
type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
function Button(props:ButtonProps) {
  return (
    <div>
      <button onClick={(event)=>{props.handleClick(event,56)}}>Click Me</button>
    </div>
  )
}

export default Button
