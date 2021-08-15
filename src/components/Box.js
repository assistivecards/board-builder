import React, { Component } from "react";

import BoxSettings from "../functions/boxSettings";

export default class Box extends Component {

    constructor(props){
        super(props);
        this.state = {
            box: [28]
        }
    }

    boardOption(e){
        this.setState({box: e.target.value});
    }

    render(){
        return(
            <div className="rightContent">

                <BoxSettings howMuch={this.state.box} />
                
                <select className="options" onChange={(e) => this.boardOption(e)}>
                    <option value="4">2 X 2</option>
                    <option value="9">3 X 3</option>
                    <option value="16">4 X 4</option>
                    <option selected={true} value="28">7 X 4</option>
                    {/* <option><input type="text" /></option> */}
                </select>

                <button onClick={() => window.print()} className="printBtn">Print</button>
            </div>
        )
    }
}