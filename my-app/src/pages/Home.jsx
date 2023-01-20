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
      <>
        {/* {data.products ?.data.products?.map((ele)=>
        {
           <div key={ele.id}>
            <img src={ele.images} alt="" />
           </div>
        })} */}
      </>
    )

}

// const Home = () => {

//   return <h1>Home1</h1>;

// }

export default Home;