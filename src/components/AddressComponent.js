import react,{Component} from 'react';

class AddressComponent extends Component{
 constructor(props){
     super(props)
 }
 handleChange=(e)=>{
     this.props.onAddressChange(e.target.value)
 }
 render(){
     return(
         <div style={{border:'solid 2px red'}}>
             <h2>Address Information.</h2>
             <p>
                 <label>Address :
                <textarea value={this.props.address} onChange={this.handleChange}></textarea>     
                 </label>
             </p>
         </div>
     );
 }
}

export default AddressComponent