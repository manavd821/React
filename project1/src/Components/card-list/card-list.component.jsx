import { Component } from "react";
import Card from "../card/card.component";
import './card-list.style.css';

class CardList extends Component{

    render() {
        console.log('render cardlist')
        const { monsters } = this.props
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
}

export default CardList