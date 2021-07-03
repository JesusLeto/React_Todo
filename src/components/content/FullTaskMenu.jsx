import React, {useState} from "react"

const ShowIcon = param =>{
    if(param){
        return (
        <div className="icon__Active">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" fill="#4DD599" stroke="#4DD599" strokeWidth="2"/>
        <path d="M14.3 7.20001L8.79999 12.7L6.29999 10.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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


            <span className = "Text__Content"></span>
        </div>
    )
}

export default FullTaskMenu
