import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmployeeComponent from './components/EmployeeComponent';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
    <App />
   
    </BrowserRouter>,
  document.getElementById('root')
);

//reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as yup from 'yup';
// import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
// import './index.css';

// class CountCharacter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             message:'',
//             counter:10
//         }
//     }
//     onMessageChange(text){
//             this.setState({
//                   message:" Message has "+text.length+" Character"
//             });
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Welcome toCount Character Component...</h2>
//                 <label>Enter Message : <input type="text"
//                  onChange={e=>this.onMessageChange(e.target.value)} ></input></label>
//                  <p>{this.state.message}</p>
//                  <p>
//                 <label>{this.state.counter}</label>
//             </p>
//             </div>
//         );
//     }
// }

// const element=<CountCharacter></CountCharacter>
// ReactDOM.render(element,document.getElementById("root"));


// class Employee extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//        updatedSalary:null
//     }
//     }

//     getUpdatedSalary = (salary) => {
//         this.setState({updatedSalary:salary});
//         }
//     render(){
//         return (
//             <div>
//                 <h2>Employee Details</h2>
//                 <p>
//                     <label>Employee Id:<b>{this.props.Id}</b></label>
//                 </p>
//                 <p>
//                     <label>Employee Name :<b>{this.props.Name}</b></label>
//                 </p>
//                 <p>
//                     <label>Employee Location : <b>{this.props.Location}</b></label>
//                 </p>

//                 <p>
//                     <label>Total Salary : <b>{this.props.Salary}</b></label>
//                 </p>  
//                 <p>
//                     <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
//                 </p>                 
               
//                  <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA}
//                   SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

//             </div>
//         );
//     }
// }



// class Salary extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             basic:this.props.BasicSalary,
//             hra:this.props.HRA,
//             sa:this.props.SpecialAllowance
//         };       
//     } 
    
//     updateSalary=()=>{
//         let salary= parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+
//         parseInt(this.refs.sa.value);
//         this.props.onSalaryChanged(salary);
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Salary Details...</h2>
//                 <p>
//                     <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="basic"/></label>
//                 </p>
//                 <p>
//                     <label>HRA :<input type="text" defaultValue={this.state.hra} ref="hra"/></label>
//                 </p>
//                 <p>
//                     <label>Spacial Allownce :<input type="text" defaultValue={this.state.sa} ref="sa"/></label>
//                 </p>
//                 <button onClick={this.updateSalary}>Update</button>
//             </div>
//         );
//     }
// }

// const element=<Employee Id='101' Name='Uttam Kumar Singh' Location='Bengalore'
//  Salary="50000" BasicSalary='25000' HRA='10000' SpecialAllowance='15000'></Employee>

//  ReactDOM.render(element,document.getElementById('root'));





// const employeeContext = React.createContext();
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             data:{
//               Id:'101',
//               Name:'Uttam Kumar Singh',
//               Location:'Bengalore',
//               Salary:30000
//             }
//           };
//     }
//     changeEmployeeData=()=>{
//         this.setState({
//            data:{ Id:102}
//         });
//     }
//     render(){      
//         return(
//             <div>
//                 <h2>Welcome to App Component..........</h2>
//                 <p>
//                     <label>Employee Id : <b>{this.state.data.Id}</b></label>
//                 </p>
//                 <employeeContext.Provider value={this.state.data}>
               
//                              <Employee></Employee>
//                 </employeeContext.Provider>
//                 <button onClick={this.changeEmployeeData}>Update</button>
//             </div>
//         );
//     }
// }

/*class Employee extends React.Component{
    static contextType = employeeContext
    render(){
        return(
            <div>
                <h2>Welcome to Employee Component...</h2>
                
                <p>
                    <label>Employee Id : <b>{this.context.Id}</b></label>
                </p>
                <p>
                    <label>Employee Name : <b>{this.context.Name}</b></label>
                </p>
                <p>
                    <label>Employee Location : <b>{this.context.Location}</b></label>
                </p>
                <Salary></Salary>
            </div>
        );
    }
}

class Salary extends React.Component{
    static contextType=employeeContext;
    render(){
        return(
            <div>
                <h2>Welcome to Salary Component....</h2>    
                <p>
                    <label>Employee Id : <b>{this.context.Id}</b></label>
                </p> 
                <p>
                    <label>Employee Salary : <b>{this.context.Salary}</b></label>
                </p>       
            </div>
        );
    }
}
*/


/*
const employeeContext=React.createContext({
    data:'',
    changeEmployeeInfo:()=>{}
});
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
              Id:'101',
              Name:'Uttam Kumar Singh',
              Location:'Bengalore',
              Salary:30000
            },
            changeEmployeeInfo:this.updateEmployeeInfo
          };
    }
  updateEmployeeInfo=()=>{
      this.setState({
          data:{Id:102},
          changeEmployeeInfo:this.updateEmployeeInfo
      });
  }
    render(){   
       
        return(
            <div>
                <h2>Welcome to App Component..........</h2>
                <p>
                    <label>Employee Id : <b>{this.state.data.Id}</b></label>
                </p>
                <employeeContext.Provider value={this.state}>
               
                             <Employee></Employee>
                </employeeContext.Provider>
               
            </div>
        );
    }
}

class Employee extends React.Component{
    static contextType = employeeContext
    render(){
        return(
            <div>
                <h2>Welcome to Employee Component...</h2>
                
                <p>
                    <label>Employee Id : <b>{this.context.data.Id}</b></label>
                </p>
                <button onClick={this.context.changeEmployeeInfo}>change</button>
            </div>
        );
    }
}

const element=<App></App>
ReactDOM.render(element,document.getElementById("root"));
*/

/*
function Employee(props){
    return <div style={{border:"3px solid red"}}>
        <p>
            <label>Employee Id : <b>{props.data.Id}</b></label>
        </p>
        <p>
            <label>Employee Name : <b>{props.data.Name}</b></label>
        </p>
        <p>
            <label>Employee Location : <b>{props.data.Location}</b></label>
        </p>
        <p>
            <label>Employee Salary : <b>{props.data.Salary}</b></label>
        </p>
    </div>    
}
function DisplayEmployee(props){
const empList=props.employeeList;
const listElements=empList.map((emp)=>
       < Employee key={emp.Id} data={emp}></Employee>
);
return (
    <div>
        {listElements}
    </div>
);
}
const employee=[
    {Id:101,Name:'Uttam', Location:'Hyderabad',Salary:30000 },
    {Id:102,Name:'Gautam', Location:'Bengalore',Salary:25000 },
    {Id:103,Name:'Abhinav', Location:'Pune',Salary:30000 },
    {Id:104,Name:'Sonu', Location:'Chennai',Salary:30000 }
];

const element=<DisplayEmployee employeeList={employee}></DisplayEmployee>

ReactDOM.render(element,document.getElementById("root")); */

/*
class EmployeeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[]
        };
    }
   componentDidMount(){
    fetch("https://localhost:44315/api/Employee")
     .then(e=>e.json()).then(result=>{
         this.setState({
             employees:result
         })
     })   
   }
    render() {
        return (
          <div>
            <h2>Employees Data...</h2>
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
          </div>
          );
        }
}
const element =<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));*/

/*
class EmployeeComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          message: ' '
        };
      }

    onCreateEmployee=(e)=>{
        let empInfo={
              Id:this.refs.Id.value,
              Name:this.refs.Name.value,
              Location:this.refs.Location.value,
              Salary:this.refs.Salary.value        
            };
             
        fetch("https://localhost:44315/api/Employee",{
            method:'Post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(empInfo)
        }).then(e=>e.JSON)
       .then(res=>{         
            if(res){
        this.setState({message:'New Employee is Created Successfully'});
      }
    });
   } 
   render(){
    return(
      <div>
        <h2>Please Enter Employee Details...</h2>
        <p>
          <label>Employee ID : <input type="text"  ref="Id"></input></label>
        </p>
        <p>
          <label>Employee Name : <input type="text" ref="Name"></input></label>
        </p>
        <p>
          <label>Employee Location : <input type="text" ref="Location"></input></label>
        </p>
        <p>
          <label>Employee Salary : <input type="text" ref="Salary"></input></label>
        </p>
        
        <button onClick={this.onCreateEmployee}>Create</button>
       <p>{this.state.message}</p>
        </div>
    )
  }
}
const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));
*/

//Basic Form

/*class EmployeeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
      employee:{
            Id:'',
            Name:'',
            Location:'',
            Salary:''
        }
     }
    }
    onChangeInput=e=>{
          const name=e.target.name;
          const value=e.target.value;
        this.setState({
          employee:{
              ...this.state.employee,
              [name]:value
          }
        });
    }
    onClickEvent=()=>{

        console.log(this.state.employee); 
    }
    render(){
        return(
            <div>
                  <h2>New Employee Form...</h2>               
                <form>
                    <p>
                     <label>Employee Id:<input type="text" name="Id" value={this.state.employee.Id}
                        onChange={this.onChangeInput}/></label>
                    </p>
                    <p>
                    <label>Employee Name:<input type="text" name="Name" value={this.state.employee.Name}
                     onChange={this.onChangeInput}/></label>
                    </p>
                    <p>
                    <label>Employee Location:<input type="text" name="Location" value={this.state.employee.Location}
                     onChange={this.onChangeInput}/></label> 
                    </p>
                    <p>
                    <label>Employee Salary:<input type="text" name="Salary" value={this.state.employee.Salary}
                     onChange={this.onChangeInput}/></label>
                    </p>
                    
                </form>
                <button onClick={this.onClickEvent}>Submit</button>                
            </div>
        );
    }
}


const element=<Employee></Employee>
ReactDOM.render(element,document.getElementById("root"));
*/


// Use Formik to create Form
/*
const validateEmployee=empData=>{
    const errors={};
    if (!empData.Name) {
        errors.Name = 'Please Enter Employee Name';
      } else if (empData.Name.length > 20) {
        errors.Name = 'Name cannot exceed 20 characters';
      }
    

    if(!empData.Location){
        errors.Location='Please Enter Employee Location.';
    }
    if(!empData.Email){
        errors.Email='Please Enter Employee Email Id.'
    }
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(empData.Email)){
        errors.Email='Invalid Email Address';
    }
    return errors;
}
const EmployeeComponent=()=>{
    const formik=useFormik({
        initialValues:{
            Id:'',
            Name:'',
            Location:'',
            Salary:'',
            Email:''
        },
        validate:validateEmployee,
        onSubmit:values=>{
            alert(JSON.stringify(values));
            console.log(JSON.stringify(values));
        }
    });
    return(
        <div>
            <h2>New Employee form...</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee Id:</label>
                    <input type="text" name="Id" id="Id" value={formik.values.Id} 
                    onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name:</label>
                    <input type="text" name="Name" id="Name" value={formik.values.Name} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                   {formik.touched.Name && formik.errors.Name ? 
                    <span style={{color:"red"}}>{formik.errors.Name}</span>:null} 
                </p>
                <p>
                    <label htmlFor="Location">Employee Location:</label>
                    <input type="text" name="Location" id="Location" value={formik.values.Location} 
                    onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                      {formik.touched.Location && formik.errors.Location ? 
                    <span style={{color:"red"}}>{formik.errors.Location}</span>:null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary:</label>
                    <input type="text" name="Salary" id="Salary" value={formik.values.Salary} 
                    onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Email">Employee Email Id :</label>
                    <input type="text" name="Email" id="Email" value={formik.values.Email} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Email && formik.errors.Email ? 
                    <span style={{color:"red"}}>{formik.errors.Email}</span>:null}
                </p>
                <button type="submit">Submit</button>
            </form>           
        </div>
    );
}

const element=<EmployeeComponent></EmployeeComponent>
ReactDOM.render(element,document.getElementById("root"));*/

// Using yup in formik component
/*
const EmployeeComponent=()=>{
    const formik=useFormik({
        initialValues:{
            Id:'',
            Name:'',
            Location:'',
            Salary:'',
            Email:''
        },
    
    validationSchema: yup.object({

        Name: yup.string()  
          .max(20, 'Name should not exceed 20 Characters')  
          .required('Please Enter Employee Name'),
          Location:yup.string() 
          .required('Employee Location is Required'),
          Email:yup.string().
          email('Invalid Email Id.')
          .required('Email Id is Required.')
      }),  
        onSubmit:values=>{
            alert(JSON.stringify(values));
            console.log(JSON.stringify(values));
        }
    });
    return(
        <div>
            <h2>New Employee form...</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee Id:</label>
                   <input type='text' name='Id' {...formik.getFieldProps("Id")}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name:</label>
                   <input type="text" name="Name" {...formik.getFieldProps("Name")}></input>
                   {formik.touched.Name && formik.errors.Name ? 
                    <span style={{color:"red"}}>{formik.errors.Name}</span>:null} 
                </p>
                <p>
                    <label htmlFor="Location">Employee Location:</label>
                    <input type="text" name="Location" {...formik.getFieldProps("Location")}></input>
                      {formik.touched.Location && formik.errors.Location ? 
                    <span style={{color:"red"}}>{formik.errors.Location}</span>:null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary:</label>
                   <input type="text" name="Salary" {...formik.getFieldProps("Salary")}></input>
                </p>
                <p>
                    <label htmlFor="Email">Employee Email Id :</label>
                    <input type="text" name="Email" {...formik.getFieldProps("Email")}></input>
                    {formik.touched.Email && formik.errors.Email ? 
                    <span style={{color:"red"}}>{formik.errors.Email}</span>:null}
                </p>
                <button type="submit">Submit</button>
            </form>           
        </div>
    );
} 
*/

// Using Field Component
/*
const EmployeeComponent =()=> {

    return (
  
      <Formik initialValues= {{
  
        Id: '',
  
        Name: '',
  
        Location: '',
  
        Salary:'',
  
        EmailId:'',
  
        Designation:''
  
      }} validationSchema={yup.object({
  
        Name:yup.string().max(20,'Name should not exceed 20 Characters').
  
        required('Please Enter Employee Name'),
  
        Location: yup.string()
  
          .required('Please Enter Employee Location'),
  
        EmailId: yup.string()
  
          .email('Invalid email address')
  
          .required('Please Enter Email Id')
  
      })} onSubmit= {values => {
  
        alert(JSON.stringify(values));
  
      }}>
  
        {props=>(
  
          <div>
  
      <h2>Enter Employee Details...</h2>
  
      <Form>
  
        <p>
  
            <label htmlFor="Id">Employee ID </label>
  
            <Field name="Id" type="text"></Field>
  
        </p>
  
        <p>
  
            <label htmlFor="Name">Employee Name </label>
  
            <Field name="Name" type="text"></Field>
  
            <ErrorMessage name="Name"></ErrorMessage>
  
        </p>
  
        <p>
  
            <label htmlFor="Location">Employee Location </label>
  
            <Field name="Location" type="text"></Field>
  
            <ErrorMessage name="Location"></ErrorMessage>
  
        </p>
  
        <p>
  
            <label htmlFor="Salary">Employee Salary </label>
  
            <Field name="Salary" type="text"></Field>
  
        </p>
  
        <p>
  
            <label htmlFor="EmailId">Employee Email ID </label>
  
            <Field name="EmailId" type="text"></Field>
  
            <ErrorMessage name="EmailId"></ErrorMessage>
  
        </p>
  
        <p>
  
          <label>Employee Designation : 
  
          <Field name="Designation" as="select">
  
    <option value="red">Software Engineer</option>
  
    <option value="green">Senior Software Engineer</option>
  
    <option value="blue">Lead</option>
  
  </Field>
  
          </label>
        </p>
        <button type="submit" disabled={props.isValid==false}>Submit</button>
  
      </Form>
  
      </div>
  
        )}
  
      </Formik>
    );
  }
  
  const element=<EmployeeComponent></EmployeeComponent>
  
  ReactDOM.render(element,document.getElementById("root")); 

*/
  