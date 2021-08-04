import React, {Component} from "react";

import "./style.css";

import Cards from "./Cards";
import Box from "./Box";
import Footer from "./Footer";

export default class App extends Component {

    render(){
        return(
            <div className="container">
                <Cards />
                <Box />
                <Footer />
            </div>
        )
    }
}