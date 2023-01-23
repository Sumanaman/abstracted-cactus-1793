import React from 'react'

let c= JSON.parse(localStorage.getItem("c")) || 0;
const increment =()=>
{
  //  c++;
  //  console.log(c)
  //  localStorage.setItem("c",JSON.stringify(c))
}
const decrement =()=>
{
  //  c--;
  //  console.log(c)
  //  localStorage.setItem("c",JSON.stringify(c))
}

const clEar =()=>
{
  let container = document.getElementById("contain");
  container.innerHTML=null
  localStorage.clear();
  window.location.href="/"
}

const Cart = () => {
  return <div style={{
    marginBottom:"-175rem",
    width:"100%",
    height:"20rem",
  }}>
     {/* {alert("Your Cart is Empty ")}
     {alert("First Add Items in Your Cart")}
     {window.location.href="Home.jsx"} */}

<div id="contain" style={{
  width:"50%",
  height:"100%",
  margin:"auto",
  // border:'2px solid green',
  marginTop:"2rem",
  display:'flex',
  justifyContent:"space-around",
  alignItems:"center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}}>
<p style={{
  fontSize:"1.3rem",
  fontWeight:"bold"
}}>NIGHTINGALE </p>
<div style={{
  display:"flex",
  justifyContent:"space-between"
  }}>
  <button onClick={()=>
  {
    c++;
   console.log(c)
   localStorage.setItem("c",JSON.stringify(c))
  }} style={{
    padding:"10px",
    cursor:"pointer",
    fontSize:"2rem",
    border:"none",
    margin:"5px",
    color:"blue",
    borderRadius:"5px",
    fontWeight:"bold"
  }}>+</button>
  <button disabled={(c<=0)} onClick={()=>
  {
    c--;
   console.log(c)
   localStorage.setItem("c",JSON.stringify(c))
  }} style={{
    padding:"10px",
    cursor:"pointer",
    fontSize:"2rem",
    border:"none",
    margin:"5px",
    color:"blue",
    borderRadius:"5px",
    fontWeight:"bold"
  }}>-</button>
</div>
<img style={{
  width:"50%"
}} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842" alt="Error" />

</div><button style={{
  background:"blue",
  color:"white",
  padding:"10px",
  border:"none",
  marginTop:"1rem",
  borderRadius:"5px",
  cursor:"pointer",
  fontSize:"1.5rem",
  fontWeight:"bold"
}} onClick={()=>
{
  alert(`Order Successfully Placed`);
  alert("Thank You For Shopping !");
  clEar();
}}>Place Order</button>
  </div>
}

export default Cart;