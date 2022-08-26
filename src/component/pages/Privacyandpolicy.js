import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Privacyandpolicy = () => {

  const [loader, setloader] = useState(false);


  useEffect(() => {
  setloader(true);
    let timer = setTimeout(() => setloader(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  },[])

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
            <div className="row">
              <h2>Privacy and policy</h2>
              <div
                style={{
                  textAlign: "left",
                  fontFamily: "Gilroy-Medium ,sans-serif!important",
                  letterSpacing: 0,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#333"
                }}
              >
                <p>
                  Please read the following Privacy policy of the services made
                  available on{" "}
                  <a href="http://www.kotatimes.live/" target="_blank">
                    www.kotatimes.live
                  </a>{" "}
                  or the equivalent kotatimes Mobile Application available on
                  Google Play, (
                  <strong>
                    &quot;kotatimes App&rdquo;/ &ldquo;Website&rdquo;
                  </strong>
                  ). The kotatimes App or Website on which the Services are
                  availed may together be referred to for convenience as the{" "}
                  <strong>&ldquo;Platform&rdquo;</strong>.
                </p>
                <p>
                  Please ensure that this Privacy Policy is perused by You
                  before availing any services from Us. This Privacy Policy
                  shall be updated from time to time and to stay abreast with
                  our methods of using Your information and protecting Your
                  privacy, please keep reviewing this Policy.
                </p>
                <p>
                  By viewing the kotatimes Platform, you agree to be bound by
                  the terms of this Privacy Policy.
                </p>
                <p>
                  By using the kotatimes Platform and/or by providing Your
                  information, You consent to the collection and use of the
                  information You disclose on our Website in accordance with
                  this Privacy Policy, including but not limited to your consent
                  for sharing your information as per this Privacy Policy. If we
                  decide to change our Privacy Policy, We will post those
                  changes on this page so that You are always aware of what
                  information We collect, how We use it, and under what
                  circumstances We disclose it. If You do not agree for the
                  forgoing, please do not continue to use or access our Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacyandpolicy;
