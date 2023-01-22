

const SignIn = () => {
     return (
        <div style={{width:"100%",
        display:"flex",
        marginBottom:"-175rem"
        }}>
            <div style={{
                    width:"50%"
                }}>
                <div style={{
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    width:"50%",
                    height:"1rem",
                    margin:"auto",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"15px 10px",
                    marginTop:"50px",
                    cursor:"pointer"
                }}>
                    <img style={{
                        width:"4%",
                        borderRadius:"50%"
                    }} src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png" alt="Error" />
                    <p style={{
                    width:"30%",
                    height:"100%",
                color:"grey",
                fontSize:"0.8rem",
                }}>Google Sign In</p>
                 </div>
                 <div style={{
                    width:"55%",
                    margin:"auto",
                    marginTop:"20px",
                    marginBottom:"20px"
                 }}>
                 <input style={{width:"85%",padding:"10px 20px",margin:"10px 0px"}} type="email" placeholder="Email Address"/>
                 <input style={{width:"85%",padding:"10px 20px",margin:"11px 0px"}} type="password" placeholder="Password"/>
                 <p style={{
                    fontSize:"0.8rem",
                    marginTop:"50px",
                    cursor:"pointer"
                 }}>Don't remember your password? <span style={
                    {
                        color:"#0672cb"
                    }
                 }>Create or Reset password</span></p>
                 <input style={{
                   width:"95%",
                   padding:"10px 20px",
                    margin:"20px 0px",
                    textAlign:"center",
                    cursor:"pointer",
                    backgroundColor:"#0672cb",
                    border:"none",
                    color:"#FFFFFF"
                }} type="submit" placeholder="Sign In"/>
                <p style={{color:"gray",
            marginTop:"-5px",
            marginBottom:"-5px",}}>or</p>
                <input style={{
                    width:"90%",
                    padding:"10px",
                    margin:"20px 0px",
                    textAlign:"center",
                    cursor:"pointer",
                    color:"#0672cb"
                }} type="text" placeholder="Send One-time Password"/>
                <p style={{
                    fontSize:"0.8rem"
                 }}>Don't have a Dell account? <span style={
                    {
                        color:"#0672cb"
                    }
                 }>Create an account</span></p>
                 </div>
            </div>
             <div style={{
                width:"60%",
                height:"auto",
                margin:"auto",
                backgroundColor:"#f5f6f7",
                marginTop:"2rem"
             }}>
               <p style={{
                fontSize:"1.8rem",color:"#48494B"
               }}>Dell Account Benifits</p>
               <p style={{
                fontSize:"0.8rem",color:"gray",
                marginTop:"-10px"
               }}>My Account is an easy,more centralized way to manage your tech.Sign Up Now!</p>
               <div style={{
                width:"100%",
                height:"auto",
                display:"flex",
                justifyContent:"space-evenly",
               }}>
                <div style={{
                padding:"5px",
                width:"30%"
               }}>
                    <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-1-tracking-36x36.png" alt="Error" />
                    <p>Order Tracking</p>
                    <p style={{
                        fontSize:"0.8rem",
                        color:"gray"
                    }}>Manage orders,track shipping status and view support history</p>
                </div>
                <div style={{
                // border:"2px solid green",
                width:"30%"
                }}>
                    <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-2-mail-36x36.png" alt="Error" />
                    <p>Manage Communications</p>
                    <p style={{
                        fontSize:"0.8rem",
                        color:"gray"
                    }}>Manage marketing and communications preferences</p>
                </div>
                <div style={{
                width:"25%",
                textAlign:"center"}}>
                    <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-3-profile-36x36.png" alt="Error" />
                    <p>Profile Setting</p>
                    <p style={{
                        fontSize:"0.8rem",
                        color:"gray"
                    }}>Save your favorite payment method and shipping details for quicker checkout</p>
                </div>
               </div>
               <div style={{
                    width:"100%",
                    // border:"2px solid green"
                }}>
                    <img style={{
                        width:"50%"
                    }} src="https://i.dell.com/sites/csimages/Banner_Imagery/all/bannerimage460x460.png" alt="Error" />
                </div>
             </div>
        </div>
     );
}

export default SignIn;