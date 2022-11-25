import React from 'react';
import img1 from './camera1.jpg';
import img2 from './camera2.jpg';
import img3 from './camera3.jpg';
import img4 from './camera4.jpg';
import './ProductPage.css';
import Thumbnail from './Thumbnail';
import ProductFeature from './ProductFeature';
import Navbar from '../Navbar/Navbar';
import ProductForm from './ProductForm';
class ProductMain extends React.Component{
    
    state = {
        products: [
            {
                "_id" :"1",
                "title": "Poly Product 1",
                "src": [
                    
                    localStorage.getItem("image1"),
                    localStorage.getItem("image2"),
                    localStorage.getItem('image3')
                    
                ],
                "description" : "Great Conference product which can be used in conference rooms, auditoriums. Great Conference product which can be used in conference rooms, auditoriums. Great Conference product which can be used in conference rooms, auditoriums.",
                "count" : 1,
                "features" :[
                    {
                        "name": "Feature 1",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 2",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 3",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 4",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 5",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 6",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 7",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 8",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 9",
                        "desc": "Very Good Product",
                    },
                    {
                        "name": "Feature 10",
                        "desc": "Very Good Product",
                    },
                ]
            }
        ],
        index: 0
    };
    
    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index : index})
        const images = this.myRef.current.children;
        for(let i=0;i<images.length;i++)
        {
            images[i].className = images[i].className.replace("active","");  
        }
        images[index].className = "active";
    };
    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }

    render(){
        const {products, index} = this.state;
        var products1 = JSON.parse(localStorage.getItem('products1'))
        console.log("abcd",products1)
        
        return(
            <>
            <Navbar/>
            <div className="app">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="" />
                            </div>
                            <div className="box">
                                
                                <Thumbnail images = {item.src} tab={this.handleTab} myRef = {this.myRef}/>
                                <div className="row">
                                    <h1>{products1.productName}</h1>
                                </div>
                               
                            </div>
                        </div>
                    ))
                }
            </div>
            
            {/* <ProductForm/> */}
            </>
        );
    }
}

export default ProductMain;