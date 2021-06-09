import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'
export default class EmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            employees:[]
        };       
    }

   componentDidMount(){
      this.getEmployees ();
   }

   loadEmployee=()=>{
       this.getEmployees();
   }
   getEmployees(){
    fetch("https://localhost:44315/api/Employee")
    .then(e=>e.json())
    .then(result=>{
        this.setState({
            employees:result
        });
    });
   }

  render(){
     
      return(
          <div>
              <h2>Employee Details.....</h2>
              <table>
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Salary</th>
                      </tr>
                    
                  </thead>
                  <tbody>
                         {this.state.employees.map(emp=>(
                             <tr key={emp.Id}>
                                 <td>{emp.Id}</td>
                                 <td>{emp.Name}</td>
                                 <td>{emp.Location}</td>
                                 <td>{emp.Salary}</td>                                
                             </tr>
                         ))}
                    </tbody>

                   
              </table>
              <p>
                  <button onClick={this.loadEmployee}>Reload</button>
              </p>
             
          </div>
      )
  }
}
  

export  class ChangeDetection  extends Component {
     constructor(props){
         super(props);
         this.state={
             employeeCount:0
         };

         setInterval(this.getEmployeeCount);
     }
      getEmployeeCount=()=>{
        fetch("https://localhost:44315/api/Employee")
        .then(e=>e.json())
        .then(result=>{
            this.setState({
               employeeCount:result.length 
            })
        });
      }
      showReports=()=>{
          ReactDOM.render(<EmployeeComponent></EmployeeComponent>,document.getElementById("root"));
      }
    render() {
        return (
            <div>
                <h2>Welcome to  Component LifeCycle Method Demonstration..</h2>
               <p>
               <label><b>Number of Employees are:</b>{this.state.employeeCount}</label>
               </p>
               <button onClick={this.showReports}>showReports</button>
            </div>
        );
    }
}

