import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddSolution.css';
import { setCookie } from '../Cookies';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import url from '../Url';
var excel = ""
function AddSolutionExcel(){
    const [selectedsolutionFile, setSelectedSolutionFile] = useState();
    const [isSolutionFilePicked, setIsSolutionFilePicked] = useState(false);
    const SolutionFileHandler = (event) => {
        setSelectedSolutionFile(event.target.files[0]);
        setIsSolutionFilePicked(true);
      };
      const handleSolutionsFileSubmission = () => {
        const formData = new FormData();
    
        formData.append('file', selectedsolutionFile);
        console.log("Form Data",formData)
        alert("Submit Clicked")
    
        axios.post(url+"/excel/solutions",formData,{
          
          
        }).then(function(response){
          console.log(response.data)
          console.log("okay")
        }).catch(function(error){
          console.log("Error in products");
          // toast.warn("Error In Fetching orders",error)
    
        })
    
    
      };
     
     
return(
    <>
    <AdminNavbar/>
    <div className="form-contain">
        <div className="wrapper-form">
            <div className="title-form">
            Upload Your Solutions Excel Datasheet here
            </div>
            <div className="form-1">
            <div class="inputfield">
          <label>Excel File</label>
          <input  type="file" name="file" accept=".xlsx, .xls, .csv" onChange={SolutionFileHandler} class = "input"/>
       </div> 
       
       <div class="inputfield">
        <input type="submit" value="Register" onClick={handleSolutionsFileSubmission} class="btn"/>
      </div>
      </div>
        </div>
    </div>
    </>
)
}
export default AddSolutionExcel;