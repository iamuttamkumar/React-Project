import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
//import data from './data/data.json';
export default class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            employees:[], 
        };
    }
    componentDidMount(){
         //fetch("/data/data.json")
      fetch("https://localhost:44314/Employee")
        .then(e=>e.json()).then(result=>{
            this.setState({
                employees:result               
            });
        })
    }
   
      render() {
        return (
          <div>
            <h2 style={{textAlign:"center"}}>Employees Data...</h2>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th>City</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
              {this.state.employees.map(data => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.salary}</td>
                  <td>{data.city}</td>
                  <td>
                    {/* <a href={'/employee/'+emp.Id}>Edit</a> */}
                  </td>
                  </tr>
              ))}
              </tbody>
            </Table>
          </div>
          );
        }
}
