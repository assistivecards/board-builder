import React, {Component} from "react";

export default class Card extends Component {

    render(){
        return(
            <div className="icon">
                <img src={"https://api.assistivecards.com/cards/"+this.props.pack.packSlug+"/"+this.props.pack.slug+".png"} alt={this.props.pack.title} />
                <p>{this.props.pack.title}</p>
            </div>
        )
    }

}