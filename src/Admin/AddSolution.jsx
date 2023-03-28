import axios from 'axios';
import React from 'react'
import './AddSolution.css';
import { getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import { useState } from 'react';
import url from '../Url';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddBenefitForm from './AddBenefitForm';
import AddFeatureForm from './AddFeatureForm';
var title = ""
var description = ""
var coverimg = ""
var category = ""
var img1 = ""
var img2 = ""
var img3 = ""
var product = ""


function AddSolution() {
   var isLogin = localStorage.getItem("login")
   const [clicked1, setIsClicked] = useState(false)
   const [clicked2, setIsClicked1] = useState(false)
   const [solutioncategory, setSolutioncategory] = useState([])
   const [isSolutioncategoryFetched, setIsSolutioncategoryFetched] = useState(false)
   const navigate = useNavigate();
   var token = getCookie("token")
   useEffect(() => {
      if (!isSolutioncategoryFetched) {
         axios.get(url + "/getsolcategorydetail").then(function (response) {
            if (response.status == 200) {
               setSolutioncategory(response.data)
               setIsSolutioncategoryFetched(true)
               //  localStorage.setItem("solution",solution)
               console.log(response.data)
               console.log("solutioncategory", solutioncategory)
            }
         }).catch(function (error) {
            console.log("error", error)
         })
      }
   })
   // axios.defaults.headers.common['Authorization'] = "Bearer "+ token;
   // axios.defaults.headers.common['Accept'] = 'multipart/form-data'
   // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
   console.log("token", token)
   const handleTitle = (event) => {
      title = event.target.value
      console.log(title)
   }
   const handleDescription = (event) => {
      description = event.target.value
      console.log(description)
   }
   const handleCoverimg = (event) => {
      coverimg = event.target.value
      console.log(coverimg)
   }
   const handleCategory = (event) => {
      category = event.target.value
      console.log(category)
   }
   const handleImg1 = (event) => {
      img1 = event.target.value
      console.log(img1)
   }
   const handleImg2 = (event) => {
      img2 = event.target.value
      console.log(img2)
   }
   const handleImg3 = (event) => {
      img3 = event.target.value
      console.log(img3)
   }
   const handleProducts = (event) => {
      product = event.target.value
      console.log(product)
   }
   const handleClick1 = () => {
      setIsClicked(true)
   }
   const handleClick2 = () => {
      setIsClicked1(true)
   }

   const handleClick = () => {

      console.log("inside handle click", product)
      var formBody = {
         "title": title,
         "description": description,
         "coverimg": coverimg,
         "solcategory": category,
         "solimg1": img1,
         "solimg2": img2,
         "solimg3": img3,
         "productsused": product,
      }
      axios.post(url + "/add-solution",
         formBody, {
         headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
         }
      }

      ).then(function (response) {
         if (response.status == 200) {
            console.log("solution added")
            toast('Solution Added Successfully', {
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


   return (
      <>
         {
            (isLogin == "true") ? (<>
               <AdminNavbar />
               <div className="form-contain">
                  <div class="wrapper-form" style={{ maxWidth: "900px" }}>
                     <div class="title-form">
                        Add Solution
                        <br /><br />
                     </div>
                     <div class="form-1">
                        <div style={{ display: "flex" }}>
                           <div class="inputfield">
                              <label>Solution Title</label>
                              <input type="text" onChange={handleTitle} class="input" />
                           </div>
                           <div class="inputfield" style={{ marginLeft: "20px" }}>
                              <label>Description</label>
                              <input type="text" class="input" onChange={handleDescription} ></input>
                           </div>
                        </div>
                        <div style={{ display: "flex" }}>
                           <div class="inputfield">
                              <label>Cover Image</label>
                              <input type="text" onChange={handleCoverimg} class="input" />
                           </div>
                           <div class="inputfield" style={{ marginLeft: "15px" }}>
                              <label>Category</label>
                              {/* <input type="text" onChange={handleCategory} class="input" /> */}
                              <select name="solcategory" id="solcategory" onChange={handleCategory} style={{ marginRight: "30px" }}>
                                 <option>Select Category</option>
                                 {solutioncategory.map(cat => (
                                    <option value={cat.category}>{cat.category}</option>
                                 ))}
                              </select>
                              <FontAwesomeIcon icon={faPlus} onClick={() => navigate("/add-solution-category")} />
                           </div>
                        </div>
                        <div style={{ display: "flex" }}>
                           <div class="inputfield">
                              <label>Image 1</label>
                              <input type="text" onChange={handleImg1} class="input" />
                           </div>
                           <div class="inputfield" style={{ marginLeft: "20px" }}>
                              <label>Image 2</label>
                              <input type="text" onChange={handleImg2} class="input" />
                           </div>
                        </div>
                        <div style={{ display: "flex" }}>
                           <div class="inputfield">
                              <label>Image 3</label>
                              <input type="text" onChange={handleImg3} class="input" />
                           </div>
                           <div class="inputfield" style={{ marginLeft: "20px" }}>
                              <label>Products Used</label>
                              <input type="text" onChange={handleProducts} class="input" />
                           </div>
                        </div>


                        <div class="inputfield">
                           <input type="submit" value="Register" onClick={handleClick} class="btn" />
                        </div>
                        <div class="inputfield">
                           <input type="submit" value="Add Benefits" onClick={handleClick1} class="btn" />
                        </div>
                        {(clicked1) ? (<AddBenefitForm />
                        ) : (null)}
                        <div class="inputfield">
                           <input type="submit" value="Add Features" onClick={handleClick2} class="btn" />
                        </div>
                        {(clicked2) ? (<AddFeatureForm />
                        ) : (null)}
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
               {/* <AddBenefits/>
    <AddFeatures/> */}


            </>) : (<><h1>Error: Not Logged IN</h1></>)
         }

      </>
   )
}
export default AddSolution;

