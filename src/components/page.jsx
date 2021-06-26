import React from 'react';
import Menu from './menu';
import Content from './content';
import AddingPage from './addingPage';

const Page = () =>{
    return (
        <div className = "MainPage">
            <Menu />
            <Content />  
            <AddingPage />       
        </div>
    )
}

export default Page