import React from 'react';
import "./content.scss"
import DB from "../../db.json"
import FullTask from "./FullTask"

const Content = () => {
    return(
        <div className = "Content">
            {DB.Tasking.map(Element =>{
                return (
                    <FullTask NameHeader = {Element.Name} ColorTask = {(DB.color.filter(color => color.id === Element.colorId))[0].hex} key = {Element.id}/>
                )
            })}
        </div>
    )
}

export default Content;