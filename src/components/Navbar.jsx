import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        
                <div className="navbar mt-3 px-3" style={{ position: 'fixed', top: 0, left: 0,zIndex: 1000, paddingBottom:'80px'  }}>  
                    <h4 style={{paddingLeft:'10px', color:"#1e2270",fontWeight:"600"}}>DigiPort.</h4>
                        <ul className="d-flex  justify-content-center con pt-2 mt-2"  style={{listStyle:'none',textAlign:'center'}}>
                              <li className="link">  <Link to="/" className="link">Home</Link > </li>
                            <li className="link">  <Link to="/" className="link">Profile</Link > </li>
                            <li className="link">  <Link to="/" className="link">Manage-Profile</Link > </li>
                        </ul>
                        <div className="" style={{width:'20%'}}>
                        <Link to="/sign" className="link">
                          <button className="me-3" style={{borderRadius:'5px'}}>Sign-up</button>
                          </Link> 
                            
                           <Link to="/log" className="link">
                          <button className="bn" style={{borderRadius:'5px'}}>Login</button>
                    </Link>  
                           
                        </div>
                    </div>
       
    );
}

export default Navbar;