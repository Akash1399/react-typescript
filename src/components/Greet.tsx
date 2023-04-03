import React from 'react'
type GreetProps={
    name:string
    messageCount?:number
    isLoggedIn:boolean
}
function Greet(props:GreetProps) {
  return (
    <div>
      {props.isLoggedIn?<h1>Hi {props.name}!!! You have {props.messageCount} Unread messages.</h1>:<h1>WELCOME GUEST</h1>}
    </div>
  )
}

export default Greet
