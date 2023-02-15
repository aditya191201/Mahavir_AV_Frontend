import axios from "axios";
import React from "react";
import { getCookie } from "../Cookies";
import url from "../Url";
import './AddSolution.css';
import AdminNavbar from "./Admin Navbar/AdminNavbar";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var category = ""

function DeleteProductCatById(){
    const handleCategory =(event)=>{
        category = event.target.value
        console.log(category)
     }
    var token = getCookie("token")
    const handleClick = () => {
        axios.delete(url+"/deleteProductCategory/"+category, {
            headers: {
            "Content-Type" : "multipart/form-data",
            "Authorization" : "Bearer "+ token
      }}).then(function(response){
        if(response.status == 200){
            console.log("DELETE", "Product Category deleted")
            toast("Product Category "+category+" deleted successfully", {
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
      Delete Product Category By Category Name
    </div>
    <div class="form-1">
      <div class="inputfield">
        <br /><br /><br /><br /><br />
        <div class="inputfield">
          <label>Category Name</label>
          <input type="text" onChange={handleCategory} class="input"/>
       </div> 
        <input type="submit" value="Delete Product Category" onClick={handleClick} class="btn"/>
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

export default DeleteProductCatById