import './otp.css'
import email from "../assets/images/mail.png"
import { Link } from 'react-router-dom';
const Otp = () => {
    return(
        <>
       

       <div className="d-flex justify-content-center div">
            <div className="otpDiv">
                    <div className='otpcontentdiv'>
                        <img src={email} alt="otp-email" className='mail' />
                        <p className='otp-confirm-msg'>Please check your email</p>
                        <p>We've sent a code to Irenemadubuogor@gmail.com</p>
                        
                                <form className='form '>
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input me-3' />
                                    <input type="text" className='otp-input ' />
                                    
                                        <p className='resend mt-3'>Didn't get code?  <span><Link>Click to resend</Link></span></p>

                                        <input type="button" value="submit" className='button me-5'/>
                                        <input type="button" value="Cancel" className='button cancel'/>
                                    
                                    
                                    
                                </form>
                    
                        
                    </div>
            </div>
       </div>
        
        
        </>
      
    );
}
export default Otp;