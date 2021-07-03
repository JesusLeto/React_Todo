import React from 'react';
import "./content.scss"
import DB from "../../db.json"
import FullTask from "./FullTask"

const Content = ({ActiveId, AllActiveTheme}) => {
    return(
        <div className = "Content">
            {DB.Theme.map(Element =>{
                if(Element.id == ActiveId || AllActiveTheme )
                    return (
                    <FullTask NameHeader = {Element.Name} ColorTask = {(DB.colors.filter(color => color.id === Element.colorId))[0].hex} key = {Element.id}/>
                )
            })}
            
        </div>
    )
}

export default Content;