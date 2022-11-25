import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './newtrial.css';

const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

function NewTrial(){
    const[products1, setProducts] = useState([])
    const[isProductFetched , setIsProductFetched] = useState(false) 
    
    useEffect(()=>{
      if(!isProductFetched)
      {
        axios.get("http://localhost:8080/getProducts/1").then(function(response){
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
    return(
        <>
        <div class = "product-div-left">
                    <div class = "img-container">
                        
                            <img src={products1.productImage1} alt="" />
                    </div>
                    <div class = "hover-container">
                    <div><img src = {products1.productImage1}/></div>
                        <div><img src = {products1.productImage2}/></div>
                        <div><img src = {products1.productImage3}/></div>
                        {/* <div><img src = "https://m.media-amazon.com/images/I/4133zcLxL4L.jpg"/></div>
                        <div><img src = "https://m.media-amazon.com/images/I/81Wa5NOKYhL._SL1500_.jpg"/></div> */}
                    </div>
                </div>
        </>
    )

}

export default NewTrial;