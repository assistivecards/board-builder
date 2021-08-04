import React, { useState, initialState } from "react";

export default class Card extends React.Component{

    // const [cards, changeCards] = useState(initialState);

    render(){
        return(
            <div className="icon" onClick={this.props.event}>
                <img src={"https://api.assistivecards.com/cards/icon/"+this.props.cards.slug+".png"} />
                <p>{this.props.cards.slug}</p>
            </div>
        )
    }

}