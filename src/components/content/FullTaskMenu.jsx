import React, {useState} from "react"

const ShowIcon = param =>{
    if(param){
        return (
        <div className="icon__Active">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" fill="#4DD599" stroke="#4DD599" stroke-width="2"/>
        <path d="M14.3 7.20001L8.79999 12.7L6.29999 10.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        )
    }
    else{
        return(
            <div className="icon__Active">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="#E8E8E8" strokeWidth="2"/>
            </svg>
            </div>
        )
    }
}

const FullTaskMenu = () => {
    const [CompliteIcon, setCompliteIcon] = useState(false)
    return(      
        <div className = "Task" onClick = {() => {
            setCompliteIcon(!CompliteIcon)
        }}>    
            {ShowIcon(CompliteIcon)}


            <span className = "Text__Content">Изучить JavaScript</span>
        </div>
    )
}

export default FullTaskMenu

{/* <div className="icon__Active false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="#E8E8E8" strokeWidth="2"/>
            </svg>
            </div> */}

{/* <div className="icon__Active true">
<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div> */}
