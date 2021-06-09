import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.userNameRef=React.createRef();
       
    }

    componentDidMount(){
        this.userNameRef.current.focus();
    }
    render() {
        return (
            <div>
                <h2>Login Details.....</h2>
                <p>
                    <label>User Name 👨 :<input type="text" ref={this.userNameRef}></input></label>
                </p>
                <p>
                    <label>Password 🔑  :<input type="text" ></input></label>
                </p>
                <button>Login</button>
                
            </div>
        )
    }
}
