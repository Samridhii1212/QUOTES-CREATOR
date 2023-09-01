import React from "react";

class Myclass extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            name: "sam",
        }
    }
    
    render()
    {
        return(<h1>this is {this.state.name} class component</h1>)
    }
}

export default Myclass;