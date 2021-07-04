import React, {useState} from 'react';
import FullTaskMenu from "./FullTaskMenu";
import axios from 'axios'



const FullTask = ({NameHeader, ColorTask, ThemeTaskList, ThemeID, AddingNewTask, ChangeHeader}) => {
    const URLTaskList = "http://localhost:3001/Task"
    const [showInput, setshowInput] = useState(false)
    const [textInput, settextInput] = useState("")
    const [nameThemeHeader, setnameThemeHeader] = useState(NameHeader)

    return (
        <div className = "FullTask">
            <div className="HeaderTask" style = {{color:ColorTask}}> 
            <span>{nameThemeHeader}</span>
            <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path onClick = {(e) => {
               e.target.parentNode.parentNode.nextSibling.classList.add("FullTask__ChangeInput__Active")
            }} 
            d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z" fill="#DFDFDF"/>
            </svg>
            </div>
            <div className="FullTask__ChangeInput">
            <input type="text" placeholder = "New Header" value = {nameThemeHeader} onChange = {
                e => {
                    setnameThemeHeader(e.target.value)
                }
            }/>
            <button onClick = {(e)=> {
                axios.patch("http://localhost:3001/Theme/" + ThemeID, {
                    Name: nameThemeHeader
                }).then(() => ChangeHeader(nameThemeHeader));
                e.target.parentNode.classList.remove("FullTask__ChangeInput__Active")
            }}>Click</button>
            </div>
            <div className="line"></div>

            
            {
                ThemeTaskList.map((Task, index) => {
                    return(
                        <FullTaskMenu text = {Task.text} key = {index}/>
                    )
                })
            }

            <div className = "FullTask__interactive">


                {!showInput && <span className = "FullTask__addNew" onClick = {() => setshowInput(true)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Новая задача</span>
                </span>}

                {showInput && <span className = "FullTask__FulladdNew">
                    <input type="text" className = "FullTask__input" placeholder = "Текст задачи"
                    value = {textInput} onChange = {e => settextInput(e.target.value)}/>

                    <button className = "FullTask__BTN FullTask__addBTN"
                    onClick = {() => {
                        if(textInput){
                            axios.post(URLTaskList, {ThemeId: ThemeID, text: textInput, complited: false }).then(({data}) => {AddingNewTask(data); settextInput("")})
                        }
                        else{
                            alert("Write Task");
                        }
                    }}
                    >Добавить задачу</button>

                    <button className = "FullTask__BTN FullTask__cancelBTN" onClick = {() => setshowInput(false)}>Отмена</button>
                    </span>}
            </div>
        </div>
    )
}

export default FullTask