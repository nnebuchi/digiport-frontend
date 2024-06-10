import { useEffect, useRef } from "react";
import Navbars from "../components/Navbars";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import profileImage from '../assets/images/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Test = () => {
  const imageRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const image = imageRef.current;

    const handleImageChange = () => {
      if (input.files && input.files[0]) {
        image.src = URL.createObjectURL(input.files[0]);
      }
    };

    input.addEventListener("change", handleImageChange);
    return () => {
      input.removeEventListener("change", handleImageChange);
    };
  }, []);

  return (
    <>
     
      <h5
        style={{
          textAlign: 'center',
          fontSize: '25px',
          fontWeight: '600',
          color: '#1e2270',
          margin: '5% 3px 30px 3px',
        }}
      >
        Bio-Data
      </h5>
      <div className="mt-3 d-flex">
        <Sidebar />
        <div style={{ width: "50%", margin: "" }}>
          <div style={{ marginLeft: "30%" }} className="mb-5">
            <img
              ref={imageRef}
              src={profileImage}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                background: "#dfdfdf",
              }}
              className="img mb-3"
              alt="Profile"
            />
            <br />
            <input type="file" ref={inputRef} className="input" style={{ marginLeft: "0px" }} />
          </div>
          <div>
            <div className="form-group d-flex">
              <div className="col-6 me-4">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" className="form-control mb-4 me-4" id="firstname" placeholder="Enter your first name" />
              </div>
              <div className="col-6">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" className="form-control mb-4 me-4" id="lastname" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="form-group d-flex">
              <div className="col-6 me-4">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mb-4 me-4" id="email" placeholder="example@gmail.com" />
              </div>
              <div className="col-6">
                <label htmlFor="dob">Date of Birth</label>
                <input type="month" className="form-control mb-4 me-4" id="dob" placeholder="" />
              </div>
            </div>
            <div className="mb-5">
              <h5>Gender</h5>
              <div>
                <input type="radio" name="gender" id="male" className="me-2 pt-2" />
                <label htmlFor="male" className="me-4">Male</label>
                <input type="radio" name="gender" id="female" className="me-2 pt-2" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div style={{ float: 'right' }}>
            <input
              type="button"
              value="Submit"
              style={{
                backgroundColor: '#1e2270',
                border: 'none',
                padding: '8px 15px',
                color: 'white',
                borderRadius: '8px',
                marginTop: "10px",
                fontWeight: "600"
              }}
            />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Test;
