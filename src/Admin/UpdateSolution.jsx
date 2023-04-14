import axios from 'axios';
import React from 'react'
import './AddSolution.css';
import { getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './Admin Navbar/AdminNavbar';
import AddBenefits from './AddBenefits';
import AddFeatures from './AddFeatures';
import { useState } from 'react';
import url from '../Url';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
var title = ""
var description = ""
var coverimg = ""
var category = ""
var img1 = ""
var img2 = ""
var img3 = ""
var product = ""
var name = ""
var productsused = ""
function UpdateSolution() {
    var isLogin = localStorage.getItem("login")
    const [click, setIsClick] = useState(false)
    const [clicked1, setIsClicked] = useState(false)
    const [clicked2, setIsClicked1] = useState(false)
    const [solution, setSolution] = useState([])
    const [isSolutionFetched, setIsSolutionFetched] = useState(false)
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
    const handleName = (event) => {
        name = event.target.value
        console.log(name)
    }
    const getSolution = () => {
        if (!isSolutionFetched) {
            axios.get(url + "/getSolutions/" + name).then(function (response) {
                if (response.status == 200) {
                    setSolution(response.data)
                    setIsSolutionFetched(true)
                    //  localStorage.setItem("solution",solution)
                    console.log(response.data)
                    console.log("solution", solution)
                }
            }).catch(function (error) {
                console.log("error", error)
            })
        }
        
        

        solution.productused.map(product1 => (
            // (productsused == "") ? (productsused = productsused + product1.modelNum) : (productsused = productsused + ";" + product1.modelNum)
            productsused = productsused + product1.modelNum + ";"
        ))
        title = solution.title
        console.log("inside gelsol", title)
        description = solution.description
        coverimg = solution.coverimg
        category = solution.solcategory
        img1 = solution.solimg1
        img2 = solution.solimg2
        img3 = solution.solimg3
        product = productsused
        console.log("product used string" , productsused)
        setIsClick(true)
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
                        <div class="wrapper-form">
                            <div class="title-form">
                                Update Solution
                            </div>

                            <div class="form-1">
                                {(!click) ? (<>
                                    <div className="inputfield">
                                        <label>Solution Name</label>
                                        <input type="text" onChange={handleName} class="input" />
                                    </div>
                                    <div class="inputfield">
                                        <input type="submit" value="Register" onClick={getSolution} class="btn" />
                                    </div></>) : (<>
                                    {console.log("inside next page", solution)}
                                        <div class="inputfield">
                                            <label>Solution Title</label>
                                            <input defaultValue={solution.title} type="text"  class="input" />
                                        </div>
                                        <div class="inputfield">
                                            <label>Description</label>
                                            <textarea defaultValue={solution.description} class="textarea" onChange={handleDescription}></textarea>
                                        </div>
                                        <div class="inputfield">
                                            <label>Cover Image</label>
                                            <input defaultValue={solution.coverimg} type="text" onChange={handleCoverimg} class="input" />
                                        </div>
                                        <div class="inputfield">
                                            <label>Category</label>
                                            <input defaultValue={solution.solcategory} type="text" onChange={handleCategory} class="input" />
                                            
                                            <FontAwesomeIcon icon={faPlus} onClick={() => navigate("/add-solution-category")} />
                                        </div>
                                        <div class="inputfield">
                                            <label>Image 1</label>
                                            <input defaultValue={solution.solimg1} type="text" onChange={handleImg1} class="input" />
                                        </div>
                                        <div class="inputfield">
                                            <label>Image 2</label>
                                            <input defaultValue={solution.solimg2} type="text" onChange={handleImg2} class="input" />
                                        </div>
                                        <div class="inputfield">
                                            <label>Image 3</label>
                                            <input defaultValue={solution.solimg3} type="text" onChange={handleImg3} class="input" />
                                        </div>
                                        <div class="inputfield">
                                            <label>Products Used</label>
                                            <input defaultValue={productsused.substring(0,productsused.length-1)} type="text" onChange={handleProducts} class="input" />
                                        </div>

                                        <div class="inputfield">
                                            <input type="submit" value="Register" onClick={handleClick} class="btn" />
                                        </div>
                                        {/* <div class="inputfield">
                                            <input type="submit" value="Add Benefits" onClick={handleClick1} class="btn" />
                                        </div>

                                        <div class="inputfield">
                                            <input type="submit" value="Add Features" onClick={handleClick2} class="btn" />
                                        </div> */}
                                    </>)}



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
                    {/* {(clicked1) ? (<AddBenefits />
                    ) : (null)}
                    {(clicked2) ? (<AddFeatures />
                    ) : (null)} */}
                </>) : (<><h1>Error: Not Logged IN</h1></>)
            }

        </>
    )
}

export default UpdateSolution;

