const Forgot = () => {
    return (
        <>
         <h4 style={{margin:"30px 30px",width:"60%",color:"#1e2270",fontWeight:"600"}}>Digiport.</h4>
         <div  style={{textAlign:"center",padding:"50px 100px"}}>
                <h2 style={{fontWeight:"600"}}>Forgot password <br /></h2>
                <div>
                    <p style={{color:""}}>Please enter the email adress you used to create your account. <br />An email will be sent to you to reset your password</p>
                    <input type="text" placeholder="Email" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none",marginLeft:"30%"}} className="form-control"/>
                    <button style={{width:"60%",marginTop:"20px",backgroundColor:"rgba(159, 154, 165, 0.493)",marginBottom:"20px"}}>Send email</button><br />
                    
     
                </div>
               
            
         </div>
        </>
        

    );
}
 export default Forgot;