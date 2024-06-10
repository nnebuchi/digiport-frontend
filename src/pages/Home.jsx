import React from 'react';
import heroImage from '../assets/images/new.jpg';
import profileImage from '../assets/images/profileImage.avif';
import digiImage from '../assets/images/digiP.jpg';
import simpImage from '../assets/images/simp.jpg';
import jobImage from '../assets/images/job.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './footer.css';

const Home = () => {
    return (
        <>
          <Navbar/>
            
                <section className="hero pt-4 clearfix" style={{ minHeight: '600px' }}>
                    <div className="section d-flex" style={{ width: '100%' }}>
                        <div className="left-sec" style={{ width: '40%', height: '350px', paddingLeft: '50px' }}>
                            <h3 className="text">
                                Unlock your brand potential in one click.
                            </h3>
                            <p className="txt">
                                Join us using <span style={{ color: '#0000FF', fontWeight: 600 }}>DigiPort</span> for your link in bio. One link to help you share everything you create, curate, and sell on social media profiles and more.
                            </p>
                        </div>
                        <div className="image-con d-flex" style={{ width: '60%', paddingLeft: '70px', paddingTop: '30px',height:"400px" }}>
                            <img src={heroImage} alt='Hero Image' style={{ width: '80%', boxShadow: '5px 5px 5px 8px #FF7518', borderBottomRightRadius: '15px' }} />
                        </div>
                    </div>
                </section>

                 <section className='body d-flex' style={{ width: '100%', height: '600px',backgroundColor:"white" }}>
                    <div style={{ width: '40%',backgroundColor:"white"  }}>
                        <img src={profileImage} alt='Profile Image' style={{ paddingLeft: '40px', paddingTop: '30px' }} />
                    </div>
                    <div className='sides' style={{ width: '50%'  }}>
                        <h3 style={{ fontSize: '30px', fontWeight: '700' }}>
                            Create and set up your portfolio in minutes
                        </h3>
                        <p style={{ fontSize: '15px', fontWeight: '500' }}>
                            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events, and more. It all comes together in a link in bio landing page designed to convert.
                        </p>
                        <button className="button" style={{ borderRadius: '5px' }}>Get Started</button>
                    </div>
                </section> 
                
                <h3 style={{ textAlign: 'center', marginTop: '8%', fontWeight: '600' }}>
                    Explore our powerful yet user-friendly features
                </h3>

                <section className='container-fluid mb-4 card-div' style={{ marginTop: '10vh',  height: '380px', cursor: 'pointer' }}>
                    <div className='row justify-content-around pt-4'>
                        <div className="col-3 px-0 card" style={{ width: '350px' }}>
                            <img src={jobImage} className="card-img-top" alt="Job" />
                            <div className="card-body">
                                <p className="card-text" style={{ fontSize: '18px', fontWeight: '600',height:"80px" }}>
                                    Revolutionize your digital presence with Digiport
                                </p>
                            </div>
                        </div>
                        <div className="col-3 px-0 card" style={{ width: '350px' }}>
                            <img src={digiImage} className="card-img-top" alt="Digi" />
                            <div className="card-body">
                                <p className="card-text" style={{ fontSize: '18px', fontWeight: '600' }}>
                                    Elevate your digital experience
                                </p>
                            </div>
                        </div>
                        <div className="col-3 px-0 card" style={{ width: '350px' }}>
                            <img src={simpImage} className="card-img-top" alt="Simplicity" />
                            <div className="card-body">
                                <p className="card-text" style={{ fontSize: '18px', fontWeight: '600' }}>
                                    Speed and simplicity: Start building an unforgettable digital identity today
                                </p>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </section>
           
         
        </>
    );
}

export default Home;
