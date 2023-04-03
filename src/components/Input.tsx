import React from 'react'
type InputProps={
    value:string
    handlChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
function Input(props:InputProps) {
  return (
    <div>
    <input value={props.value} onChange={props.handlChange}/>
    </div>
  )
}

export default Input
