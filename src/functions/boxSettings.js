import React, { Component } from "react";

export default class BoxSettings extends Component {

    render(){
        
        const howMuch = this.props.howMuch;

        const boxs = [];

        for(var i = 1; i <= howMuch; i++){
            boxs.push(<div className="box" key={i} id={i}></div>);
        }

        return(<>{boxs}
            {console.log(boxs)}
        </>)

    }

}