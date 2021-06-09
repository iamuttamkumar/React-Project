import React, { Component } from 'react'
import { Table,Row, Form, Col, Button } from 'react-bootstrap';
//import "../node_modules/bootstrap/dist/css/bootstrap-min.css";

export default class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
           
                name:'',
                age:'',
                salary:'',
                city:''
           
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
       
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState=(this.state);
        // alert(`${this.state.name} ${this.state.age} ${this.state.salary}
        // ${this.state.city}`)
    }
    
    render() {
        return (
            <div>
            <h2>Add Employee</h2>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Employee Name"/>
                  </Form.Group>
                  <Form.Group controlId="age">
                    <Form.Label>Employee Age</Form.Label>
                    <Form.Control
                      type="text"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                      placeholder="age" />
                  </Form.Group>
                  <Form.Group controlId="salary">
                    <Form.Label>Employee Salary</Form.Label>
                    <Form.Control
                      type="text"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.handleChange}
                      placeholder="Price" />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Employee City</Form.Label>
                      <Form.Control 
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      placeholder="City"/>
                  </Form.Group>
                  <Form.Group>
                    <button type="submit">Save</button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        
        );
    }
}
