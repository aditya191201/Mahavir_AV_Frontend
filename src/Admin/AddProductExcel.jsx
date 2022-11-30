import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AddSolution.css';
import { setCookie } from '../Cookies';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import url from '../Url';
var excel = ""
function AddProductExcel(){
    const navigate = useNavigate();
    const handleExcel =(event)=>{
        excel = event.target.value
        console.log(excel)
     }
     const handleClick = () =>{
        var formBody = {
            "file": excel,
      }
      axios.post(url+"/excel/products", formBody, {

      headers: {
          "Content-Type": "multipart/form-data"
      }
  }).then(function (response) {
      if (response.status == 200) {
         console.log("products added",response.data)
         console.log("okay okay")
         
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
                Add Product Excel
            </div>
            <div className="form-1">
            <div class="inputfield">
          <label>Excel File</label>
          <input type="file" onChange={handleExcel} class="input"/>
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
export default AddProductExcel;