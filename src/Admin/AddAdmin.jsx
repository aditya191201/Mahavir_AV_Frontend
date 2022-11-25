import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AddSolution.css';
import { setCookie } from '../Cookies';
import AdminNavbar from './Admin Navbar/AdminNavbar';
var email = ""
var password = ""
var name = ""
function AddAdmin(){
    const navigate = useNavigate();
    const handleEmail =(event)=>{
        email = event.target.value
        console.log(email)
     }
     const handlePassword =(event)=>{
        password = event.target.value
        console.log(password)
     }
     const handleName =(event)=>{
        name = event.target.value
        console.log(name)
     }
     const handleClick = () =>{
        var formBody = {
            "email": email,
            "password": password,
            "name": name,
      }
      axios.post("http://localhost:8080/register", formBody, {

      headers: {
          "Content-Type": "multipart/form-data"
      }
  }).then(function (response) {
      if (response.status == 200) {
         console.log("solution added",response.data)
         localStorage.setItem("token",response.data.token)
         setCookie("token", response.data.token,20)
         navigate('/add-solution')
      }}).catch(function(error){
         console.log("error",error)
      })
      
   }
     
     
return(
    <>
    <AdminNavbar/>
    <div className="form-contain">
        <div className="wrapper-form">
            <div className="title-form">
                Add Admin
            </div>
            <div className="form-1">
            <div class="inputfield">
          <label>Email</label>
          <input type="email" onChange={handleEmail} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Password</label>
          <input type="password" onChange={handlePassword} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Name</label>
          <input type="text" onChange={handleName} class="input"/>
       </div> 
       <div class="inputfield">
        <input type="submit" value="Register" onClick={handleClick} class="btn"/>
      </div>
      </div>
        </div>
    </div>
    </>
)
}
export default AddAdmin;