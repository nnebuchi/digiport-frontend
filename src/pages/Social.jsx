import Navbars from "../components/Navbars";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import xImage from "../assets/images/x.png";
import instaImage from "../assets/images/instag.jpeg";
import linkdImage from "../assets/images/linkd.png";
import faceImage from "../assets/images/shit.png";

const Social = () => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }

    return (
        <>
            <Navbars />
            <h5 style={{ textAlign: 'center', fontSize: '25px', fontWeight: '600', color: '#1e2270', margin: '10% 3px 30px 3px', paddingTop: "20px" }}>
                My Socials
            </h5>
            <div className="d-flex">
                <div>
                    <Sidebar />
                </div>

                <div style={{ width: '60%' }}>
                    <form>
                        <div className="mb-3">
                            <img src={faceImage} alt="" style={{ width: "25px", marginRight: "9px" }} />
                            <label htmlFor="facebook" className="form-label" style={{ fontSize: '18px', fontWeight: '600' }}>
                                Facebook
                            </label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="@facebook.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ height: '45px' }} />
                                <span className="input-group-text" id="basic-addon2" style={{ backgroundColor: "#d5dfe9", cursor: 'pointer' }} onClick={() => handleCopy('@facebook.com')}>Copy</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <img src={xImage} alt="" style={{ width: "25px", marginRight: "9px" }} />
                            <label htmlFor="Twitter" className="form-label" style={{ fontSize: '18px', fontWeight: '600' }}>Twitter</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="@X.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ height: '45px' }} />
                                <span className="input-group-text" id="basic-addon2" style={{ backgroundColor: "#d5dfe9", cursor: 'pointer' }} onClick={() => handleCopy('@X.com')}>Copy</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <img src={linkdImage} alt="" style={{ width: "25px", marginRight: "9px" }} />
                            <label htmlFor="Linkeldn" className="form-label" style={{ fontSize: '18px', fontWeight: '600' }}>LinkedIn</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="@Linkedln.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ height: '45px' }} />
                                <span className="input-group-text" id="basic-addon2" style={{ backgroundColor: "#d5dfe9", cursor: 'pointer' }} onClick={() => handleCopy('@Linkedln.com')}>Copy</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <img src={instaImage} alt="" style={{ width: "25px", marginRight: "9px" }} />
                            <label htmlFor="instagram" className="form-label" style={{ fontSize: '18px', fontWeight: '600' }}>Instagram</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="@instagram.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ height: '45px' }} />
                                <span className="input-group-text" id="basic-addon2" style={{ backgroundColor: "#d5dfe9", cursor: 'pointer' }} onClick={() => handleCopy('@instagram.com')}>Copy</span>
                            </div>
                        </div>
                        <div style={{ float: 'right' }}>
                            <input type="button" value="Submit" style={{ backgroundColor: '#1e2270', border: 'none', padding: '15px 20px', color: 'white', borderRadius: '8px', marginTop: "30px", fontWeight: "600" }} />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Social;
