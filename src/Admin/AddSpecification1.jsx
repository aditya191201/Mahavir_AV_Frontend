import axios from 'axios';
import React, { useState } from 'react'
import './AddSolution.css';
import { getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import url from '../Url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddSpecs from './AddSpecs';

var modelNum = "";
var head = "";
var key = "";
var value = ""

function AddSpecification1() {
   var isLogin = localStorage.getItem("login")
   const [clicked, isClicked] = useState(false)
   const navigate = useNavigate();
   var token = getCookie("token")
   // axios.defaults.headers.common['Authorization'] = "Bearer "+ token;
   // axios.defaults.headers.common['Accept'] = 'multipart/form-data'
   // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
   console.log("token", token)


   const handleModel = (event) => {
      modelNum = event.target.value
      console.log(modelNum)
   }
   const handleHead = (event) => {
      head = event.target.value
      console.log(head)
   }
   const handleKey = (event) => {
      key = event.target.value
      console.log(key)
   }
   const handleValue = (event) => {
      value = event.target.value
      console.log(value)
   }


   const handleClick = () => {
      var formBody = {
         "head": head,
         "key": key,
         "value": value
      }

      axios.post(url + "/productspecs/" + modelNum,
         formBody, {
         headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
         }
      }

      ).then(function (response) {
         if (response.status == 200) {
            console.log("Specification added")
            isClicked(true)
            toast('Product Specification Added Successfully', {
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
         console.log("error", error)
      })

   }

   const handleDelete = () => {
      axios.delete(url + "/deleteProductSpecs/" + modelNum + "/" + head, {
         headers: {
           "Content-Type": "multipart/form-data",
           "Authorization": "Bearer " + token
         }
       }).then(function (response) {
         if (response.status == 200) {
           console.log("DELETE", "Product Specification")
           isClicked(true)
           toast('Product Specification Deleted Successfully', {
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
                  <div class="wrapper-form" style={{ maxWidth: "1100px" }}>
                     <div class="title-form">
                        Add/Update/Delete Specifications
                     </div>
                     <div class="form-1">

                        <div style={{ display: "flex" }}>
                           <div class="inputfield">
                              {/* <label>Model Number</label> */}
                              <input type="text" onChange={handleModel} class="input" placeholder='Model Number' />
                           </div>
                           <div class="inputfield" >

                              {/* <label>Head</label> */}
                              <input type="text" onChange={handleHead} class="input" style={{ marginLeft: "20px" }} placeholder='Head Title' />

                           </div>
                           <div class="inputfield" style={{ marginLeft: "20px" }}>
                              <label>Sub Title</label>
                              <textarea class="textarea" onChange={handleKey}  > </textarea>
                           </div>
                           <div class="inputfield" style={{ marginLeft: "20px" }}>
                              <label>Value</label>
                              <textarea class="textarea" onChange={handleValue}  > </textarea>
                           </div>
                           <FontAwesomeIcon icon={faPlus} onClick={handleClick} style={{ marginTop: "50px", marginLeft: "50px" }} />
                           <FontAwesomeIcon icon={faTrash} style={{marginTop:"50px" , marginLeft: "20px"}} onClick={handleDelete}/>
                        </div>

                        {(clicked) ? (<>
                           <AddSpecs />

                        </>) : (null)}

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


            </>) : (<><h1>Error: Not Logged IN</h1></>)
         }

      </>
   )
}

export default AddSpecification1;