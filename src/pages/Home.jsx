import { Link } from 'react-router-dom';
import heroImage from '../assets/images/new.jpg';
import profileImage from '../assets/images/profileImage.avif';
import './footer.css';
import digiImage from '../assets/images/digiP.jpg'
import simpImage from '../assets/images/simp.jpg'
import jobImage from '../assets/images/job.jpg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
    return(
        <>
        <div>
             <Navbar/>

            <div className="hero pt-4" style={{minHeight:'650px'}}>   
                <div className="section d-flex " style={{width:'100%',}}>
                    <div className='left-sec' style={{width:'40%',height:'350px',paddingLeft:'50px'}}>
                        <h3 className="text">
                         Unlock your brand potential in one click.
                        </h3>
                        <p className="txt">Join us people using <span style={{color:'#0000FF',fontWeight:600}}>DigiPort</span> for link in bio. One link to help you share everything you create, curate and sell on social media profiles and more.</p>
                    </div>

                    <div className="image-con d-flex " style={{width:'60%',paddingLeft:"70px",paddingTop:"30px"}}>
                     <img src={heroImage} alt='Image' style={{width:"80%",boxShadow:"5px 5px 5px 8px #FF7518", borderBottomRightRadius:"15px"}}/>
                    </div>
                </div>
            </div>

            <div className='body d-flex ' style={{width:'100%', height:'400px'}}>
                <div style={{width:'40%'}}>
                 <img src={profileImage} alt='image' style={{paddingLeft:'40px',paddingTop:'30px'}} />
                </div>

                <div className='sides' style={{width:'50%'}}>
                    <h3 style={{fontSize:'30px',fontWeight:'700'}}>
                        Create and set up your portfolio in minutes
                    </h3>
                    <p style={{fontSize:'15px',fontWeight:'500'}}>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>

                    <div>
                        <button className="button"style={{borderRadius:'5px'}}>Get Started</button>
                    </div>
                </div>
            </div>
            
             <h3 style={{textAlign:'center', marginTop:'20%', fontWeight:'600'}}>Explore our powerful yet user-friendly features </h3>

            <div className='container-fluid mb-4' style={{marginTop:'10vh', backgroundColor:'#f0f0f5', height:'380px', cursor:'pointer' }}>
                <div className='row justify-content-around pt-4'>
                   
                      <div className=" col-3 px-0 card" style={{width:'350px'}}>
                            <img src={jobImage} className="card-img-top" alt="job"  />
                            <div className="card-body">
                                <p className="card-text"  style={{fontSize:'18px',fontWeight:'600'}}>
                                    Revolutionize your digital presence with Digiport
                                </p>
                            </div>
                    </div> 

                    <div className=" col-3 px-0 card" style={{width:'350px'}} >
                            <img src={digiImage} className="card-img-top" alt="revo"  />
                            <div className="card-body">
                                <p className="card-text" style={{fontSize:'18px',fontWeight:'600'}}>
                                    Elevate your digital experience
                                </p>
                            </div>
                    </div> 

                    <div className=" col-3 px-0 card" style={{width:'350px'}}>
                            <img src={simpImage} className="card-img-top" alt="simp"  />
                            <div className="card-body">
                                <p className="card-text"  style={{fontSize:'18px',fontWeight:'600'}}>
                                    Speed and simplicity start building unforgettable digital identity today
                                </p>
                            </div>
                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default Home;