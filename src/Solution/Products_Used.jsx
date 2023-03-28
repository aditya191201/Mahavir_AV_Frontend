import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../ProductCategory/ProductCarousal.css';
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../Url';
import Footer from '../FooterPage/Footer';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <FontAwesomeIcon icon={faLessThan} style={{ color: 'black', fontSize: '30px' }}/>
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <FontAwesomeIcon icon={faGreaterThan} style={{ color: 'black', fontSize: '30px' }}/>
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const ProductsUsed = () => {
  const navigate = useNavigate();
  const[solution,setSolution] = useState([])
  const[isSolutionFetched, setIsSolutionFetched] = useState(false)
  useEffect(()=>{
    
    // if(!isProductCatFetched)
    // {
    //   axios.get(url+"/getproductcategory").then(function(response){
    //     if(response.status == 200){
    //       setProductsCat(response.data)
    //       setIsProductCatFetched(true)
    //       console.log(response.data)
    //       console.log("products" , productCat)
    //     }
    //   }).catch(function(error){
    //     console.log("error",error)
    //   })
    // }
    if(!isSolutionFetched)
      {
         axios.get(url+"/getSolutions/"+localStorage.getItem('solname')).then(function(response){
        if(response.status == 200){
          setSolution(response.data)
          setIsSolutionFetched(true)
         //  localStorage.setItem("solution",solution)
          console.log(response.data)
          console.log("solution" , solution)
        }
      }).catch(function(error){
        console.log("error",error)
      })
      }
  }) 
  function handleClick(item){
    console.log("In item....")
    var modelnum = item.modelNum
    console.log("inside handle click",item)
    localStorage.setItem("img",item.productimg)
    localStorage.setItem('modelNum',modelnum)
    console.log("model number",modelnum)
    navigate('/product/'+modelnum);
  }

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }
  const Card = ({ item }) => {

    return (
      <div style={{ textAlign: 'center' }}>
        <img
          className='multi__image'
          src={item.productImage}
          alt=''
          style={{
            width: '100%',
            height: '170px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
        {/* style={{ fontSize: '14px', padding: '5px 0' ,maxLines: 1, textOverflow: Ellipsis}} */}
        <p className='text-product'>{item.productName}</p>
        <button style={{ fontSize: '16px', padding: '5px 0', color: 'green' }} onClick={()=>handleClick(item)} >
          Read More
        </button>
        {/* <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
          
        </p> */}
      </div>
    );
  };
  return (
    
    // <div style={{ margin: '30px' }} className='carousel'>
    //   <h1></h1>
    //   <Slider {...carouselProperties}>
    //     {multiData.map((item) => (
    //       <Card item={item} />
    //     ))}
    //   </Slider>
    // </div>
    <>
    {/* <Navbar/> */}
      
   
    {
        // productCat.map(data1 => (
        //     <div style={{ margin: '30px' }} className='carousel'>
        //         <h1>{data1.title}</h1>
        //         <Slider {...carouselProperties}>
        //             {/* {
        //                 data1.images.map((image) => (
        //                     <Card item={image} />
        //                 ))
        //             } */}
        //             {
        //               data1.products.map(item1 =>(
        //                 <Card item ={item1}/>
        //               ))
        //             }
        //         </Slider>
        //     </div>
           
        // ))
        (solution.productused != null) ? (<>
            {
                    <div style={{margin: '30px'}} className="carousel">
                        <h1>Products Used</h1>
                        <Slider {...carouselProperties}>
                            {solution.productused.map(product => (
                                <Card item={product}/>
                            ))}
                        </Slider>
                    </div>
                
            }
        </>) : (null)
    }
     {/* <div>
              <Footer/>
     </div> */}
    </>
  );
};




export default ProductsUsed;