import React, {useEffect, useState} from 'react';
import "./content.scss"
import FullTask from "./FullTask"
import axios from 'axios';

const URL = "http://localhost:3001/Theme?_expand=color&_embed=Task"

const Content = ({ActiveId, AllActiveTheme,ChangeHead}) => {
    const [NewDB, setNewDB] = useState("");
    const [AddingNewTask, setAddingNewTask] = useState(null)

    useEffect(() => {
        axios.get(URL).then(({data}) => setNewDB(data))
    },[ActiveId,AddingNewTask])


    return(
        <div className = "Content">
            {NewDB && NewDB.map(Element =>{
                if(Element.id == ActiveId || AllActiveTheme )
                    return (
                    <FullTask NameHeader = {Element.Name} ColorTask = {Element.color.hex} ThemeTaskList = {Element.Task} key = {Element.id} ThemeID ={Element.id}
                    AddingNewTask = {obj => setAddingNewTask(obj)} ChangeHeader = {NewHeader => ChangeHead(NewHeader)}/>
                )
            })}
            
        </div>
    )
}

export default Content;