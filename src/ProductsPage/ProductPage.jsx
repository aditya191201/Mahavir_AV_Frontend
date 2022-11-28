import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import url from '../Url';
import ImageSlider from './ImageSlider';
import ProductData from './ProductData';
import ProductFeature from './ProductFeature';
import './ProductPage.css';

function ProductPage(){
    const[products1, setProducts] = useState([])
  const[isProductFetched , setIsProductFetched] = useState(false) 
  
  useEffect(()=>{
    if(!isProductFetched)
    {
      axios.get(url+"/getProducts/"+localStorage.getItem('modelNum')).then(function(response){
        if(response.status == 200){
          setProducts(response.data)
          setIsProductFetched(true)
          console.log(response.data)
          console.log("products" , products1)
        }
      }).catch(function(error){
        console.log("error",error)
      })
      
    }
    
  }) 
    localStorage.setItem("product", JSON.stringify(products1))
    
    localStorage.setItem("image1",""+products1.productImage1)
    console.log("image1",localStorage.getItem("image1"))
    localStorage.setItem("image2",products1.productImage2)
    localStorage.setItem("image3",products1.productImage3)
    localStorage.setItem("productname",products1.productName)
    console.log("features",products1.additionalFeatures)
    console.log("image abcd",localStorage.getItem("image1"))
    return(
        <>
        <Navbar/>
        <ProductData/>
        {/* <ProductMain/> */}
        {/* <NewTrial/> */}
        <ImageSlider/>
        <div>
                <div className="product_desc">
                    <p>
                    {products1.productHighlights}
                    </p>
                </div>
            </div>
            <div className="section-container">
                <div className="columns image1">
                    <img src={products1.productImage1} alt="" />
                </div>
                {(isProductFetched) ? (
                    <div className="producthigh">
                    <h1>Product Highlights</h1>
                    {
                        products1.additionalFeatures.map(feature=>(
                            <div className="productdesc1">
                                    <h2>
                                        {feature.title} : {feature.description}
                                    </h2>
                                </div>
                        ))
                    }
                </div>
                ) : (null)}
            </div>
            <br />
            <br />
            {/* <div className="youtube-container">
        <iframe width="560" height="315" src={products1.productVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <br />
         <br />
        </div> */}
            <ProductFeature/>
        </>
    )
}

export default ProductPage;