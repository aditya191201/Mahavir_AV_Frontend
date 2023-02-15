import axios from "axios";
import React from "react";
import { getCookie } from "../Cookies";
import url from "../Url";
import './AddSolution.css';
import AdminNavbar from "./Admin Navbar/AdminNavbar";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteSolutions(){
    var token = getCookie("token")
    const handleClick = () => {
        axios.delete(url+"/delete-solutions",  {
            headers: {
            "Content-Type" : "multipart/form-data",
            "Authorization" : "Bearer "+ token
      }}).then(function(response){
        if(response.status == 200){
            console.log("DELETE", "Solutions deleted")
            toast('Solutions Deleted Successfully', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
      }).catch(function(error){
        console.log("Error", error)
      })
    }

    return(
        <>
        <AdminNavbar/>
            <div className="form-contain">
            <div class="wrapper-form">
    <div class="title-form">
      Delete All Solutions
    </div>
    <div class="form-1">
      <div class="inputfield">
        <br /><br /><br /><br /><br />
        <input type="submit" value="Delete Solutions" onClick={handleClick} class="btn"/>
      </div>
    </div>
</div>
</div>
<ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
        </>
    )
}

export default DeleteSolutions