import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom';
import Aboutus from './aboutus/Aboutus';
import Solution from './Solution/Solution';
import Home1 from './Home/MainHomePage';
import ProductPage from './ProductsPage/ProductPage';
import MultiItemCarousel1 from './ProductCategory/ProductCategory';
import ContactSection from './ContactUs/ContactSection';
import Solcat from './Solcat/Solcat';
import AddSolution from './Admin/AddSolution';
import AddProduct from './Admin/AddProduct';
import AddBenefits from './Admin/AddBenefits';
import AddFeatures from './Admin/AddFeatures';
import AddSolCategory from './Admin/AddSolCategory';
import AddProductFeatures from './Admin/AddProductFeatures';
import AddProductHighlights from './Admin/AddProductHighlights';
import AddProductCategory from './Admin/AddProductCategory';
import AddHomeVideo from './Admin/AddHomeVideo';
import AddAchievements from './Admin/AddAchievements';
import AddHomeDescription from './Admin/AddHomeDescription';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  <BrowserRouter>
  <Routes>
    <Route path = '/' element = {<App/>}/>
    <Route path = '/aboutus' element = {<Aboutus/>}/>
    <Route path = '/solution/:category/:link' element = {<Solution/>}/>
    {/* <Route path = '/solution' element = {<Solution/>}/> */}
    <Route path = '/solutioncategory' element = {<Solcat/>}/>
    <Route path = '/product' element = {<ProductPage/>}/>
    <Route path = '/home' element = {<Home1/>}/>
    <Route path = '/contactus' element = {<ContactSection/>}/>
    <Route path = '/add-solution' element = {<AddSolution/>}/>
    <Route path = '/add-product' element = {<AddProduct/>}/>
    <Route path = '/add-solution-benefits' element = {<AddBenefits/>}/>
    <Route path = '/add-solution-features' element = {<AddFeatures/>}/>
    <Route path = '/add-solution-category' element = {<AddSolCategory/>}/>
    <Route path = '/add-product-feature' element = {<AddProductFeatures/>}/>
    <Route path = '/add-product-highlights' element = {<AddProductHighlights/>}/>
    <Route path = '/add-product-category' element = {<AddProductCategory/>}/>
    <Route path = '/add-home-video' element = {<AddHomeVideo/>}/>
    <Route path = '/add-achievements' element = {<AddAchievements/>}/>
    <Route path = '/add-home-description' element = {<AddHomeDescription/>}/>
    <Route path = '/productcategory' element = {<MultiItemCarousel1/>}/>
  </Routes>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
