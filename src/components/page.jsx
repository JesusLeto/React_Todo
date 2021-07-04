import React, {useState} from 'react';
import Menu from './menu/menu';
import Content from './content/content';


const Page = () =>{

    const [activeTheme, setactiveTheme] = useState(null)
    const [AllActiveTheme, setAllActiveTheme] = useState(false)
    const [NewHead, setNewHead] = useState("")
    return (
        <div className = "MainPage">
            <Menu GetActiveThemeId = {(Theme,AllActiveThemeProm) => {
                        setactiveTheme(Theme)
                        setAllActiveTheme(AllActiveThemeProm)
                        
                    }} NewHeader = {NewHead}/>

            <Content ActiveId = {activeTheme} AllActiveTheme = {AllActiveTheme} ChangeHead = {NewHeader => setNewHead(NewHeader)}/>       
        </div>
    )
}

export default Page