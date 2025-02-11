import React, { useRef } from 'react';
import Navbars from "../components/Navbars";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import xImage from "../assets/images/x.png";
import instaImage from "../assets/images/instag.jpeg";
import linkdImage from "../assets/images/linkd.png";
import faceImage from "../assets/images/download.png";

const Social = () => {
    const facebookRef = useRef(null);
    const twitterRef = useRef(null);
    const linkedinRef = useRef(null);
    const instagramRef = useRef(null);

    const copyText = (inputRef) => {
        if (inputRef.current) {
            inputRef.current.select();
            navigator.clipboard.writeText(inputRef.current.value);
        }
    };
  
    return (
        <>
            <Navbars/>
            <h5 style={{ textAlign: 'center', fontSize: '25px', fontWeight: '600', color: '#1e2270', margin: '5% 3px 30px 3px'}}>
                    My Socials

            </h5>
            <div className="d-flex">
                <div>
                    <Sidebar />
                </div>

          <div style={{width:'60%'}}>
                            <form>
                                    <div className="mb-3">
                                    <img src={faceImage} alt="" style={{width:"25px", marginRight:"9px"}}/>
                                        <label htmlFor="facebook" className="form-label" style={{fontSize:'18px', fontWeight:'600'}}>
                                        Facebook</label> 
                                        <div class="input-group mb-3">
                                            <input type="text" ref={facebookRef} class="form-control" placeholder="@facebook.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{height:'45px'}}/>
                                                <span class="input-group-text" id="basic-addon2" style={{backgroundColor:"#d5dfe9"}}onClick={() => copyText(facebookRef)}>Copy</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <img src={xImage} alt=""  style={{width:"25px", marginRight:"9px"}}/>
                                        <label htmlFor="Twitter" className="form-label" style={{fontSize:'18px', fontWeight:'600'}}>Twitter</label>
                                        <div class="input-group mb-3">
                                            <input type="text" ref={twitterRef} class="form-control" placeholder="@X.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{height:'45px'}} />
                                                <span class="input-group-text" id="basic-addon2"style={{backgroundColor:"#d5dfe9"}}onClick={() => copyText(twitterRef)} >Copy</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <img src={linkdImage} alt="" style={{width:"25px", marginRight:"9px"}}/>
                                        <label htmlFor="Linkeldn" className="form-label" style={{fontSize:'18px', fontWeight:'600'}}>Linkedln</label>
                                        <div class="input-group mb-3">
                                            <input type="text" ref={linkedinRef} class="form-control" placeholder="@Linkedln.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{height:'45px'}}/>
                                                <span class="input-group-text" id="basic-addon2"style={{backgroundColor:"#d5dfe9"}}onClick={() => copyText(linkedinRef)}>Copy</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <img src={instaImage} alt="" style={{width:"25px", marginRight:"9px"}}/>
                                        <label htmlFor="instagram" className="form-label" style={{fontSize:'18px', fontWeight:'600'}}>Instagram</label>
                                        <div class="input-group mb-3">
                                            <input type="text" ref={instagramRef} class="form-control" placeholder="@instagram.com" aria-label="Recipient's username" aria-describedby="basic-addon2"style={{height:'45px'}} />
                                                <span class="input-group-text" id="basic-addon2"style={{backgroundColor:"#d5dfe9"}} onClick={() => copyText(instagramRef)}>Copy</span>
                                        </div>
                                    </div>
                                  <div style={{float:'right'}}>
                                    <input type="button" value="Submit" style={{backgroundColor:'#1e2270',border:'none', padding:'8px 15px', color:'white',borderRadius:'8px', marginTop:"30px",fontWeight:"600"}} />
                                  </div>
                            </form>

                        </div>
               
                   
            </div>
            <Footer />
        </>
    );
}

export default Social;
