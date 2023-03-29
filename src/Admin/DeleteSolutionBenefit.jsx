import axios from "axios";
import React from "react";
import { getCookie } from "../Cookies";
import url from "../Url";
import './AddSolution.css';
import AdminNavbar from "./Admin Navbar/AdminNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var title = ""
var modelNum = ""

function DeleteSolutionBenefit() {
  var token = getCookie("token")
  var isLogin = localStorage.getItem("login")

  const handleModelNum = (event) => {
    modelNum = event.target.value
    console.log(modelNum)
  }

  const handleTitle = (event) => {
    title = event.target.value
    console.log(title)
  }
  const handleClick = () => {

    axios.delete(url + "/deletesolutionbenefit/" + modelNum + "/" + title, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + token
      }
    }).then(function (response) {
      if (response.status == 200) {
        console.log("DELETE", "Solution Benefit")
        toast('Solution Benefit Deleted Successfully', {
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
    }).catch(function (error) {
      console.log("Error", error)
    })
  }

  return (
    <>
      {
        (isLogin == "true") ? (<>
          <AdminNavbar />
          <div className="form-contain">
            <div class="wrapper-form">
              <div class="title-form">
                Delete Solution Benefit
              </div>
              <div class="form-1">
                
                  
                  <div class="inputfield">
                    <label>Solution Name</label>
                    <input type="text" onChange={handleModelNum} class="input" />
                  </div>
                  <div class="inputfield">
                    <label>Benefit Title</label>
                    <input type="text" onChange={handleTitle} class="input" />
                  </div>
                  <div class="inputfield">
                        <input type="submit" value="Delete Solution Benefit" onClick={handleClick} class="btn" />
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
          /></>) : (<><h1>Error: Not Logged IN</h1></>)
      }

    </>
  )
}

export default DeleteSolutionBenefit