import axios from 'axios';
import React, { useEffect } from 'react'
import './AddSolution.css';
import { getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import { useState } from 'react';
import url from '../Url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AddProductFeatureForm from './AddProductFeatureForm';
import AddProductHighlightsForm from './AddProductHighlightsForm';
import AddSpecs from './AddSpecs';
import AddProductFeatureForm1 from './AddProductFeatureForm1';
import AddProductHighlightsForm1 from './AddProductHighlightsForm1';
import AddSpecs1 from './AddSpecs1';
var modelNumber = ""
var name = ""
var highlights = ""
var price = ""
var img1 = ""
var img2 = ""
var img3 = ""
var video = ""
var category = ""
var broucher = ""

function AddProduct() {
   const [clicked, setIsClicked] = useState(false)
   const [clicked1, setIsClicked1] = useState(false)
   const [clicked3, setIsClicked3] = useState(false)
   const [productCat, setProductsCat] = useState([])
   const [isProductCatFetched, setIsProductCatFetched] = useState(false)
   var isLogin = localStorage.getItem("login")
   var token = getCookie("token")
   // axios.defaults.headers.common['Authorization'] = "Bearer "+ token;
   // axios.defaults.headers.common['Accept'] = 'multipart/form-data'
   // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
   console.log("token", token)
   useEffect(() => {
      if (!isProductCatFetched) {
         axios.get(url + "/getproductcategory").then(function (response) {
            if (response.status == 200) {
               setProductsCat(response.data)
               setIsProductCatFetched(true)
               console.log(response.data)
               console.log("products", productCat)
            }
         }).catch(function (error) {
            console.log("error", error)
         })
      }
   })
   const navigate = useNavigate()
   const handleModelNumber = (event) => {
      modelNumber = event.target.value
      console.log(modelNumber)
   }
   const handleName = (event) => {
      name = event.target.value
      console.log(name)
   }
   const handleHighlights = (event) => {
      highlights = event.target.value
      console.log(highlights)
   }
   const handlePrice = (event) => {
      price = event.target.value
      console.log(price)
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
   const handleVideo = (event) => {
      video = event.target.value
      console.log(video)
   }
   const handleCategory = (event) => {
      category = event.target.value
      console.log(category)
   }
   
   const handleBroucher = (event) => {
      broucher = event.target.value
      console.log(broucher)
   }
   const handleClick1 = () => {
      setIsClicked(true)
   }
   const handleClick2 = () => {
      setIsClicked1(true)
   }
   const handleClick3 = () => {
      setIsClicked3(true)
   }
   const handleClick = () => {
      var formBody = {
         "modelNumber": modelNumber,
         "productName": name,
         "productHighlights": highlights,
         "productPrice": price,
         "productImage1": img1,
         "productImage2": img2,
         "productImage3": img3,
         "videoLink": video,
         "productCategory": category,
         "brochureLink": broucher
      }
      axios.post(url + "/add-product",
         formBody, {
         headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
         }
      }

      ).then(function (response) {
         if (response.status == 200) {
            console.log("product added")
            localStorage.setItem("localproduct", modelNumber)
            toast('Product Added Successfully', {
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
            (isLogin == "true") ? (
               <>
                  <AdminNavbar />
                  <div className="form-contain">
                     <div class="wrapper-form" style={{ maxWidth: "1100px" }}>
                        <div class="title-form">
                           Add Product
                           <br /><br />
                        </div>
                        <div class="form-1">
                           <div style={{ display: "flex" }}>
                              <div class="inputfield">
                                 <label>Model Number</label>
                                 <input type="text" onChange={handleModelNumber} class="input" required />
                              </div>
                              <div class="inputfield" style={{ marginLeft: "150px" }}>
                                 <label>Product Name</label>
                                 <input type="text" class="input" onChange={handleName}></input>
                              </div>
                           </div>
                           <div style={{ display: "flex" }}>
                              <div class="inputfield">
                                 <label>Product Description</label>
                                 <input type="text" onChange={handleHighlights} class="input" />
                              </div>
                              <div class="inputfield" style={{ marginLeft: "150px" }}>
                                 <label>Product Price</label>
                                 <input type="text" onChange={handlePrice} class="input" />
                              </div>
                           </div>
                           <div style={{ display: "flex" }}>
                              <div class="inputfield">
                                 <label>Product Image 1</label>
                                 <input type="text" onChange={handleImg1} class="input" />
                              </div>
                              <div class="inputfield" style={{ marginLeft: "150px" }}>
                                 <label>Product Image 2</label>
                                 <input type="text" onChange={handleImg2} class="input" />
                              </div>
                           </div>
                           <div style={{ display: "flex" }}>
                              <div class="inputfield">
                                 <label>Product Image 3</label>
                                 <input type="text" onChange={handleImg3} class="input" />
                              </div>
                              <div class="inputfield" style={{ marginLeft: "150px" }}>
                                 <label>Video Link</label>
                                 <input type="text" onChange={handleVideo} class="input" />
                              </div>
                           </div>
                           <div style={{ display: "flex" }}>
                              <div class="inputfield">
                                 <label>Category</label>
                                 {/* <input type="text" onChange={handleCategory} class="input" /> */}
                                 <select name="category" id="category" onChange={handleCategory} style={{ marginRight: "50px" }}>
                                    <option>Select Category</option>
                                    {productCat.map(cat => (
                                       <option value={cat.title}>{cat.title}</option>
                                    ))}
                                 </select>
                                 <FontAwesomeIcon icon={faPlus} onClick={() => navigate("/add-product-category")} />
                              </div>
                              <div class="inputfield" style={{ marginLeft: "140px" }}>
                                 <label>Broucher</label>
                                 <input type="text" onChange={handleBroucher} class="input" />
                              </div>
                           </div>


                           <div class="inputfield" style={{marginTop:"20px"}}>
                              <input type="submit" value="Register" onClick={handleClick} class="btn" />
                           </div>
                           <div>
                              <div class="inputfield">
                                 <input type="submit" value="Add Feature" onClick={handleClick1} class="btn" />
                              </div>
                              {(clicked) ? (<AddProductFeatureForm1 />
                              ) : (null)}
                              <div class="inputfield">
                                 <input type="submit" value="Add Highlight" onClick={handleClick2} class="btn" />
                              </div>
                              {(clicked1) ? (<AddProductHighlightsForm1 />) : (null)}
                              <div class="inputfield">
                                 <input type="submit" value="Add Specifications" onClick={handleClick3} class="btn" />
                              </div>
                              {(clicked3) ? (<AddSpecs1 />) : (null)}
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
                  {/* <AddProductHighlights/>
    <AddProductFeatures/> */}


               </>
            ) : (<>
               <div>
                  Error: Not Logged In
               </div>
            </>)
         }

      </>
   )
}

export default AddProduct;

