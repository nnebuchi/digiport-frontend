import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Navbars = () => {
    return(
        
                <div className="navbars px-3 d-flex" style={{ backgroundColor:"#1e2270" ,paddingTop:"30px",height:"80px"}}>  
                    <h4 style={{paddingLeft:'10px',fontWeight:"600", color:"white"}}>DigiPort.</h4>
                        <ul className="d-flex  justify-content-center con  "  style={{listStyle:'none',textAlign:'center',marginLeft:"350px"}}>
                              <li >  <Link to="/" className="links " >Home</Link > </li>
                            <li >  <Link to="/profile" className="links" >Profile</Link > </li>
                            <li>  <Link to="/dash" className="links" >Manage-Profile</Link > </li>
                        </ul>
                      
                    </div>
       
    );
}

export default Navbars;