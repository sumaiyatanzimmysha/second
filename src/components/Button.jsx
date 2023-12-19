 

const Button = ( {text, className }) => {
    console.log(text)
  return (
     <button className={ `${className} font-pop   font-semibold text-2xl py-2.5 px-7 border border-0 bg-bordercolor
     rounded-lg hover:bg-secondarycolor`} >{text}</button>
  )
}

export default Button