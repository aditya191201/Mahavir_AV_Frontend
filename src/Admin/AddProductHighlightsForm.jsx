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
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
var title = ""
var description = ""
var name = ""
function AddProductHighlightsForm() {
    const [clicked1, setIsClicked1] = useState(false)
    const navigate = useNavigate();
    var isLogin = localStorage.getItem("login")
    var token = getCookie("token")
    // axios.defaults.headers.common['Authorization'] = "Bearer "+ token;
    // axios.defaults.headers.common['Accept'] = 'multipart/form-data'
    // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    console.log("token", token)
    const handleName = (event) => {
        name = event.target.value
        console.log(name)
    }
    const handleTitle = (event) => {
        title = event.target.value
        console.log(title)
    }
    const handleDescription = (event) => {
        description = event.target.value
        console.log(description)
    }

    const handleClick = () => {
        var formBody = {
            "title": title,
            "description": description,

        }
        axios.post(url + "/additionalfeatures/" + name,
            formBody, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + token
            }
        }

        ).then(function (response) {
            if (response.status == 200) {
                console.log("solution added")
                setIsClicked1(true)
                toast('Product Highlights Added Successfully', {
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
        axios.delete(url + "/deleteAdditionalFeatures/" + name + "/" + title, {
           headers: {
             "Content-Type": "multipart/form-data",
             "Authorization": "Bearer " + token
           }
         }).then(function (response) {
           if (response.status == 200) {
             console.log("DELETE", "Product Highlight")
             setIsClicked1(true)
             toast('Product Highlight Deleted Successfully', {
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
                    <div style={{ display: "flex" }}>
                        <div class="inputfield">
                            {/* <label>Product Number</label> */}
                            <input type="text" onChange={handleName} class="input" placeholder='Product Number' />
                        </div>
                        <div class="inputfield">
                            {/* <label>Highlight Name</label> */}
                            <input type="text" onChange={handleTitle} class="input" style={{ marginLeft: "20px" }} placeholder='Highlight Name' />
                        </div>
                        <div class="inputfield">
                            {/* <label>Feature Description</label> */}
                            <input type="text" class="input" onChange={handleDescription} placeholder="Description" style={{ marginLeft: "20px" }}></input>
                        </div>
                        <FontAwesomeIcon icon={faPlus} style={{ marginTop: "10px", marginLeft: "20px" }} onClick={handleClick} />
                        <FontAwesomeIcon icon={faTrash} style={{marginTop:"10px" , marginLeft: "20px"}} onClick={handleDelete}/>
                    </div>

                    {(clicked1)?(<AddProductHighlightsForm/>):(null)}

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

export default AddProductHighlightsForm;