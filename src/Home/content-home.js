import React from "react";
import './contenthome.css';
import './headcontent.css';

import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function ContentSZ()
{

    const navigate = useNavigate()
  const[homeCover, setHomeCover] = useState([])
  const[isHomeCoverFetched , setIsHomeFetched] = useState(false) 
  useEffect(()=>{
    if(!isHomeCoverFetched)
    {
      axios.get("http://localhost:8080/getCompanyDescription").then(function(response){
        if(response.status == 200){
          setHomeCover(response.data)
          setIsHomeFetched(true)
          console.log(response.data)
          console.log("products" , homeCover)
        }
      }).catch(function(error){
        console.log("error",error)
      })
    }
  }) 
    return(
        <div>
            {/* <h1 className="head-content">WE BELIEVE IN</h1>
            <p class="content-home">Providing you with a technologically-enabled 
        workspace. That is why our long-term goals include 
        reaching to every corner so that individuals, small 
        companies, as well as multinational organizations 
        can avail of our services. We are working to 
        strengthen our services and offer tailor-made 
        solutions to our clients. Put your trust on us and we 
        promise to deliver.</p>
            
            <h1 className="head-content">IN THE COMING YEARS,WE LOOK TOWARDS</h1>
            <p class="content-home">putting our insights of introducing innovative ideas 
                    into action and designing a future-driven 
                    workspace. We match our strategic approach with 
                    the customer’s requirements to offer cost-effective, 
                    technology-enabled viable AV and IT solutions to 
                    our customers.</p> */}
                    {homeCover.map(cover=>(
                        <div>
                            <h1 className="head-content">{cover.title}</h1>
                            <p className="content-home">{cover.description}</p>
                        </div>
                    ))}
        </div>
    )
}

export default ContentSZ;