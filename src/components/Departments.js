import React, { Component } from 'react'

export default class Departments extends Component {
    constructor(props){
        super(props);
        this.state={
            departments:[]
        };
    }
    componentDidMount(){
       fetch("https://localhost:44315/api/Department")
       .then(e=>e.json()).then(result=>{
           this.setState({
               departments:result
           });
       });
   }
   render() {
       return (
           <div>
               <h2>Department Details...</h2>
               <table>
                   <thead>
                       <tr>
                           <th>Dep Id</th>
                           <th>Dep Name</th>
                           <th>Revenue</th>
                       </tr>
                   </thead>
                   <tbody>
                      
                       
                      {this.state.departments.map(dept=>(
                       <tr key={dept.DeptId}>
                          <td>{dept.DeptId}</td>     
                          <td>{dept.DeptName}</td>
                          <td>{dept.Revenue}</td>                          
                       </tr>
                       ))}
      
                   </tbody>
               </table>
           </div>
       )
   }
}
