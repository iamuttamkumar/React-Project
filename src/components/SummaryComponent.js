import react,{Component} from 'react';

class SummaryComponent extends Component{
 constructor(props){
     super(props)
 }
 handleChange=(e)=>{
     this.props.onQuantityChange(e.target.value);
 }
 render(){
     return(
         <div style={{border:'solid 2px red'}}>
             <h2>Summary Information...</h2>
             <p>
                 <label>Product Name :<b>Product-1</b></label>
             </p>
             <p>
                 <label>Enter Quantity :
                    <input type="text" value={this.props.quantity} onChange={this.handleChange}></input>
                 </label>
             </p>
             <p>
                 <label>Address :<b>{this.props.address}</b></label>
             </p>
             <button>Place Order</button>
         </div>
     );
 }
}

export default SummaryComponent