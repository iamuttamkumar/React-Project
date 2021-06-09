import React, { Component } from 'react'

export default class Elevator extends Component {
    constructor(props){
        super(props);
        this.elevatorRef=React.createRef();
    }
   
    render() {
        return (
            <div>               
                <h2>Welcome to Elevator Ordering Screen...</h2>
                
                <p >
                    <label>Elevator Name  : <input type="text" ref={this.elevatorRef}></input></label>
                </p>
                <p>
                    <label>Elevator Speed :<input type="text" ></input></label>
                </p>
                <p>
                    <label>Elevator Load  :<input type="text"></input></label>
                </p>
                <Summary innerRef={this.elevatorRef}></Summary>
            </div>
        )
    }
}

 class Summary extends Component {
    onFocusInput=()=>{
        this.props.innerRef.current.focus();
    }
    render() {
       
        return (
            <div>
                <h2>Summary Details...</h2>
                <p onClick={this.onFocusInput}> 
                    <label>Elevator Name  : <b>Name-1</b></label>
                </p>
                <p>
                    <label>Elevator Speed : <b>10 m/s</b></label>
                </p>
                <p>
                    <label>Elevator Load  :<b>500 kg</b></label>
                </p> 
            </div>
        )
    }
}
