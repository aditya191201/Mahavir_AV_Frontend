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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
var title = ""
var description = ""
var coverimg = ""
var name = ""
function AddBenefitForm() {
    const [clicked1, setIsClicked] = useState(false)
    var isLogin = localStorage.getItem("login")
    const navigate = useNavigate();
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
    const handleCoverimg = (event) => {
        coverimg = event.target.value
        console.log(coverimg)
    }

    const handleClick = () => {
        var formBody = {
            "name": title,
            "description": description,
            "icon": coverimg,

        }
        axios.post(url + "/solutionbenefits/" + name,
            formBody, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + token
            }
        }

        ).then(function (response) {
            if (response.status == 200) {
                console.log("solution added")
                setIsClicked(true)
                toast('Solution Benefit Added Successfully', {
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
                        <div style={{ display: "flex" }}>
                            <div class="inputfield">
                                {/* <label>Solution Name</label> */}
                                <input type="text" onChange={handleName} class="input" placeholder='Solution Name' />
                            </div>
                            <div class="inputfield">
                                {/* <label>Benefit Name</label> */}
                                <input type="text" onChange={handleTitle} class="input" placeholder='Benefit Name' style={{ marginLeft: "20px" }} />
                            </div>
                            <div class="inputfield">
                                {/* <label>Description</label> */}
                                <input type="text" class="input" onChange={handleDescription} placeholder="Description" style={{ marginLeft: "20px" }}></input>
                            </div>
                            <div class="inputfield">
                                {/* <label>Icon</label> */}
                                <input type="text" onChange={handleCoverimg} class="input" placeholder='Icon URL' style={{ marginLeft: "20px" }} />
                            </div>
                            <FontAwesomeIcon icon={faPlus} style={{ marginTop: "10px", marginLeft: "20px" }} onClick={handleClick} />
                        </div>
                        {(clicked1) ? (<AddBenefitForm />) : (null)}

                        {/* <div class="inputfield">
                              <input type="submit" value="Register" onClick={handleClick} class="btn" />
                           </div>
                           <div class="inputfield">
                              <input type="submit" value="Add more Benefits" onClick={handleClick1} class="btn" />
                           </div> */}



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
                ) : (<><h1>Error: Not Logged IN</h1></>)
            }

        </>
    )
}

export default AddBenefitForm;