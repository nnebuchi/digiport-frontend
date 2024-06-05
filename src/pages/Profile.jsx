import { Link } from "react-router-dom";
import Navbars from "../components/Navbars";
import modelImage from "../assets/images/model.jpg";
import xImage from "../assets/images/x.png"
import instaImage from "../assets/images/instag.jpeg"
import linkdImage from "../assets/images/linkd.png"
import faceImage from "../assets/images/shit.png"
const Profile = ()=>{
    return (
        <>
        <div >
          < Navbars/>
            <div className="d-flex row " style={{paddingTop:"80px",justifyContent:"center",width:"80%", marginLeft:"10%"}}>
                <div className="d-flex "style={{}}>
                    <div className="col-5 mt-3 " style={{}}>
                        <div style={{paddingLeft:"80px"}}>
                            <img src={modelImage} alt="model" style={{height:"200px", width:"200px",borderRadius:"50%"}} />

                        </div>
                        
                    </div>
                    <div className="mb-4" style={{marginTop:"5%",marginLeft:"50px"}}>
                        <h3 style={{fontWeight:"700"}}>Irene backend</h3>
                         <Link ><h5>bisdope@gmail.com</h5></Link>
                         <h4>Tel- +234 9038700349</h4>
                         <div className="justify-content-between">
                       <Link to="/social"> <img src={xImage} alt=""  style={{width:"25px", marginRight:"9px"}}/></Link>    
                       <Link to="/social"> <img src={instaImage} alt="" style={{width:"25px", marginRight:"9px"}}/></Link>    
                       <Link to="/social"><img src={linkdImage} alt="" style={{width:"25px", marginRight:"9px"}}/></Link>     
                       <Link to="/social"><img src={faceImage} alt="" style={{width:"25px"}}/></Link>     
                         </div>
                    </div>
                </div>

            </div>
                <hr style={{width:"80%",marginLeft:"10%"}}/>
            <div >
                <div className="d-flex justify-content-between">
                     <h4 style={{marginLeft:"10%"}}>Certifications</h4>
                 <h4 style={{marginRight:"10%"}}>Education</h4>
                </div>
               
                <hr style={{width:"80%",marginLeft:"10%"}}/>
            </div>
        
        <div className=" " style={{width:"80%", marginLeft:"10%"}}>
            <div className=" d-flex">
            <div className=" " style={{flexWrap:"wrap", width: "50%" }}>
                <div className="d-flex">
                <h5>Web Development</h5>
                <h6>(2024)</h6>
                </div>
                <h6>Techbridge</h6>
            </div>
            <div className=" " style={{flexWrap:"wrap", width: "50%",paddingLeft:"280px" }}>
                <div className="d-flex">
                <h5>University of Benin</h5>
                <h6>(2019-2024)</h6>
                </div>
                <h6>Bsc sociology</h6>
            </div>
            
            </div>
            
        </div>


            <hr style={{width:"80%",marginLeft:"10%"}}/>
            <div style={{marginLeft:"130px"}}>
                 <h4 >Projects</h4>
            </div>
           
            <hr style={{width:"80%",marginLeft:"10%"}}/>

            <div style={{width:"80%", marginLeft:"10%"}} >
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h5 style={{color:"#1e2270"}}> DigiPort</h5> 
                            <p> (Oct 2023 - May 2024)</p>  
                        </div>
                         
                        <Link> <h6>visit project</h6></Link>
                    </div>
                    <div>
                        <p style={{backgroundColor:"#f0f0f5"}}>
                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sequi temporibus fugit eum sed cum repellendus. Adipisci modi debitis quaerat rerum unde minima ea eligendi itaque, ducimus minus atque nisi!.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h5 style={{color:"#1e2270"}}> Furni</h5> 
                            <p> (Jan 2023 - March 2024)</p>  
                        </div>
                         
                        <Link> <h6>visit project</h6></Link>
                    </div>
                    <div>
                        <p style={{backgroundColor:"#f0f0f5"}}>
                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sequi temporibus fugit eum sed cum repellendus. Adipisci modi debitis quaerat rerum unde minima ea eligendi itaque, ducimus minus atque nisi!.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h5 style={{color:"#1e2270"}}> Mongo db</h5> 
                            <p> (July 2023 - May 2024)</p>  
                        </div>
                         
                        <Link> <h6>visit project</h6></Link>
                    </div>
                    <div>
                        <p >
                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sequi temporibus fugit eum sed cum repellendus. Adipisci modi debitis quaerat rerum unde minima ea eligendi itaque, ducimus minus atque nisi!.
                        </p>
                    </div>
                </div>

                <hr/>
            </div>
          
            <h4 style={{marginLeft:"10%"}}>Skills</h4>
            <hr style={{width:"80%",marginLeft:"10%"}}/>

            <div  style={{margin:"0 10% 0 10%"}} >
                <div>
                    <div className="d-flex justify-content-between " >
                        <div className=""style={{width:'60%'}}>
                            <h5> Web developer</h5> 
                            
                        </div>
                         
                         <div className=" stacks d-flex" style={{width:'40%', flexWrap:'wrap'}}>
                            <p>Html</p>,
                            <p>Html</p>,
                            <p>Html</p>,
                            <p>Html</p>,
                            <p>Html</p>,
        
                         </div>
                    </div>
                    
                </div>

                <hr/>
            </div>

            

        </div>

        </>
    );
} 
  export default Profile;