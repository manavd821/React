import { Component } from "react";
import Card from "../card/card.component";
import './card-list.style.css';

const CardList = (props, forwardRef) =>{
        console.log('render cardlist')
        const { monsters } = props
        return (
            <div className="card-list">
                {monsters.map((mon) => {
                    return (
                        <Card key={mon.id} monster = {mon}/>
                    )
                })}
            </div>
        )
    }

export default CardList