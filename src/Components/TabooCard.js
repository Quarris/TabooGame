import React from "react"
import { Cards } from "../Data";
import "./TabooCard.css"

export default class TabooCard extends React.Component {
    render() {
        var card = Cards[this.props.index];
        return (
            <div className='card'>
                <div className='card-title'>
                    {card.name}
                </div>
                <hr />
                <ul className='card-taboo-items'>
                    {this.renderTabooItems(card)}
                </ul>
            </div>
        );
    }

    renderTabooItems(card) {
        const list = card.taboo.map((value, index) => <li key={index}>{value}</li>);
        return (list);
    }
}