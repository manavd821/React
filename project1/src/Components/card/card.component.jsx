import { Component } from "react";

import './card.style.css'

class Card extends Component{
    render(){
        console.log("render card")
        const { name, email, id } = this.props.monster;
        return (
            <div className="card-container">
                    <img
                        alt={`monster ${name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                    <h1 key={id}>{name}</h1>
                    <p>{email}</p>
            </div>
        )
    }
}

export default Card