import React, {useState} from 'react';
import Menu from './menu/menu';
import Content from './content/content';


const Page = () =>{

    const [activeTheme, setactiveTheme] = useState(null)
    const [AllActiveTheme, setAllActiveTheme] = useState(false)
    console.log(activeTheme)
    return (
        <div className = "MainPage">
            <Menu GetActiveThemeId = {(Theme,AllActiveThemeProm) => {
                        setactiveTheme(Theme)
                        setAllActiveTheme(AllActiveThemeProm)
                        
                    }} />

            <Content ActiveId = {activeTheme} AllActiveTheme = {AllActiveTheme} />       
        </div>
    )
}

export default Page