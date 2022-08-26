import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Termsandconditions = () => {

  const [loader, setloader] = useState(false);


  useEffect(() => {
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

      <Navbar2 />

      <div
        style={{
          backgroundColor: "#f8f9fa"
        }}
      >
        <div className="pt-5">
          <div className="container">
            <div className="row">
              <h2>Terms and conditions</h2>
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
                  This privacy policy applies to all Users who access the
                  Platform and are therefore required to read and understand
                  the Policy before submitting any Personal Information
                  (defined hereinafter). This рrivасy роliсy governs your use
                  of the аррliсаtiоn of.{" "}
                  <strong>&apos;Kota Times&apos;</strong>, Kota Times YouTube
                  Channel, www. KotaTimes.live (&apos;Website&apos;) аnd the
                  оther аssосiаted аррliсаtiоns, рrоduсts, Website аnd
                  serviсes managed by the Соmраny. By submitting Personal
                  Information, you are consenting to the use and processing of
                  such information in accordance with this Policy. Third party
                  Website may place their own cookies or other files on the
                  Users&apos; computer, collect data or solicit personal
                  information from the Users, for which KotaTimes
                  <strong>&nbsp;</strong>is not responsible or liable.
                  Accordingly, KotaTimes<strong>&nbsp;</strong>does not make
                  any representations concerning the privacy practices or
                  policies of such third parties or terms of use of such
                  Website, nor does Kota Times<strong>&nbsp;</strong>guarantee
                  the accuracy, integrity, or quality of the information,
                  data, text, software, sound, photographs, graphics, videos,
                  messages or other materials available on such
                  Website/Applications. The inclusion or exclusion does not
                  imply any endorsement by Kota Times<strong>&nbsp;</strong>of
                  the Website, the Website&rsquo;s provider, or the
                  information on the Website/Application. Kota Times
                  <strong>&nbsp;</strong>encourages the User to read the
                  privacy policies of each such Website/Application and the
                  User understands that it is solely such a third party who is
                  responsible to the User in this regard. Kota Times
                  <strong>&nbsp;</strong>has taken reasonable precautions as
                  per applicable Indian law and implemented industry standards
                  to treat Personal Information as confidential and to protect
                  it from unauthorized access, improper use or disclosure,
                  modification and unlawful destruction or accidental loss of
                  the Personal Information. We will not use or share your
                  information with anyone except as described in this Privacy
                  Policy. Each time you use our Service you are accepting the
                  practices described in this Privacy Policy at that
                  time.&nbsp;
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

export default Termsandconditions;
