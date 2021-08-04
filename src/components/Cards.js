import React from "react";

import Card from "../functions/card";
import Pack from "../functions/pack";

export default class Cards extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            category: [],
            packs: [],
            results: []
        };
        this.allCards = [];
    };

    getCards(){
        fetch("https://api.assistivecards.com/packs/en/metadata.json")
        .then(res => res.json())
        .then(resJson => {
            this.setState({cards: resJson})
            resJson.forEach(pack => {
                this.getAll(pack.slug)
            })
        });
    };

    clickedCard(title){
        fetch("https://api.assistivecards.com/packs/en/"+title+".json")
        .then(res => res.json())
        .then(resJs => {
            resJs.forEach(card => {
                card.packSlug = title;
                console.log(card);
            });
            this.setState({category: resJs})
        })
    };

    getAll(slug){
        fetch("https://api.assistivecards.com/packs/en/"+slug+".json")
        .then(res => res.json())
        .then(cards => {
            cards.forEach(card => {
                card.packSlug = slug;
                this.allCards.push(card);
            })
        })
    }

    searchTerm(e){
        var term = e.target.value.toLowerCase();
        var results = this.allCards.filter((card) => {
            return card.title.toLowerCase().includes(term);
        })
        if(!term){
            this.setState({results: []})
        } else this.setState({results: results})
    }

    componentDidMount(){
        this.getCards();
    };

    turnBack(){
        if(this.state.category.length != 0 && this.state.results.length == 0){
            return(<button onClick={() => this.setState({category: []})}>Turn Back</button>)
        }
    };

    render(){
        return(
            <div className="leftContent">
                <img src={'/images/logo.svg'} className="logo" />
                <input type="search" className="searchBox" placeholder="Search"  onChange={(e) => this.searchTerm(e)} />
                <div className="iconBox">

                    {this.state.results.length == 0 && this.state.category.length == 0 && this.state.cards.map((cards) => {
                        return <Card cards={cards} key={cards.id} event={() => this.clickedCard(cards.slug)} />
                    })}

                    {this.turnBack()}

                    {this.state.results.length == 0 && this.state.category.length != 0 && this.state.category.map((pack, i) => {
                        return <Pack pack={pack} key={i} />
                    })}

                    {this.state.results.length != 0 &&this.state.results.map((pack, i) => {
                        return <Pack pack={pack} key={i} />
                    })}
                </div>
            </div>
        )
    }
}