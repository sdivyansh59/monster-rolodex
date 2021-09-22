// this component is just for my  concepts
// not related to this app

import React, { Component } from 'react'

export class Event extends Component {
    constructor(){
        super();
        this.handleClick2 = this.handleClick1.bind(this); // manually we are binding 
    }

    handleClick1(){
        console.log("button 1 clicked",this);  // this is not bound so this refere undefined
    }

    handleClick3 = () => console.log(this); // this bound to Event component

    render() {
        return (
            <div>
                
                {console.log("*******  Event Component ******")}
                <button onClick={this.handleClick1()}>click 1</button>
                <button onClick={this.handleClick1}>click 2</button>
                <button onClick={this.handleClick2}>click 3</button>
                <button onClick={this.handleClick3}>click 4</button>
            </div>
        )
    }
}

export default Event
 