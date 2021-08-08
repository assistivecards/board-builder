import React, { Component } from "react";

export default class Card extends Component{

    render(){
        return(
            <div className="icon" onClick={this.props.event}>
                <img src={"https://api.assistivecards.com/cards/icon/"+this.props.cards.slug+".png"} alt={this.props.cards.locale} />
                <p>{this.props.cards.slug}</p>
            </div>
        )
    }

}