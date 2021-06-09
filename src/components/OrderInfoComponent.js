import react,{Component} from 'react';

class OrderInfoComponent extends Component{
 constructor(props){
     super(props)
 }
handleChange=(e)=>{
    this.props.onQuantityChange(e.target.value);
}
 render(){
     return(
         <div style={{border:"solid 2px red"}}>
             <h2>Product Information....</h2>
             <p>
                 <label>Product Name:
                 <select >
                     <option value="product-1 ">Product-1</option>
                     <option value="product-2 ">Product-2</option>
                     <option value="product-3 ">Product-3</option>
                     <option value="product-4 ">Product-4</option>
                 </select>
                 </label>
             </p>
             <p>
                 <label>Enter Quantity : 
                     <input type="text" value={this.props.quantity} onChange={this.handleChange}></input>
                 </label>
             </p>
         </div>
     );
 }
}

export default OrderInfoComponent