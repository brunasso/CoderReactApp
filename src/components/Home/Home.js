import React from 'react';
import Button from '../Button/Button';
import ButtonCL from '../Button/ButtonCL';
import './Home.css';


export const Home = () => {

    let buttonText = 'BOTON!!'

    return(
        <div className='homeStyle'>
            <Button text={'BOTON 1'}/>
            <ButtonCL name={buttonText}/>
            <Button/>
        </div>
    )
}