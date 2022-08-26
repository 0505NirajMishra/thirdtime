
import React, { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import "./Navbar2.css";

const Navbar2 = () => {


  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [subject, setsubject] = useState([]);
  const [contact, setcontact] = useState([])

  const getclass = () => {
    fetch('https://thecompletesoftech.com/kotatimes/admin/api/form_class/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
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
        // console.log(data.data.form_class);
        setdata(data.data.form_class)
        // console.log("my class api =>" + JSON.stringify(data.data.form_class))
      });
  }

  const getsubject = () => {

    fetch('https://thecompletesoftech.com/kotatimes/admin/api/form_subject/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((subject) => {
        return subject.json();
      })
      .then((subject) => {
        // console.log(subject.data);
        setsubject(subject.data.form_subject)
        // console.log("my subject api =>" + JSON.stringify(subject.data.form_subject))
      });
  }

  const getcontact = () => {

    fetch('https://thecompletesoftech.com/kotatimes/admin/api/form_contact_us/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((contact) => {
        return contact.json();
      })
      .then((contact) => {
        // console.log(contact.data);
        setcontact(contact.data.form_contact_us[0].conatct_no)
        // console.log("my class api =>" + JSON.stringify(contact.data.form_contact_us[0].conatct_no))
      });

  }

  useEffect(() => {
    getclass();
    getsubject()
    getcontact()
  }, [])


  
  const handleButtonClick = () => {
    setOpen(!open)
  };

  return (
    <>

      <div

        id="call"

        style={{
          backgroundColor: '#5a4bda',
          textAlign: 'center',
          color: '#fff',
          height: "50px",
          fontSize: '170%'
        }}>
        <div style={{
          fontFamily: 'Gilroy-Regular,sans-serif!important',
          paddingTop: '12px'
        }}>Talk to Our counsellor: Give a missed call  +91 {contact}</div>
      </div>

      <header className="tu-header tu-headerv2">
        <nav className="navbar navbar-expand-xl tu-navbar tu-navbarvtwo">
          <div className="container-fluid">

            <NavLink className="navbar-brand" to="/">
              <img src="images/KOTA TIMES LOGO.png" alt="Logo" />
            </NavLink>

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

                  <Link className="nav-link" to="/" style={{
                    color: 'black'
                  }}>
                    Home
                  </Link>

                </li>

                <li className="nav-item">

                  <Link className="nav-link" to="/" style={{
                    color: 'black'
                  }}>
                    Notification
                  </Link>

                </li>

                <li className="nav-item">

                  <Link className="nav-link" to="/Events" style={{
                    color: 'black'
                  }}>
                    Events
                  </Link>

                </li>


                <li className="nav-item">
                  <Link className="nav-link" to="/Gallery" style={{
                    color: 'black'
                  }}>
                    Gallery
                  </Link>
                </li>

                <div id="link-1" className="nav-item dropdown-hover mx-2" >
                  <a className="nav-link dropdown-hover-button" onClick={handleButtonClick} style={{
                    color: 'black'
                  }}>
                    Notes
                    <i class="fa-solid fa-angle-down mx-1"></i>
                    <span className="sr-only">(current)</span>
                  </a>
                  
                  {
                    open && (

                  <div
                    className="dropdown-hover-content"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "30rem",
                    }}
                  >
                    <div className="row">

                      {
                        data.map((item) => (
                          <>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <h6>
                                  <a className="colour-2" href="#">
                                    {item.class_name}
                                  </a>
                                </h6>
                                {
                                  subject.filter(subjects => subjects.select_class === item.id).map((subjects) => (
                                    <a className="dropdown-item p-0"
                                      href={`https://thecompletesoftech.com/kotatimes/admin/uploads/form_subject/${subjects.select_file}`}
                                      download
                                    >
                                      {subjects.subject_name}
                                    </a>
                                  ))
                                }
                              </div>
                            </div>
                          </>
                        ))
                      }
                    </div>
                  </div>
 )}

                </div>
              </ul>
            </div>

            

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar2;


{/* <ul className="nav-item tu-afterlogin">
              <li>
                <a className="nav-link" href="index.html">
                  <span className="icon icon-message-square">
                    <i className="tu-messagenoti">4</i>
                  </span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="index.html">
                  <span className="icon icon-bell">
                    <i className="tu-messagenoti">3</i>
                  </span>
                </a>
              </li>
              <li className="menu-item-has-children">
                <strong>
                  <a className="nav-link" href="javascript:void(0);">
                    <img src="images/login.png" alt="image-description" />
                  </a>
                </strong>
                <ul className="sub-menu">
                  <li>
                    <a href="profile-setting-a.html">
                      <i className="icon icon-user" />
                      Personal details
                    </a>
                  </li>
                  <li>
                    <a href="profile-setting-b.html">
                      <i className="icon icon-phone" />
                      Contact details
                    </a>
                  </li>
                  <li>
                    <a href="profile-setting-c.html">
                      <i className="icon icon-book" />
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="profile-setting-d.html">
                      <i className="icon icon-book-open" />
                      Subjects I can teach
                    </a>
                  </li>
                  <li>
                    <a href="profile-setting-e.html">
                      <i className="icon icon-image" />
                      Media gallery
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}


{/* 
            <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Result
                  </a>

                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="http://google.com"
                      >
                        Google
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Submenu
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Submenu0
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Submenu 1
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Subsubmenu1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Subsubmenu1
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Submenu 2
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Subsubmenu2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Subsubmenu2
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* <ul className="dropdown">
                    <li className="">
                      <a href="">Home Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li>
                          <a href="">
                            Home v2{" "}
                            <em className="tu-menutag">without login</em>
                          </a>
                        </li>
                        <li>
                          <a href="">Home v3</a>
                        </li>
                        <li>
                          <a href="">Home v4</a>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
{/* </li> */ }