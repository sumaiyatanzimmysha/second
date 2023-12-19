import React from 'react'

const Paragraph = ({text,className}) => {
  return (
     <p className={`${className} font-pop pr-[161px]`}>{text}</p>
  )
}

export default Paragraph