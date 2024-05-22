
const footer = () => {
  return (
    <footer className="footer-head ">
      <div className="site-section">
        <div className="container">
          <div className="cta d-block d-md-flex align-items-center justify-content-around px-5">
            <div>
              <h2 className="mb-0">Be a part of something big?</h2>
              <h3 className="text-dark">Let's get started!</h3>
            </div>
            <div className="ml-auto">
              <a href="#" className="btn btn-dark rounded-2 py-3 px-5">Contact us</a>
            </div>
          </div>

          <div className="row bg">
            <div className="col-sm">
              <a href="#" className="footer-logo">Digiport</a>
              <p className="copyright">
                <small>&copy; 2024</small>
              </p>
            </div>

            <div className="col-sm">
              <h3>Quick Links</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Upload project?</a></li>
              </ul>
            </div>

            <div className="col-sm">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Team</a></li>
                <li><a href="#">Testimonies</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>

            <div className="col-sm">
              <h3>Information</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Stay in touch</h3>
              <ul className="list-unstyled social">
                <li className='me-1'><a href="#"><span className="icon-facebook"></span></a></li>
                <li className='me-1'><a href="#"><span className="icon-twitter"></span></a></li>
                <li className='me-1'><a href="#"><span className="icon-linkdn"></span></a></li>
                <li className='me-1'><a href="#"><span className="icon-freelance"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mt-3">
            <h3>Subscribe</h3>
            <form action="#" className="subscribe mb-4 mb-lg-0">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button><span className="icon-keyboard_backspace"></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
