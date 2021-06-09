import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route, NavLink} from 'react-router-dom';
import OrderComponent from './components/OrderComponent';
import QuantityIncrement from './components/QuantityIncrement';
import Login from './components/Login';
import VideoPlayer from './components/VideoPlayer';
import Elevator from './components/Elevator';
import EmployeeReport from './components/EmployeeReport';
import EmployeeComponent, { ChangeDetection } from './components/EmployeeComponent';
import Employee from './components/Employee';
import Departments from './components/Departments';
import Project from './components/Projects';
import InvalidPath from './components/NotFoundPage';
import {Container, Button,Alert} from 'react-bootstrap';
import AddEmployee from './components/AddEmployee';
import { Component } from 'react';
class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isAddEmployee: false,
      error: null,
      response: {}
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddEmployee: true });
  }

  onFormSubmit(data) {
    const apiUrl = "https://localhost:44314/Employee";

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddEmployee: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }
  render(){
  return (
    <div className="App">
     {/* <OrderComponent /> */}
     {/* <QuantityIncrement /> */}
     {/* <Login /> */}
     {/* <VideoPlayer /> */}
     {/* <Elevator /> */}
     {/* <EmployeeReport /> */}
     {/* <ChangeDetection /> */}
    {/* {!this.state.isAddEmployee &&<Button variant="primary" onClick={()=>this.onCreate()}>Add Employee</Button>}
     {!this.state.isAddEmployee && <Employee/>}
    {this.state.isAddEmployee && <AddEmployee onFormSubmit={this.onFormSubmit}/>}* */}
     {/* <h2>Welcome to App Component...</h2>
      <ul>
        <li><Link to="/">Employees</Link></li>
        <li><NavLink to="/departments" activeClassName="testClass">Departments</NavLink></li>
        <li><NavLink to="/projects" activeClassName="testClass">Projects</NavLink></li>
      </ul>
        <Switch>        
        <Route exact path="/" component={Employee}></Route>
         
        <Route path="/departments" component={Departments}></Route>
        <Route path="/projects" component={Project}></Route>
        <Route path="/departments" component={Employee}></Route>    
        <Route component={InvalidPath}></Route>    
        </Switch> */}
        <Employee />
    </div>
  );
}
}

export default App;
