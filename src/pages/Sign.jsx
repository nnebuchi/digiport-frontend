import { Link } from "react-router-dom";
import signImage from '../assets/images/signn.avif';
const Sign = () => {
    return (
       <>   
       <div style={{display:"flex",minHeight:"600px", backgroundColor:"red"}}>
            <div style={{width:"100%",backgroundColor:"#f0f0f5"}}>
                  <h4 style={{margin:"30px 30px",width:"60%",color:"#1e2270",fontWeight:"600"}}>Digiport.</h4>
                  <div style={{textAlign:"center"}}>
                    <h1>Join Digiport</h1>
                     <p >Sign up for <span style={{color:"#1e2270",fontSize:"20px"}}>free</span></p>
                     <div style={{}}>
                         <input type="text" placeholder="Email" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none"}}/>
                          <input type="text" placeholder="Password" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none"}} />
                          <input type="text" placeholder="Repeat password" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none"}} />
                      </div>
                    <div style={{}}>  
                        <button style={{width:"60%",marginTop:"20px",backgroundColor:"rgba(159, 154, 165, 0.493)",marginBottom:"20px"}}>Create account</button>
                        <p style={{marginBottom:"50px"}}>Already have an account yet? <Link to="/log" className="link">
                          <a href="">Log in</a>
                    </Link>  </p>
                     </div>
                     
                    
                  </div>
                    
            </div>
            <div style={{ width: '45%', minHeight: '600px', backgroundImage: `url(${signImage})`, backgroundSize: 'cover' }}>
      </div>
        </div>
       
       </>

    );
}
 export default Sign;