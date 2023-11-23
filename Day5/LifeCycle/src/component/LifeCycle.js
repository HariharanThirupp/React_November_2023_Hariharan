import React, { Component } from "react";
class Lifecycle extends Component{
    //mounting phase
    constructor(props){
        super(props);
        console.log("1, Constructor called");
        this.state={data: null};
    }
    componentDidMount(){
        console.log("3, componentDidMount called");
        this.setState({ data:"Hello, World!"});
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("4, shouldComponentUpdate called");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("5, getSnapshotBeforeUpdate called");
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("6, componentDidUpdate called");
    }
    componentWillUnmount(){
        console.log("7, componentWillUnmount called");
    }
    render(){
        console.log("8, Render called");
        return(
            <div>
                <h1>Component Lifecycle Example</h1>
                <hr></hr>
                <p>{this.state.data}</p>
            </div>
        )
    }
}
export default Lifecycle;