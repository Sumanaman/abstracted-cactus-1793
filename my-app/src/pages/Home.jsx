// import axios from "axios";

import { useState,useEffect } from "react";




const getData =()=>
{
  return fetch (`https://dummyjson.com/products/search?q=laptop`).then((res)=> res.json());
};


// const options = {
//   method: 'GET',
//   url: 'https://laptopdb1.p.rapidapi.com/companies',
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'laptopdb1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data); 
// }).catch(function (error) {
// 	console.error(error);
// });


const Home = () => 
{
  const [data,setData]=useState({});
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(false);

const fetchUpdate = ()=>
{
   setLoading(true);
   getData()
   .then((data)=>setData(data))
   .catch((err)=>setErr(true))
   .finally(()=>setLoading(false));
};


useEffect(()=>
{
   fetchUpdate()
},[]);

console.log(data.products);

return loading ? (
  <h1>Loading......</h1> ) :
  err ? (
    <h1>Refresh after 5 Seconds !</h1> ) :
    (
      <div style={{
        width:"95%",
        height:"50rem",
        margin:"auto",
        marginTop:"50px",
        marginBottom:"50px",
        padding:"5px"
        // border:"2px solid green",
      }}>
     <div style={{
        width:"95%",
        height:"auto",
        margin:"auto",
        display:"flex",
      }}>
        <div style={{
          width:"35%",
          position:"absolute"
        }}>
        <p style={{
          width:"70%",
            color:"#444",
            fontSize:"1.5rem",
            // border:"2px solid green",
            textAlign:"left"
        }}>REPUBLIC DAY OFFERS</p>
        <p style={{
            width:"70%",
            color:"#444",
            fontSize:"2rem",
            textAlign:"left",
            marginTop:"-15px",
            marginBottom:"-10px"
        }}>Be Free to Be More</p>
        <p style={{
          width:"100%",
          height:"3rem",
          textAlign:"left",
          cursor:"pointer",
        }}>Get 10% cashback up to <span style={{
         color:"#0672cb"
        }}>Rs</span> 5,000 on citi cards & 2 years onsite warranty at <span style={{
          color:"#0672cb"
         }}>Rs</span> 1* <div style={{
          width:"1rem",
          height:"1rem",
          borderRadius:"50%",
          border:"1px solid #0672cb",
          textAlign:"center",
          margin:"auto", 
          marginTop:"-15px",
          marginLeft:"125px",
          cursor:"pointer"
         }}>
          <span style={{
            color:"#0672cb",
            fontWeight:"bold",
          }}>i</span></div> </p>
        <div style={{
          width:"50%",
          display:"flex",
          justifyContent:"space-between"
      }}>
          <button style={{
            padding:"10px",
            fontSize:"1rem",
            backgroundColor:"#0063c8",
            border:"none",
            color:"white",
            cursor:"pointer"
            // color:"#0063c8"
          }}>Shop Deals</button>
          <button style={{
            padding:"10px",
            fontSize:"1rem",
            backgroundColor:"white",
            border:"1px solid #0063c8",
            cursor:"pointer",
            color:"#0063c8"
          }}> Monitor Deals</button>
          </div>
        </div>
        <img style={{
          width:"100%",
          height:"100%",
          marginTop:"-10px"
      }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/republic-day-cons-dell-xps-9315t-uhp-2304-12-in-homepage-hero-lf-2400x696-lr.png?fmt=pjpg&pscan=auto&scl=1&hei=696&wid=2400&qlt=100&resMode=sharp2&size=2400,696&op_usm=1.75,0.3,2,0" alt="Error" />
      </div>

      
{/* sticky Contact Us */}

      {/* <div style={{
        width:"95%",
        margin:"auto",
        display:"flex",
        flexDirection:"row-reverse",
        position:"fixed"
      }}>
      <div style={{
          width:"10rem",
          height:"3rem",
            backgroundColor:"#0063c8",
            border:"none",
            color:"white",
            cursor:"pointer",
            fontSize:"1.2rem",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
          }}>
        <img style={{
          width:"2rem",
          height:"2rem",
            borderRadius:"40%"
        }} src="https://th.bing.com/th/id/OIP.75ZtLvJCC893G47VjE4zxAHaHa?w=215&h=215&c=7&r=0&o=5&pid=1.7" alt="Error"/>
        <span >Contact Us</span>
      </div>
      </div> */}
     <div style={{
      border:"2px solid green"
     }}>3 option   </div>
      </div>
    )

}

export default Home;