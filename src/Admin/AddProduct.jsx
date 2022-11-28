import axios from 'axios';
import React from 'react'
import './AddSolution.css';
import { getCookie } from '../Cookies';
import { ToastContainer,toast } from 'react-toastify';
import AddProductCategory from './AddProductCategory';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import AddProductFeatures from './AddProductFeatures'
import AddProductHighlights from './AddProductHighlights';
import { useState } from 'react';
import url from '../Url';
var modelNumber = ""
var name = ""
var highlights = ""
var price = ""
var img1 = ""
var img2 = ""
var img3 = ""
var video = ""
var category = ""
var images = ""

function AddProduct(){
   const[clicked , setIsClicked] = useState(false)
   const[clicked1 , setIsClicked1] = useState(false)
   var token = getCookie("token")
   // axios.defaults.headers.common['Authorization'] = "Bearer "+ token;
   // axios.defaults.headers.common['Accept'] = 'multipart/form-data'
   // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
   console.log("token" , token)
   const handleModelNumber =(event)=>{
      modelNumber = event.target.value
      console.log(modelNumber)
   }
   const handleName =(event)=>{
      name = event.target.value
      console.log(name)
   }
   const handleHighlights =(event)=>{
      highlights = event.target.value
      console.log(highlights)
   }
   const handlePrice =(event)=>{
      price = event.target.value
      console.log(price)
   }
   const handleImg1 =(event)=>{
      img1 = event.target.value
      console.log(img1)
   }
   const handleImg2 =(event)=>{
      img2 = event.target.value
      console.log(img2)
   }
   const handleImg3 =(event)=>{
      img3 = event.target.value
      console.log(img3)
   }
   const handleVideo =(event)=>{
      video = event.target.value
      console.log(video)
   }
   const handleCategory =(event)=>{
    category = event.target.value
    console.log(category)
 }
 const handleImages =(event)=>{
    images = event.target.value
    console.log(images)
 }
  const handleClick1= ()=> {
   setIsClicked(true)
  }
  const handleClick2 = () =>{
   setIsClicked1(true)
  }
   const handleClick = () =>{
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
         "imgSrc": images
   }
   axios.post(url+"/add-product",
   formBody, {
      headers: {
      "Content-Type" : "multipart/form-data",
      "Authorization" : "Bearer "+ token
}}
   
   ).then(function (response) {
      if (response.status == 200) {
         console.log("product added")
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
      }}).catch(function(error){
         console.log("error",error)
      })
      
   }
   
   
    return(
        <>
        <AdminNavbar/>
        <div className="form-contain">
            <div class="wrapper-form">
    <div class="title-form">
      Add Product
    </div>
    <div class="form-1">
       <div class="inputfield">
          <label>Model Number</label>
          <input type="text" onChange={handleModelNumber} class="input" required/>
       </div>  
        <div class="inputfield">
          <label>Product Name</label>
          <textarea class="textarea" onChange={handleName}></textarea>
       </div>  
       <div class="inputfield">
          <label>Product Highlights</label>
          <input type="text" onChange={handleHighlights} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Product Price</label>
          <input type="text" onChange={handlePrice} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Product Image 1</label>
          <input type="text" onChange={handleImg1} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Product Image 2</label>
          <input type="text" onChange={handleImg2} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Product Image 3</label>
          <input type="text" onChange={handleImg3} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Video Link</label>
          <input type="text" onChange={handleVideo} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Product Category</label>
          <input type="text" onChange={handleCategory} class="input"/>
       </div> 
       <div class="inputfield">
          <label>Images</label>
          <input type="text" onChange={handleImages} class="input"/>
       </div> 
        
      <div class="inputfield">
        <input type="submit" value="Register" onClick={handleClick} class="btn"/>
      </div>
      <div>
         <div class="inputfield">
        <input type="submit" value="Add Feature" onClick={handleClick1} class="btn"/>
      </div>
      <div class="inputfield">
        <input type="submit" value="Add Highlight" onClick={handleClick2} class="btn"/>
      </div>
      
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
    {(clicked)? (<AddProductFeatures/>
    ):(null)}
    {(clicked1) ? (<AddProductHighlights/>) : (null)}
        </>
    )
}

export default AddProduct;

