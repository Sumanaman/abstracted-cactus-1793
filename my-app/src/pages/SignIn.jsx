

const SignIn = () => {
     return (
        <div style={{width:"100%"}}>
            <div style={{
                    width:"50%"
                }}>
                <div style={{
                    // border:"2px solid green",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    width:"55%",
                    height:"1rem",
                    margin:"auto",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"10px 0px",
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
                 <input style={{width:"90%",padding:"5px",margin:"5px 0px"}} type="email" placeholder="Email Address"/>
                 <input style={{width:"90%",padding:"5px",margin:"5px 0px"}} type="password" placeholder="Password"/>
                 <p style={{
                    fontSize:"0.8rem"
                 }}>Don't remember your password? <span style={
                    {
                        color:"#0672cb"
                    }
                 }>Create or Reset password</span></p>
                 <input style={{
                    width:"90%",
                    padding:"10px",
                    margin:"20px 0px",
                    textAlign:"center",
                    cursor:"pointer",
                    backgroundColor:"#0672cb",
                    border:"none",
                    color:"#FFFFFF"
                }} type="submit" placeholder="Sign In"/>
                <p style={{color:"gray"}}>or</p>
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
             
        </div>
     );
}

export default SignIn;