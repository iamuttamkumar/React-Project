import react,{Component} from 'react';
import  OrderInfoComponent from'./OrderInfoComponent';
import AddressComponent from './AddressComponent';
import SummaryComponent from './SummaryComponent';
import React from 'react';
class OrderComponent extends Component{
 constructor(props){
     super(props);
     this.state={
         quantity:'',
         address:''
     }
 }
 orderInfoChanged=val=>{
     this.setState({
         quantity:val
     });     
 }
 addressChanged=val=>{
     this.setState({
         address:val
     });
 }
 render(){
     return(
        <React.Fragment>

    <h1>Welcome to Product Order Screen...</h1>

    <OrderInfoComponent quantity={this.state.quantity} 

    onQuantityChange={this.orderInfoChanged}></OrderInfoComponent>

    <AddressComponent address={this.state.address} 

    onAddressChange={this.addressChanged}></AddressComponent>

    <SummaryComponent quantity={this.state.quantity} address={this.state.address} 

    onQuantityChange={this.orderInfoChanged}></SummaryComponent>
</React.Fragment>
     );
 }
}

export default OrderComponent