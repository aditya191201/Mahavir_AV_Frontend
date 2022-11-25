import React from 'react'
import img1 from './polyimg4.png';
import img2 from './polyimg1.webp';
import img3 from './polyimg2.webp';
import img4 from './polyimg3.webp';
import './ProductFeatures.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function ProductFeature1() {
    const [products1, setProducts] = useState([])
    const [isProductFetched, setIsProductFetched] = useState(false)
    useEffect(() => {
        if (!isProductFetched) {
            axios.get("http://localhost:8080/getProducts/"+localStorage.getItem('modelNum')).then(function (response) {
                if (response.status == 200) {
                    setProducts(response.data)
                    setIsProductFetched(true)
                    console.log(response.data)
                    console.log("products", products1)
                }
            }).catch(function (error) {
                console.log("error", error)
            })

        }

    })
    const features = [
        {
            "image": img1,
            "name": "STUDIO QUALITY VIDEO",
            "desc": "Bring people together. Launch big ideas. And make sure everyone at the table can hear and be heard. In today’s world people in the same  meeting aren’t always in the same room—but they’ll feel like they are"
        },
        {
            "image": img3,
            "name": "STUDIO QUALITY AUDIO",
            "desc": "Bring people together. Launch big ideas. And make sure everyone at the table can hear and be heard. In today’s world people in the same  meeting aren’t always in the same room—but they’ll feel like they are"
        },
        {
            "image": img4,
            "name": "STUDIO QUALITY SOLUTIONS",
            "desc": "Bring people together. Launch big ideas. And make sure everyone at the table can hear and be heard. In today’s world people in the same  meeting aren’t always in the same room—but they’ll feel like they are"
        },
    ]
    return <>
        <div className="margin">

        </div>
        {
            (isProductFetched) ? (
                products1.productDescriptions.map(description => (
                    <div className="features-container">
                        <div>
                            <div className="feature-title">
                                <h1>{description.title}</h1>
                            </div>
                            <div className="feature-desc">
                                <p>{description.description}</p>
                            </div>
                        </div>
                        <div className="features-image">
                            <img src={description.image} alt="" />
                        </div>
                    </div>
                ))
            ) : (null)
        }
    </>
}

export default ProductFeature1