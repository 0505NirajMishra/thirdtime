import React ,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Contact = () => {

  const [data, setdata] = useState([])
  
  const [loader, setloader] = useState(false);

  const getdata = () => {
    fetch('https://thecompletesoftech.com/kotatimes/admin/api/form_contact_us/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data.data);
        setdata(data.data.form_contact_us)
        console.log("my class api =>" + JSON.stringify(data.data.form_contact_us))
      });
  }

  useEffect(() => {
    getdata()
    
    setloader(true);
    let timer = setTimeout(() => setloader(false), 1000);
    return () => {
      clearTimeout(timer);
    };


  }, [])

  return (
    <>
     
      

     {loader === true && (
<div className="tu-preloader">
         
            <div className="tu-preloader_holder">
              <img src="images/KOTA TIMES LOGO.png" alt="laoder img" />
              <div className="tu-loader" />
            </div>
        
          </div> 
            )}

      <Navbar2/>
    
      <div
        style={{
          backgroundColor: "#f8f9fa"
        }}
      >
        <div className="pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <h2>Contact Us</h2>
            </div>

            <div>
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "Gilroy-Medium ,sans-serif!important",
                  letterSpacing: 0,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#333"
                }}
              >
                Physicswallah is a student-oriented Edtech organization here to
                help all the students to solve their grievances. We&rsquo;re
                here to help you. We aim to solve all the queries within 7 days.
                You can call us during&nbsp;<strong>24 x 7</strong>. If the
                phone is busy, we&rsquo;re resolving someone else&rsquo;s
                queries. We hope you can contact us again after 15 minutes so
                that we can resolve your query as well if there&rsquo;s any
                query regarding the content or lectures or any other things. You
                may notify us in the contact us section only. Your suggestions
                will help us improve and give you and all the children a bright
                future.
              </p>
            </div>
            <hr />
          </div>
        </div>

        <div className="container pt-3">
          <div className="row">

            {
               data.map((item) =>(
                <div className="col-md-5">
                <div className="font-fam-bold mb-3">
                  <h1 style={{ fontWeight: "bold", fontSize: 35 }}>
                    PhysicsWallah
                  </h1>
                </div>
                <div className="font-20 font-fam-bold mb-3">
                  <div>
                    <h4>KLJ Noida one</h4>
                  </div>
                  <span className="font-18 font-fam-medium mb-3">
                    <div>
                      {/* B 8, Block B, Industrial Area, */}
                      {
                         item.address
                      }
                      {/* <br />
                      Sector 62, Noida,
                      <br />
                      Uttar Pradesh 201309 */}
                    </div>
                  </span>
                </div>
                <div className="font-18 mb-3">
                  <a href="mailto:support@pw.live">{item.email}</a>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary direction-button border-10 mb-5"
                  style={{ width: 200 ,padding:12}}
                >
                  <i
                    className="fa fa-location-arrow"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  />
                  Get Directions
                </button>
              </div>
               ))
            }

            <div
              className="col-md-7"
              style={{ height: 480, border: "1px solid #CCCCCC" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2174420938013!2d77.36433651508234!3d28.623244482421565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544da5a9ebf%3A0x4024cbbabd66b412!2sKLJ%20Noida%20One!5e0!3m2!1sen!2sin!4v1652965290577!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />{" "}
            </div>
          </div>
        </div>

  
        <div className="container pt-3 pb-3">
          <div
            className="col-12 col-md-12 col-lg-12 d-flex px-5 py-4 justify-content-between text-center fcfs-form"
            style={{
              background: "no-repeat padding-box #fff",
              boxShadow: "0 3px 6px #00000029",
              borderRadius: "50px"
            }}
          >
            <div className="col-12 col-md-6 d-flex text-start flex-column my-5">
              <h4 className="free-bat font-fam-bold">
                <p>Get Access To Our</p>
                <span className="teacher">Free Batches</span> Now
              </h4>
              <div className="instant mt-5 opacity-6 font-fam-medium mt-5 mb-2">
                Get instant access to high-quality material
              </div>
              <div className="text-center col-12 col-md-10">
                <form>
                  <div className="input-group">
                    <span className="input-group-text flag">
                      {/* <img
                        src="https://www.pw.live/version12/assets/img/india.svg"
                        width={24}
                        height={17}
                      /> */}
                    </span>
                    <input
                      type="tel"
                      id="external-tel-footer"
                      className="form-control input-tel-bg"
                      pattern="^[5-9]{1}[0-9]{9}$"
                      placeholder="Enter Mobile Number"
                      autoComplete="off"
                      autoCorrect="off"
                      minLength={4}
                      maxLength={10}
                      style={{
                        padding: "1em 3rem",
                        background: "no-repeat padding-box #fff",
                        boxShadow: "0 0 20px #0000001A!important",
                        height: "60px",
                        outline:'none',
                        border: "0 #ced4da!important"
                      }}
                      onkeydown="return isNumberFooter(event);"
                    />
                    <span
                      className="input-group-text arrow"
                    
                    >
                      {/* <img src="https://www.pw.live/version12/assets/img/noun_arrow_4024524.png" /> */}
                    </span>
                  </div>
                  <div
                    id="validationFooterFeedback"
                    className="invalid-feedback text-start"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center mb-2 pt-1">
              <div>
                <img
                  src="https://www.pw.live/version12/assets/img/mobile-and-alakh-sir.png"
                  alt="group"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;  



{/* 
      <header className="tu-header">
        <nav className="navbar navbar-expand-xl tu-navbar">
          <div className="container-fluid">
            <strong>
              <NavLink className="navbar-brand" to="/">
                <img src="images/KOTA TIMES LOGO.png" alt="Logo" />
              </NavLink>
            </strong>
            <button
              className="tu-menu"
              aria-label="Main Menu"
              data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse"
            >
              <i className="icon icon-menu" />
            </button>
            <div
              className="collapse navbar-collapse tu-themenav"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/Gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="menu-item-has-children nav-item">
                  <NavLink to="">Pages</NavLink>
                </li>
              </ul>
            </div>
            <ul className="nav-item tu-afterlogin">
              <li>
                <NavLink className="nav-link" to="">
                  <span className="icon icon-message-square">
                    <i className="tu-messagenoti">4</i>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  <span className="icon icon-bell">
                    <i className="tu-messagenoti">3</i>
                  </span>
                </NavLink>
              </li>
              <li className="menu-item-has-children">
                <strong>
                  <NavLink className="nav-link" to="">
                    <img src="images/login.png" alt="image-description" />
                  </NavLink>
                </strong>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="">
                      <i className="icon icon-user" />
                      Personal details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-phone" />
                      Contact details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-book" />
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-book-open" />
                      Subjects I can teach
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-image" />
                      Media gallery
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>  */}