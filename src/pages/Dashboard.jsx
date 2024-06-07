import React, { useState, useEffect } from 'react';
import './Dash.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbars from '../components/Navbars';
import Select from 'react-select';

function Dashboard() {
  const [openCard, setOpenCard] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

 
  const stacksOptions = [
    { value: 'designer-protopie', label: 'Protopie' },
    { value: 'designer-figma', label: 'Figma' },
    { value: 'designer-adobe-xd', label: 'Adobe XD' },
  
  ];
  const stacksOption = [
    { value: 'designer-frontend', label: 'frontend' },
    { value: 'designer-backend', label: 'backend' },
    { value: 'designer-product design', label: 'product design' },
  
  ];
  const [selectedStacks, setSelectedStacks] = useState([]); 
  const [selectedStack, setSelectedStack] = useState([]); 

  const toggleCard = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  const disableProjectEndDate = (event) => {
    setIsDisabled(event.target.checked);
  };

  const handleStackChange = (selectedOption) => {
    setSelectedStacks(selectedOption); 
  };
  const correctStack = (selectedOption) => {
    setSelectedStack(selectedOption); 
  };


  return (
    <>
      <Navbars/>

      <h5 style={{ textAlign: 'center', fontSize: '25px', fontWeight: '600', color: '#1e2270', margin: '5% 3px 30px 3px'}}>
        Corporate Profile
      </h5>

      <div className='d-flex mt-3'>
        <div>
          <Sidebar />
        </div>
        <div className="container mt-3" style={{ width: "70%" }}>
          <div id="accordion">
            <div className="card mt-3" style={{ width: "650px" }}>
              <div className="card-header" id="headingFive">
                <h5 className="mb-0 d-flex">
                  <h5 style={{ marginRight: "450px" }}>Skill set</h5>
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    onClick={() => toggleCard(5)}
                    aria-expanded={openCard === 5}
                    aria-controls="collapseTwo"
                    style={{ width: "70px", height: "40px", color: "white", textDecoration: "none", backgroundColor: "#1e2270" }}
                  >
                    Add
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className={`collapse ${openCard === 5 ? 'show' : ''}`}
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body" style={{ padding: "30px 20px" }}>
                  <div className='d-flex'>
                    <div className='col-9'>
                      <label htmlFor="" style={{ fontWeight: '600', fontSize: '18px' }}>Skills</label> <br />
                      <select name="" id="" style={{ width: '460px', height: '40px',borderRadius:'5px' }}>
                        <option value="1" disabled></option>
                        <option value="Web-dev">Front-end developer</option>
                        <option value="App-dev">App developer</option>
                        <option value="back-end">Back-end developer</option>
                        <option value="product design">Product designer</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-4 d-flex'>
                    <div className='col-9 '>
                      <label htmlFor="" style={{ fontWeight: '600', fontSize: '18px' }}>Stacks</label> <br />
                      <Select
                          value={selectedStacks} 
                          onChange={handleStackChange} 
                          options={stacksOptions} 
                          isMulti 
                          styles={{ width: '400px' }} 
                        />
                    </div>
                  </div>
                  <div className='mt-5' style={{ marginLeft: "400px" }}>
                    <button style={{ backgroundColor: "blue", color: "white", marginRight: "30px", borderRadius: "10px" }}>Save</button>
                    <button style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>Clear</button>
                  </div>
                </div>
              </div>
              <div style={{ height: "50px", border: "1px solid rgba(159, 154, 165, 0.493)", width: "650px" }}></div>
            </div>
            <div className="card mt-3" style={{ width: "650px" }}>
              <div className="card-header " id="headingOne">
                <h5 className="mb-0 d-flex">
                  <h5 style={{ marginRight: "460px" }}>Project</h5>
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={() => toggleCard(1)}
                    aria-expanded={openCard === 1}
                    aria-controls="collapseOne"
                    style={{ width: "70px", height: "40px", color: "white", textDecoration: "none", backgroundColor: "#1e2270" }}
                  >
                    Add
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className={`collapse ${openCard === 1 ? 'show' : ''}`}
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body row">
                  <div className='col-6 mb-3'>
                    <h5><label>Project</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Name of project' />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>Role</label><br /></h5>
                    <div className='form-group'>
                    <Select
                          value={selectedStack} 
                          onChange={correctStack} 
                          options={stacksOption} 
                          isMulti 
                          styles={{ width: '400px' }} 
                        />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>Start Date</label><br /></h5>
                    <div className='form-group'>
                      <input type="month" className='form-control' />
                    </div>
                  </div>

                  <div className={`col-6 mb-3 ${isDisabled ? 'disabled' : ''}`} id='end'>
                    <h5><label>End Date</label><br /></h5>
                    <div className='form-group'>
                      <input type="month" className='form-control' disabled={isDisabled} />
                    </div>
                  </div>


                  <div className="card-body row">
                    <div className='d-flex'>
                      <div className='col-6 mb-3 me-4'>
                    <h5><label>Link title</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='' />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>Url</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='' />
                    </div>
                  </div>
                    </div>
                    
                  <button type="button" className="add-button" id="add-button" style={{width:"150px",borderRadius:"10px",marginLeft:"450px",backgroundColor: "#1e2270",color:"white" }}>click to add link</button>
              

                  </div>
                  
                  <div className=' col-12'>
                    <input type="checkbox" style={{ marginRight: "15px" }} id='checkbox' onChange={disableProjectEndDate} />
                    I'm currently working here
                  </div>
                  <div className='mt-3 col-6 offset-6 text-end'>
                    <button style={{ backgroundColor: "blue", color: "white", marginRight: "30px", borderRadius: "10px" }}>Save</button>
                    <button style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>Clear</button>
                  </div>
                </div>
              </div>
              <div style={{ height: "50px", border: "1px solid rgba(159, 154, 165, 0.493)", width: "650px" }}></div>
            </div>

            <div className="card mt-3" style={{ width: "650px" }}>
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0 d-flex">
                  <h5 style={{ marginRight: "430px" }}>Education</h5>
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    onClick={() => toggleCard(2)}
                    aria-expanded={openCard === 2}
                    aria-controls="collapseTwo"
                    style={{ width: "70px", height: "40px", color: "white", textDecoration: "none", backgroundColor: "#1e2270" }}
                  >
                    Add
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className={`collapse ${openCard === 2 ? 'show' : ''}`}
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body row">
                  <div className='col-6 mb-3'>
                    <h5><label>University/college</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Name of institution' />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>Degree</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Degree obtained' />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>Start Date</label><br /></h5>
                    <div className='form-group'>
                      <input type="month" className='form-control' />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <h5><label>End Date</label><br /></h5>
                    <div className='form-group'>
                      <input type="month" className='form-control' />
                    </div>
                  </div>
                  <div className='mt-3 col-6 offset-6 text-end'>
                    <button style={{ backgroundColor: "blue", color: "white", marginRight: "30px", borderRadius: "10px" }}>Save</button>
                    <button style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>Clear</button>
                  </div>
                </div>
              </div>
              <div style={{ height: "50px", border: "1px solid rgba(159, 154, 165, 0.493)", width: "650px" }}></div>
            </div>
            <div className="card mt-3" style={{ width: "650px" }}>
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0 d-flex">
                  <h5 style={{ marginRight: "400px" }}>Certifications</h5>
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    onClick={() => toggleCard(4)}
                    aria-expanded={openCard === 4}
                    aria-controls="collapseTwo"
                    style={{ width: "70px", height: "40px", color: "white", textDecoration: "none", backgroundColor: "#1e2270" }}
                  >
                    Add
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className={`collapse ${openCard === 4 ? 'show' : ''}`}
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body row">
                  <div className='col-6 '>
                    <h5><label>Organization</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Name of organization' />
                    </div>
                  </div>

                  <div className='col-6 '>
                    <h5><label>Certification</label><br /></h5>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='certificate obtained' />
                    </div>
                  </div>
                  <div className='col-12 mt-3'>
                    <h5><label>Year obtained</label><br /></h5>
                    <div className='form-group'>
                      <input type="month" className='form-control' />
                    </div>
                  </div>
                </div>
                <div className='mt-3 mb-3' style={{ marginLeft: "400px" }}>
                  <button style={{ backgroundColor: "blue", color: "white", marginRight: "30px", borderRadius: "10px" }}>Save</button>
                  <button style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>Clear</button>
                </div>
              </div>
              <div style={{ height: "50px", border: "1px solid rgba(159, 154, 165, 0.493)", width: "650px" }}></div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
