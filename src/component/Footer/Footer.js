import React ,{useState,useEffect}from "react";
import { NavLink ,Link} from "react-router-dom";

const Footer = () => {

  const [contact, setcontact] = useState([])

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
   
    getcontact()
  }, [])



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
          }}>Talk to Our counsellor: Give a missed call +91 {contact}</div>
        </div>


      <footer>
        <div className="tu-footer">
          <div className="container">
            <div className="tu-footer_maintitle">
              <h5>Explore from our huge collection</h5>
              <h3>Approach tutors near to your house</h3>
            </div>
            <div className="row tu-footer_row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Atlanta</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech IT</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Chemical</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Petroleum</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Ceramic</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Production</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Atlanta</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Robotics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Industrial</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Biotech</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Communications</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Civil</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Tulsa</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Ceramic</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Mechatronics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Aerospace</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Mechatronics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Power</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Oklahoma City</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Ceramic</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Aeronautical</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Communications</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Electrical</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Content writing</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Virginia Beach</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Environmental</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Mech</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Robotics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Transportation</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Marine</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in San Francisco</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Marine</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Environmental</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Textile</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech ECE</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech CSE</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Mesa</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech ECE</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech IT</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Industrial</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Aeronautical</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech CSE</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Tutors in Boston</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">B.Tech Petroleum</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Metallurgical</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Mining</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="">B.Tech Aerospace</NavLink>
                  </li>
                  <li className="tu-footerlist-explore">
                    <NavLink to="">Explore all</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tu-footerdark">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <strong className="tu-footerlogo">
                  <NavLink to="index.html">
                    <img src="images/logo_white.png" alt="Logo" />
                  </NavLink>
                </strong>
                <p className="tu-footerdescription">
                  Accusamus etidio dignissimos ducimus blanditiis praesentium
                  volupta eleniti atquete corrupti quolores etmquasa molestias
                  epturi sinteam occaecati cupiditate non providente mikume
                  molareshe.
                </p>
                <ul className="tu-socialmedia">
                  <li className="tu-facebookv3">
                    <NavLink to="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </NavLink>
                  </li>
                  <li className="tu-twitterv3">
                    <NavLink to="https://twitter.com/?lang=en" target="_blank">
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </li>
                  <li className="tu-linkedinv3">
                    <NavLink to="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </NavLink>
                  </li>
                  <li className="tu-dribbblev3">
                    <NavLink to="https://dribbble.com/" target="_blank">
                      <i className="fab fa-dribbble" />
                    </NavLink>
                  </li>
                  <li className="tu-twitchv3">
                    <NavLink to="https://www.twitch.tv/" target="_blank">
                      <i className="fab fa-twitch" />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <h5 className="tu-footertitle">
                  Feel free to share your question
                </h5>
                <ul className="tu-footerlist tu-footericonlist">
                  <li>
                    <NavLink to="tel:+6287777263549">
                      <i className="icon icon-phone-call" />
                      <em>+62 877 77263549</em>
                      <span>( Mon to Sun 9am - 11pm GMT )</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mailto:hello@youremailid.co.uk">
                      <i className="icon icon-mail" />
                      <em>hello@youremailid.co.uk</em>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="tel:+681109998263">
                      <i className="icon icon-printer" />
                      <em>+62 811 09998263</em>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="tel:(+33)775559375">
                      <i className="fab fa-whatsapp" />
                      <em>(+33)7 75 55 9375</em>
                      <span>( Mon to Sun 9am - 11pm GMT )</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <div className="tu-footerlistholder  tu-seperator">
                  <div className="tu-footercontent">
                    <h5 className="tu-footertitle">Tutor by subjects</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">General mathematics</NavLink>
                      </li>
                      <li>
                        <NavLink to="">World languages</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Advanced placement</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Advance science play</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Social sciences</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          International baccalaureate®
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">Grooming technology</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Maketing business</NavLink>
                      </li>
                      <li>
                        <NavLink to="">ACT® test prep</NavLink>
                      </li>
                      <li>
                        <NavLink to="">English communications</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Career support</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          PSAT/NMSQT® &amp; SAT® prep
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">Content writing</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Student success skills</NavLink>
                      </li>
                      <li className="tu-footerlist-explore">
                        <NavLink to="">Explore all</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="tu-footercontent-two">
                    <h5 className="tu-footertitle">
                      Online classes
                      <span className="tu-tag tu-bggreen">NEW</span>
                    </h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="javascript:void(0);">Online science classes</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online islamiat classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online mathemetic classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">Online java classes</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online computer classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">IBM python Analyst</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online geographic classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online C programming classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online statistic classes
                        </NavLink>
                      </li>
                      <li className="tu-footerlist-explore">
                        <NavLink to="">Explore all</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="tu-footerlistholder  tu-seperator m-0">
                  <div className="tu-footercontent-two">
                    <h5 className="tu-footertitle">Useful links</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Success stories</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Online classes</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Join our community</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Courses</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Sign in now</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Programs &amp; degrees</NavLink>
                      </li>
                      <li>
                        <NavLink to="">How it works</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Learning materials</NavLink>
                      </li>
                      <li>
                        <NavLink to="">F.A.Q</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="tu-footercontent d-xl-flex">
                    <div className="tu-footercontent_title">
                      <h5 className="tu-footertitle">Get mobile app</h5>
                      <p>
                        Take education on the go. Get our mobile app for FREE!
                        on your Apple and android devices
                      </p>
                      <ul className="tu-footerdevice">
                        <li>
                          <NavLink to="javascript:void(0);">
                            <img src="images/ios.png" alt="devices" />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="javascript:void(0);">
                            <img src="images/android.png" alt="devices" />
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="tu-footernewsletter">
                      <h5 className="tu-footertitle">Signup for newsletter</h5>
                      <p>
                        Corrupti quolores etmquasa molestias epturite sinteam
                        occaecati amet cupiditate mikume molareshe.
                      </p>
                      <div className="tu-inputbtn">
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="form-control"
                        />
                        <NavLink
                          to=""
                          className="tu-primbtn-icon tu-primbtn-orange"
                        >
                          <i className="icon icon-send" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tu-footercopyright">
            <div className="container">
              <div className="tu-footercopyright_content">
                <p>© 2022 All Rights Reserved.</p>
                <ul className="tu-footercopyright_list">
                  <li>
                    <Link to="/Contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/Aboutus">About us</Link>
                  </li>
                  <li>
                    <Link to="/Termsandconditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/Privacyandpolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;