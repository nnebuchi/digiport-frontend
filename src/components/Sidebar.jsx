import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faShareAlt, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar =()=>{
    return(
        <>
             <div className="sideBar px-5  mt-3" style={{ width: '30%',height:"" }}>
                <ul className="py-3 sideCon" style={{ listStyle: 'none',  borderRadius: '8px', height: '350px', width: '250px',}}>
                   
                <li className="link">
        <Link to="/dash" className="link">
          <FontAwesomeIcon icon={faBuilding} style={{marginRight:"10px"}}/> Corporate Profile
        </Link>
      </li>
      <li className="link">
        <Link to="/bio" className="link">
          <FontAwesomeIcon icon={faUser} style={{marginRight:"10px"}} /> Bio data
        </Link>
      </li>
      <li className="link">
        <Link to="/Social" className="link">
          <FontAwesomeIcon icon={faShareAlt} style={{marginRight:"10px"}} /> My Socials
        </Link>
      </li>
      <li className="link">
        <Link to="/insight" className="link">
          <FontAwesomeIcon icon={faChartLine} style={{marginRight:"10px"}} /> Insights
        </Link>
      </li>
      <li className="link">
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight:"10px"}} /> Log-out
        </Link>
      </li>
                </ul>
            </div>
            
        </>

    );
}
 export default Sidebar;