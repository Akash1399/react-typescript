import React from 'react'
type OscarSecondProps={
    children:React.ReactNode
}
function OscarSecond(props:OscarSecondProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default OscarSecond
