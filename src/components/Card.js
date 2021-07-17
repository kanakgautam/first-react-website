import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import './Card.css';
import CardArray1 from './CardArray1'
import CardArray2 from './CardArray2'
function Card() {
    return (
        <div className="cards">
            <h1>Check out thses epic destinations</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {CardArray1.map((item, index) => {
                        return (
                                <CardItem key={index} src={item.src} path={item.path} label={item.label} text={item.text} />
                        )
                    })}
                </ul>
                <ul className='cards__items'>
                    {CardArray2.map((item, index) => {
                        return (
                                <CardItem key={index} src={item.src} path={item.path} label={item.label} text={item.text} />
                        )
                    })}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
