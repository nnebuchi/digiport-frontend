import { Link } from "react-router-dom";
import sideImage from '../assets/images/side.jpg';
const Log = () => {
    return(
        <>
        <div style={{display:"flex",minHeight:"600px"}}>
            <div style={{width:"100%",backgroundColor:"#f0f0f5"}}>
                  <h4 style={{margin:"30px 30px",width:"60%",color:"#1e2270",fontWeight:"600"}}>Digiport.</h4>
                  <div style={{textAlign:"center"}}>
                    <h1>Welcome back</h1>
                     <p >Log in to your <span style={{color:"#1e2270",fontWeight:"600"}}> Digiport</span></p>
                     <div style={{}}>
                         <input type="text" placeholder="Email or username" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none"}}/>
                          <input type="text" placeholder="Password" style={{width:"500px",height:"50px",marginBottom:"20px",outline:"none"}} />
                      </div>
                      <Link to="/forgot" className="link">
                      <a href="">Forgot password</a>
                    </Link>  
                     
                    <div style={{}}>  
                        <button style={{width:"60%",marginTop:"20px",backgroundColor:"rgba(159, 154, 165, 0.493)",marginBottom:"20px"}}>Log in</button>
                        <p style={{marginBottom:"50px"}}>Don't have an account yet? <Link to="/sign" className="link">
                          <a href="">sign up</a>
                    </Link> </p>
                     </div>
                     
                    
                  </div>
                    
            </div>
            <div style={{ width: '45%', minHeight: '600px', backgroundImage: `url(${sideImage})`, backgroundSize: 'cover' }}>
      </div>
        </div>
        
        
        </>
      
    );
}
export default Log;