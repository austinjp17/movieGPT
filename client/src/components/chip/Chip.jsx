import React from 'react'

//STYLESHEET
import "./Chip.css"

const Chip = ({text}) => {
    const [active, setActive] = React.useState(false)

    let classname = "selectable-chip"
    classname = active ? classname + " active-chip" : classname

    const handleClick = () => {
        setActive(!active)
    }

    return(
        
        <button 
          className={classname}
          value={text}
          onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Chip