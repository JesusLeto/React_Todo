import React from 'react';
import Menu from './menu/menu';
import Content from './content/content';


const Page = () =>{
    return (
        <div className = "MainPage">
            <Menu/>
            <Content />       
        </div>
    )
}

export default Page