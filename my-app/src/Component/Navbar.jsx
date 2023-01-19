import  { NavLink } from "react-router-dom";

const links = [
  {path:"/",title:"Home"},
  {path:"/signin",title:"Signin"},
  {path:"/contact",title:"Contact"},
  {path:"/language",title:"Language"},
  {path:"/cart",title:"Cart"}
];


// const  appened = ()=>
// {
//   console.log("Ganesh")
// }

// const hello = ()=>
// {
//   console.log("Ganesh")
// }

function Navbar  ()

{
  return (
    <div style={{

        width:"95%",
        height:"200px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"10px",
        borderRadius:"5px",
        margin:"auto",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
      >
<img src="https://www.bing.com/th?id=OIP.Wh9TiZzhZWnJkaYmFTnc4AHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Error" 
style={
  {
    cursor:"pointer"
  }
}/>
<input type="text"  placeholder="Search Dell" style={
  {
    // onChange={hello}
    padding:"5px 40px",
    cursor:"pointer"
  }
}/>
<img src="https://www.bing.com/th?id=OIP.UcEnmjkins9Evx4EGa6PIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Error" style={
  {
    width:"1.5rem",
    marginLeft:"-6rem",
    borderRadius:"50%",
    cursor:"pointer"
  }
}/>
{links.map((link)=>(
  <NavLink
  style={({isActive})=>{
    return isActive
    ? {textDecoration:"none",color:"teal"}
    : {textDecoration:"none",color:"black"};
  }}
  key={link.path}
  to={link.path}
  > {link.title}
  </NavLink>
))}
  </div>
  );
}

export default Navbar;


