'use client'

import { useEffect, useState } from "react";
import Link from "next/link"



// const getArData = async () => {
//   const url = 'https://ar-vr-news2.p.rapidapi.com/api/news';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '581624a9d7msh73295e7269bf67ap1ccfd2jsn82b40d9ab76c',
//       'X-RapidAPI-Host': 'ar-vr-news2.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }




function discover() {
    const [ardatas, setArdatas] = useState([])
    const [error, setError] = useState({})

    interface Ardata {
      title: string;
      id: number;
      img_link: string;
      link: string;
      
    }

    
    
 
    useEffect(() => {
      const url = 'https://ar-vr-news2.p.rapidapi.com/api/news';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '581624a9d7msh73295e7269bf67ap1ccfd2jsn82b40d9ab76c',
          'X-RapidAPI-Host': 'ar-vr-news2.p.rapidapi.com'
        }
      };
      fetch(url, options)
      .then(response => response.json())
    //  .then(res => console.log(res.data))
      .then(res => setArdatas(res.data.slice(0,25)))
   
      .catch(err => setError(err))
    }, [])
 
  return (
    <div>
         <div className='header'>
            <div className='h'>
              <h1 className='logo'>Virtual<span>lee</span></h1>
            </div>
              <div className='nav'>
              <Link href='/' className='link'>Home</Link>

              <Link href='/about' className='link'>About</Link>
                
                <Link href='/discover' className='link'>Latest news</Link>
                
              </div>
            
          </div>
      <div className="discov">
          <h1>Discover</h1>
          <div className="container__discover">
        {ardatas.map((ardata: Ardata) =>
        
          <div className="box">
          
            <div className="images">
            <img src={ardata.img_link} alt="image" />
            </div>
            <p>{ardata.title}</p>
            <h6 className="read">Read More:</h6>
            <Link href={ardata.link} className="lin" >{ardata.link}</Link>
          </div>
    
       
        )}
          
          </div>
         
          </div>
    </div>
  )
}

export default discover
