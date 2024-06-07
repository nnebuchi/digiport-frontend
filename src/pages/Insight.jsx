import Sidebar from "../components/Sidebar";
import Navbars from '../components/Navbars';
import './Insight.css'
import secImage from "../assets/images/sec.png"
import eyeImage from "../assets/images/eye.png"

const Insight =()=>{
    return(
        <>
         <Navbars/>
         
         <div className="d-flex body">
            <Sidebar/>

            <div className="insight ">

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button
                            className="accordion-button" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="true" 
                            aria-controls="flush-collapseOne"
                        >
                            Insight
                        </button>
                        </h2>
                        <div
                        id="flush-collapseOne"
                        className="accordion-collapse show" 
                        data-bs-parent="#accordionFlushExample"
                        >
                        <div className="accordion-body">
                            <div className="d-flex justify-content-between">
                                <div className="context">
                                    Profile visits
                                </div>
                                <div className="d-flex">
                                    <p className="me-2 mt-1">45</p>
                                    <div className="mt-1">
                                    <img src={secImage} alt="views" className="eye" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item mt-4">
                        <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Links
                        </button>
                        </h2>
                        <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <div className="d-flex justify-content-between cn">
                                    <div className="context">
                                        Facebook
                                    </div>
                                    <div className="d-flex">
                                        <p className="me-2 mt-1">30</p>
                                        <div className="mt-1">
                                            <img src={secImage} alt="views" className="eye" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between cn">
                                    <div className="context">Instagram</div>
                                    <div className="d-flex">
                                        <p className="me-2 mt-1">10</p>
                                        <div className="mt-1">
                                            <img src={secImage} alt="views" className="eye" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between cn">
                                    <div className="context">X (Twitter)</div>
                                    <div className="d-flex">
                                        <p className="me-2 mt-1">9</p>
                                        <div className="mt-1">
                                            <img src={secImage} alt="views" className="eye" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="context">LinkedIn</div>
                                    <div className="d-flex">
                                        <p className="me-2 mt-1">25</p>
                                        <div className="mt-1">
                                            <img src={secImage} alt="views" className="eye" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

            </div>

         </div>
        
        </>
    );
}
 export default Insight;