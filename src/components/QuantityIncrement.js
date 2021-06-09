import React,{Component} from 'react';
class QuantityIncrement extends React.Component{
    constructor(props){
        super(props);
        this.quantityRef=React.createRef();
    }
IncrementQuantity=(e)=>{
    this.quantityRef.current.value++;
}
DecrementQuantity=(e)=>{
    this.quantityRef.current.value--;
}
    render(){
            return(
            <div>
                <p>                   
                    <label>Enter Quantity:<button onClick={this.DecrementQuantity} >-</button>
                     <input type="text" ref={this.quantityRef} ></input>                    
                    <button onClick={this.IncrementQuantity} >+</button>
                    </label>
                </p>
            </div>
        );
    }
}
export default QuantityIncrement