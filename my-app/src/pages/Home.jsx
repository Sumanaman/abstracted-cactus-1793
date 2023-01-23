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

const handle=()=>
{
  alert("First Login ")
}
const handlereg=()=>
{
  alert("First Register Yourself ")
}
const added=(a)=>
{
  console.log(a);
  localStorage.setItem("c",JSON.stringify(a))
  alert("Item Added Successfully");
}

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
          <button  style={{
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

      <div style={{
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
      </div>



     <div style={{
      width:"96%",
      height:"auto",
      background:"#f3f3f3",
      margin:"auto",
      padding:"10px",
      cursor:"pointer"
     }}>
      <p style={{
        width:"20%",
        color:"#444",
        fontSize:"2rem"
      }}>Welcome Back</p>
      <div style={{
        width:"100%",
        height:"70%",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
      }}>
       <div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"50%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Best Seller</p>
        <hr />
        <div style={{
          width:"100%",
          display:"flex",
          justifyContent:"space-between",
        }}>
            <img style={{
              width:"30%"
            }} src=" https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png" alt="Error" />
            <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.3rem",
            }}>Get our best laptops for less .</p>
          </div>
          <p style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
          }}>Shop Now</p>
       </div>
       { <div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"100%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Laptop Buying Guide</p>
        <hr />
            <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.2rem"
            }}>Learn more about the types of Laptops & select the best model for your use .</p>
         <p style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
            marginTop:"3.5rem",
            width:"50%",
          }}>Learn More</p>
       </div> }
       {<div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"100%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Access My Account</p>
        <hr />
        <div style={{
          display:"flex",
          justifyContent:"space-between"
        }}>
           <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.2rem"
            }}>Sign in to your account to track & view your orders .</p>
          </div>
          <p onClick={handlereg} style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
          }}>Sign In</p>
       </div> }
      </div>
     </div>
     
     <div style={{
        width:"95%",
        height:"auto",
        margin:"auto",
        padding:"0.8rem",
         }}>
          <p style={{
            fontSize:"1.8rem"
          }}>Explore Dell Technologies </p>
          <div style={{
        width:"100%",
        height:"80%",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"15px",
        cursor:"pointer",
         }}>
            <div style={{
              height:"100%",
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/0117-poweredgenext2-703x423.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-40px",
                background:"black",
                position:"absolute"
              }}>
              <p style={{
                  width:"100%",
                  fontSize:"1.2rem",
                  textAlign:"left",
                  color:"white",
                  margin:"auto",
                  padding:"0px 5px",
                }}>New Dell PowerEdge of Servers <span style={{
                  marginLeft:"80px"
                }}>-></span></p>
              </div>
            </div>
            <div style={{
              height:"100%"
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/heroes/0811-apex-fod-banner-703x423.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-2.5rem",
                background:"black",
                position:"absolute",
              }}>
              <p style={{
                  width:"99%",
                  height:"1.8rem",
                  fontSize:"1.1rem",
                  textAlign:"left",
                  color:"white",
                  marginTop:"-0rem",
                  padding:"0px 5px",
                }}>Customizable Technology Subscriptions </p>
              </div>
            </div>
            <div style={{
              height:"100%"
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/0202-dtw2023-ebg-703x842.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-40px",
                background:"black",
                position:"absolute"
              }}>
              <p style={{
                  width:"100%",
                  fontSize:"1.2rem",
                  textAlign:"left",
                  color:"white",
                  margin:"auto",
                  padding:"0px 5px",
                }}>Register Now to Claim Your Gift<span style={{
                  marginLeft:"80px"
                }}>-></span></p>
              </div>
            </div>
          </div>
     </div>


     <div style={{
        width:"95%",
        height:"auto",
        margin:"auto",
         }}>
          <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
         }}>
            <div  style={{
        width:"100%",
        height:"auto",
        marginTop:"auto",
         }}>
            <p  style={{
        width:"100%",
        fontSize:"1rem"
         }}>ALIENWARE 27 GAMING MONITOR</p>
            <p style={{
        width:"100%",
        fontSize:"2rem",
        margin:"-10px 0px"
         }}>Outshine Everyone</p>
            <p style={{
        width:"100%",
         }}>Built-in bragging rightswith premium performance,<br />overclockable refresh rates up to 280HZ and more.</p>
            <div style={{
        width:"40%",
        display:"flex",
        justifyContent:"space-around",
        margin:"auto",
        alignItems:"center"
         }}>
              <p onClick={handle} style={{
        color:"#0063c8",
        fontSize:"1.3rem",
        cursor:"pointer"
         }}>Shop Now</p>
              <span style={{
                color:"grey",
         }}>|</span>
              <p style={{
        color:"#0063c8",
        fontSize:"1.3rem",
        cursor:"pointer"
         }}>Learn More</p>
            </div>
            </div>
            <img style={{
              width:"50%"
            }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842" alt="Error" />
          </div>
     </div>



{/* Dell option */}

     <div style={
      {
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
      }
         }>
          <div style={
      {
        width:"50%",
        margin:"auto",
        textAlign:"center",
        justifyContent:"center"
      }
         }>
            <p style={{
              width:"50%",
              fontSize:"2.5rem",
              margin:"auto",
              textAlign:"center",
            }}>Dell Support</p>
            <p style={{
              width:"60%",
              fontSize:"1.2rem",
              margin:"auto",
              textAlign:"center",
              justifyContent:"center"
            }}>Get your questions answered</p>
          </div>
          <div style={
      {
        width:"50%",
      }
         }>
          <div style={
      {
        width:"80%",
        margin:"auto",
        padding:"0.5rem",
        cursor:"pointer"
      }
         }>
                <div style={{
                  width:"60%",
                  height:"2rem",
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"left",
                }}>
                  <img style={{
                    width:"10%",
                  }} src="https://th.bing.com/th/id/OIP.o2767Qxel43QwPHsjk2MUwHaHa?pid=ImgDet&w=207&h=207&c=7" alt="Error" />
                  <span style={{
                    color:"#0063c8",
                    fontSize:"1.5rem"
                  }}>Contact Support</span>
                  </div>
                  <p style={{
                    width:"98%",
                    textAlign:"right"
                  }}>Let us assist you with any product or service questions</p>
              </div>
              <hr />
              <div style={
      {
        width:"80%",
        margin:"auto",
        padding:"0.5rem",
        cursor:"pointer"
      }
         }>
                <div style={{
                  width:"75%",
                  height:"2rem",
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"left",
                }}>
                <img style={{
                    width:"10%",
                  }}  src="https://sourceevents.com/wp-content/uploads/2021/07/checkmark-02-02-150x150.png" alt="Error" />
                   <span style={{
                    color:"#0063c8",
                    fontSize:"1.5rem"
                  }}>Warranty and Contracts</span>
                  </div>
                  <p style={{
                    width:"85%",
                    textAlign:"center"
                  }}>Check warranty of the product</p>
              </div>
              <hr /> 
              <div style={
      {
        width:"80%",
        margin:"auto",
        padding:"0.5rem",
        cursor:"pointer"
      }
         }>
                <div style={{
                  width:"62%",
                  height:"2rem",
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"left",
                }}>
                <img style={{
                    width:"10%",
                  }}  src="https://th.bing.com/th/id/R.ef3126e9af443eca3c97986616b07343?rik=dAow1U%2fiDahxUg&riu=http%3a%2f%2fwww.fleet365.com%2fwp-content%2fuploads%2f2018%2f04%2fchat.png&ehk=y6qwm%2fauoWJscx1w2BIOdyKSuEpArWAFa0Ip5E8y87c%3d&risl=&pid=ImgRaw&r=0" alt="Error" />
                  <span style={{
                    color:"#0063c8",
                    fontSize:"1.5rem"
                  }}>Product Support</span>
                  </div>
                  <p >Experties. Convenience.Quality Support.</p>
              </div>
              <hr /> 
              <div style={
      {
        width:"80%",
        margin:"auto",
        padding:"0.5rem",
        cursor:"pointer"
      }
         }>
                <div style={{
                  width:"75%",
                  height:"2rem",
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"left",
                }}>
                <img style={{
                    width:"10%",
                  }}  src="https://cdn4.iconfinder.com/data/icons/ui-standard/96/Setting-512.png" alt="Error" />
                   <span style={{
                    color:"#0063c8",
                    fontSize:"1.5rem"
                  }}>Drivers and Downloads</span>
                  </div>
                  <p style={{
                    width:"98%",
                    textAlign:"right"
                  }}>Let us assist you with any product or service questions</p>
              </div>
              <hr />
          </div>
     </div>

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


      <div style={{
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
      </div>



     <div style={{
      width:"96%",
      height:"auto",
      background:"#f3f3f3",
      margin:"auto",
      padding:"10px",
      cursor:"pointer"
     }}>
      <p style={{
        width:"20%",
        color:"#444",
        fontSize:"2rem"
      }}>Welcome Back</p>
      <div style={{
        width:"100%",
        height:"70%",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
      }}>
       <div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"50%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Best Seller</p>
        <hr />
        <div style={{
          width:"100%",
          display:"flex",
          justifyContent:"space-between",
        }}>
            <img style={{
              width:"30%"
            }} src=" https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png" alt="Error" />
            <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.3rem",
            }}>Get our best laptops for less .</p>
          </div>
          <p style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
          }}>Shop Now</p>
       </div>
       { <div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"100%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Laptop Buying Guide</p>
        <hr />
            <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.2rem"
            }}>Learn more about the types of Laptops & select the best model for your use .</p>
         <p style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
            marginTop:"3.5rem",
            width:"50%",
          }}>Learn More</p>
       </div> }
       {<div style={{
        padding:"5px 10px",
        background:"white",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       }}>
         <p style={{
           color:"#444",
          width:"100%",
          fontSize:"2rem",
          textAlign:"left"
        }}>Access My Account</p>
        <hr />
        <div style={{
          display:"flex",
          justifyContent:"space-between"
        }}>
           <p style={{
              width:"100%",
              height:"2rem",
              textAlign:"left",
              fontSize:"1.2rem"
            }}>Sign in to your account to track & view your orders .</p>
          </div>
          <p style={{
            color:"#0063c8",
            fontSize:"1.3rem",
            textAlign:"left",
          }}>Sign In</p>
       </div> }
      </div>
     </div>
     
     <div style={{
        width:"95%",
        height:"auto",
        margin:"auto",
        padding:"0.8rem",
         }}>
          <p style={{
            fontSize:"1.8rem"
          }}>Explore Dell Technologies </p>
          <div style={{
        width:"100%",
        height:"80%",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"15px",
        cursor:"pointer",
         }}>
            <div style={{
              height:"100%",
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/0117-poweredgenext2-703x423.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-40px",
                background:"black",
                position:"absolute"
              }}>
              <p style={{
                  width:"100%",
                  fontSize:"1.2rem",
                  textAlign:"left",
                  color:"white",
                  margin:"auto",
                  padding:"0px 5px",
                }}>New Dell PowerEdge of Servers <span style={{
                  marginLeft:"80px"
                }}>-></span></p>
              </div>
            </div>
            <div style={{
              height:"100%"
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/heroes/0811-apex-fod-banner-703x423.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-2.5rem",
                background:"black",
                position:"absolute",
              }}>
              <p style={{
                  width:"99%",
                  height:"1.8rem",
                  fontSize:"1.1rem",
                  textAlign:"left",
                  color:"white",
                  marginTop:"-0rem",
                  padding:"0px 5px",
                }}>Customizable Technology Subscriptions </p>
              </div>
            </div>
            <div style={{
              height:"100%"
            }}>
              <img style={{
                width:"100%",
                height:"100%",
              }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/0202-dtw2023-ebg-703x842.png?fmt=jpg&wid=582&hei=350&fit=constrain" alt="Error" />
              <div style={{
                width:"29.3%",
                height:"2.2rem",
                marginTop:"-40px",
                background:"black",
                position:"absolute"
              }}>
              <p style={{
                  width:"100%",
                  fontSize:"1.2rem",
                  textAlign:"left",
                  color:"white",
                  margin:"auto",
                  padding:"0px 5px",
                }}>Register Now to Claim Your Gift<span style={{
                  marginLeft:"80px"
                }}>-></span></p>
              </div>
            </div>
          </div>
     </div>


     <div style={{
        width:"95%",
        height:"auto",
        margin:"auto",
         }}>
          <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
         }}>
            <div  style={{
        width:"100%",
        height:"auto",
        marginTop:"auto",
         }}>
            <p  style={{
        width:"100%",
        fontSize:"1rem"
         }}>ALIENWARE 27 GAMING MONITOR</p>
            <p style={{
        width:"100%",
        fontSize:"2rem",
        margin:"-10px 0px"
         }}>Outshine Everyone</p>
            <p style={{
        width:"100%",
         }}>Built-in bragging rightswith premium performance,<br />overclockable refresh rates up to 280HZ and more.</p>
            <div style={{
        width:"40%",
        display:"flex",
        justifyContent:"space-around",
        margin:"auto",
        alignItems:"center"
         }}>
              <p onClick={()=>
              {
                let c=0;
                c++;
                added(c);

              }} style={{
        color:"#0063c8",
        fontSize:"1.3rem",
        cursor:"pointer"
         }}>Buy Now</p>
              <span style={{
                color:"grey",
         }}>|</span>
              <p style={{
        color:"#0063c8",
        fontSize:"1.3rem",
        cursor:"pointer"
         }}>Learn More</p>
            </div>
            </div>
            <img style={{
              width:"50%"
            }} src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842" alt="Error" />
          </div>
     </div>



</div>
    )

}

export default Home;






