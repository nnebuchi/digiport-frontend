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

                <div class="accordion accordion-flush " id="accordionFlushExample">
                    <div class="accordion-item ">
                        <h2 class="accordion-header ">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Profile views
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className="d-flex justify-content-between ">
                                    <div className="context">My views</div>
                                    <div className="d-flex ">
                                        <p className="me-2 mt-1" >45</p>
                                        <div className="mt-1"><img src={ secImage} alt='views' className="eye" /></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item mt-5">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Links
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  ">
                                
                                
                                <div className="d-flex justify-content-between cn">
                                <div className="context">Facebook</div>
                                <div className="d-flex ">
                                    <p className="me-2 mt-1" >30</p>
                                    <div className="mt-1"><img src={ secImage} alt='views' className="eye" /></div>
                                </div>
                                </div>
                                
                                <div className="d-flex justify-content-between cn">
                                <div className="context">instagram</div>
                                <div className="d-flex ">
                                    <p className="me-2 mt-1" >10</p>
                                    <div className="mt-1"><img src={ secImage} alt='views' className="eye" /></div>
                                </div>
                                </div>

                                <div className="d-flex justify-content-between cn">
                                <div className="context">X(twitter)</div>
                                <div className="d-flex ">
                                    <p className="me-2 mt-1" >9</p>
                                    <div className="mt-1"><img src={ secImage} alt='views' className="eye" /></div>
                                </div>
                                </div>
                                
                            
                                <div className="d-flex justify-content-between">
                                <div className="context">Linkdln</div>
                                <div className="d-flex ">
                                    <p className="me-2 mt-1" >25</p>
                                    <div className="mt-1"><img src={ secImage} alt='views' className="eye" /></div>
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