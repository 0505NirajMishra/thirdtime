import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from 'react-router-dom'
// import OwlCarousel from 'react-owl-carousel';
// import Typewriter from "typewriter-effect";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typed from "react-typed"

const Indexv2 = () => {

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(false);


  const getdata = () => {
    fetch('https://thecompletesoftech.com:443/kotatimes/admin/api/form_sliders/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
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
        setdata(data.data.form_sliders)
        // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
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
      <div>

        {/* Preloader Start */}

        {loader === true && (

        <div className="tu-preloader">
          
            <div className="tu-preloader_holder">
              <img src="images/KOTA TIMES LOGO.png" alt="laoder img" />
              <div className="tu-loader" />
            </div>
        
          </div> 
     )}


        {/* Preloader End */}

        {/* HEADER START */}

        <Navbar />

        {/* HEADER END */}

        {/* BANNER START */}

        <div className="tu-bannervtwo">
          <div className="tu-particles">
            <div id="tu-particle" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="tu-banner_title">
                  <h1>
                    A good <span>#education</span> is always a base of
                  </h1>
                  <span className="tu-bannerinfo type" >


                    <Typed
                      strings={[
                        "I'm a Full Stack Developer",
                        "I Love Software Development",
                        "I Love All My Subscribers",
                      ]}
                      typeSpeed={150}
                      backSpeed={100}
                      loop
                    />
                  </span>


                  <p>
                    Consectur adipiscing elitsedo eiusmod tempor incididuntem
                    utaborate dolore magna aliqua ad minim veniamque.
                  </p>
                  <ul className="tu-banner_list">
                    <li>
                      <div className="tu-starthere">
                        <span>Start from here</span>
                        <img src="images/knob_line.svg" alt="img" />
                      </div>
                      <NavLink
                        to="/Signup"
                        className="tu-primbtn tu-primbtn-gradient"
                      >
                        <span>Start as student</span>
                        <i className="icon icon-chevron-right" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Signup" className="tu-secbtn">
                        <span>Join as Instructor</span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className="tu-banner_explore">
                    <i className="icon icon-shield" />
                    <p>
                      You can also join as parent to explore{" "}
                      <a href="signup.html">Join today</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <figure className="tu-bannervtwo_img">
                  <img
                    src="images/index/banner/img-07.png"
                    alt="img description"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* BANNER END */}

        {/* MAIN START */}

        <main className="tu-main">
          {/* PLATFORM START */}
          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    <img src="images/zigzag-line.svg" alt="img" />
                    <h4>Better Learning. Better Results</h4>
                    <h2>Features and Benefits</h2>
                    <p>
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-01.png" alt="img" />
                      <h5>Offering all types of courses</h5>
                      <p>
                        Aeccusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-02.png" alt="img" />
                      <h5>Online consultation for all</h5>
                      <p>
                        Dignissimos ducimus qui blanditiis aeusentium voluptatum
                        deleniti atque corruptiuos.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-03.png" alt="img" />
                      <h5>A great investment for future</h5>
                      <p>
                        Blanditiis praesntium voluptatum deleniti lorak atque
                        corrupti quos dolores etquase.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-04.png" alt="img" />
                      <h5>Best results guranteed</h5>
                      <p>
                        Aeccusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-05.png" alt="img" />
                      <h5>Easy to connect with anyone</h5>
                      <p>
                        Blanditiis praesntium voluptatum deleniti lorak atque
                        corrupti quos dolores etquase.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/index/education/img-06.png" alt="img" />
                      <h5>All verified tutors for you</h5>
                      <p>
                        Dignissimos ducimus qui blanditiis aeusentium voluptatum
                        deleniti atque corruptiuos.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tu-mainbtn">
                <NavLink to="/Signup" className="tu-primbtn-lg">
                  <span>Join our Community</span>
                  <i className="icon icon-lock" />
                </NavLink>
              </div>
            </div>
          </section>

          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    <h2>welcome to my</h2>
                  </div>
                </div>
              </div>
              <div className="row g-4 pt-3 pb-3">

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="">
                    <a href="">

                      <h5>Offering all types of courses</h5>
                      <div>
                        Aeccusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum.
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="">
                    <a href="">
                      <img src="images/index/qualified/img-01.jpg" alt="img"
                        style={{
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PLATFORM END */}
          {/* COUNTER START */}

          <section>
            <div className="tu-statsholder">
              <div className="container">
                <ul id="tu-counter" className="tu-stats">
                  <li>
                    <img src="images/stats/img-01.png" alt="img" />
                    <div className="tu-stats_info">
                      <h4>
                        <span
                          data-from={0}
                          data-to={560616}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          560,616
                        </span>
                      </h4>
                      <p>Courses available for verified and top tutors</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-02.png" alt="img" />
                    <div className="tu-stats_info">
                      <h4>
                        <span
                          data-from={0}
                          data-to={648482}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          648,482
                        </span>
                      </h4>
                      <p>Total tuition job posted on the platform till date</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-03.png" alt="img" />
                    <div className="tu-stats_info">
                      <h4>
                        <span
                          data-from={0}
                          data-to={20}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          20
                        </span>
                        + Hours
                      </h4>
                      <p>User daily average time spent on the platform</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-04.png" alt="img" />
                    <div className="tu-stats_info">
                      <h4>
                        <span
                          data-from={0}
                          data-to={7}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          7
                        </span>
                        + Million
                      </h4>
                      <p>
                        Active instructor and students available on the platform
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* COUNTER END */}
          {/* QUICK START */}

          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    <img src="images/zigzag-line.svg" alt="img" />
                    <h4>Let’s make a quick start today</h4>
                    <h2>Choose from the top visited categories you may like</h2>
                    <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p>
                  </div>
                </div>
              </div>



              <div>

                <div class='container-fluid' >

                  <div className="row title" style={{
                    marginBottom: "20px",
                    padding: '20px '
                  }} >

                  </div>

                </div>

                <div class='container-fluid' >

                  {/* <OwlCarousel items={4} className="owl-theme" loop margin={8} autoplay={true}>

                    {
                      data.map((item) => (
                        <>
                          <div>


                            <img
                              className="img"
                              src={"https://thecompletesoftech.com/kotatimes/admin/uploads/form_sliders/" + item.banner_images}
                              alt="img"
                              style={{
                                height: '50%', width: '80%'
                              }}
                            />
                            <div className="tu-categories_title">
                              <h6>{item.text}</h6>
                            </div>

                          </div>
                        </>
                      ))
                    }
                  </OwlCarousel> */}
                </div>
              </div>

              <div className="tu-mainbtn">
                {/* search-listing-two.html */}
                <a href="" className="tu-primbtn-lg">
                  <span>Explore All categories</span>
                  <i className="icon icon-chevron-right" />
                </a>
              </div>
            </div>
          </section>
          {/* QUICK END */}
          {/* SUCCESS START */}
          <section id="tu-sucesstorsection">
            <div className="tu-success-stories tu-success-storiesvtwo">
              <div className="container">
                <div className="tu-sucesstor_pattren">
                  <img
                    src="images/index/success_stories/pattren.svg"
                    alt="img"
                  />
                </div>
                <div className="row tu-sucesstorslider_title">
                  <div className="col-lg-8">
                    <div className="tu-maintitle">
                      <h2>
                        See how our visitors &amp; members made their{" "}
                        <span>#Success Stories</span>
                      </h2>
                    </div>
                  </div>
                </div>



                <div
                  id="tu-sucesstorieslider"
                  className="splide tu-sucesstorieslider tu-splidearrow"
                >
                  <div className="splide__track">

                    <ul className="splide__list">
                      {/* <OwlCarousel items={2} className="owl-theme" loop autoplay={true}>
                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            <img
                              src="images/index/success_stories/users/img-01.jpg"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                              alt="img"
                            />
                            <h5>
                              I highly recommend this platform, amazing experience
                              with fast delivery
                            </h5>
                            <blockquote>
                              “ It is a long established fact that a reader will
                              be distracted by the readable content of a page when
                              looking at its layout. The point of using Lorem
                              Ipsum is that it has a more. “
                            </blockquote>
                            <h4>
                              Michael Mueller
                              <span>5th Standard, Dubai UAE</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                                style={{
                                  height: '100px',
                                  width: '100px'
                                }}
                              />
                            </div>
                          </div>
                        </li>
                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            <img
                              src="images/index/success_stories/users/img-02.jpg"
                              alt="img"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                            />
                            <h5>
                              I really can imagin how professional they are. Just
                              amazing experience
                            </h5>
                            <blockquote>
                              “ There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look. “
                            </blockquote>
                            <h4>
                              Bobbie Schwartz
                              <span>2nd Standard, Manchester UK</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            <img
                              src="images/index/success_stories/users/img-03.jpg"
                              alt="img"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                            />
                            <h5>
                              On first project I feel its a mess then later it
                              turn into an great details for me
                            </h5>
                            <blockquote>
                              “ Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. “
                            </blockquote>
                            <h4>
                              Cecil Sims
                              <span>7th Standard, Rome Italy</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </li>
                      </OwlCarousel> */}
                    </ul>

                  </div>
                </div>




              </div>
            </div>
          </section>

          {/* SUCCESS END */}
          {/*  PROFESSIONOLL  START */}

          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    <img src="images/zigzag-line.svg" alt="img" />
                    <h4>Our featured instructors</h4>
                    <h2>
                      Every instructor is professional and highly qualified
                    </h2>
                    <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tu-featurelist"
                className="splide tu-featurelist  tu-splidedots "
              >
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(66,951)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">Gwendolyn Parker</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Las Vegas, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(38,494)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-03.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-03.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                {" "}
                                <a href="tutor-detail.html"> Glen Burns</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Chicago, OH</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,336.83/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-46</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(47,044)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-04.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-04.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">
                                  {" "}
                                  William Williams
                                </a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Nashville, IL</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,198.12/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-54</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-88</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(4,448)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tu-mainbtn">
                <a href="search-listing-two.html" className="tu-primbtn-lg">
                  <span>Explore all instructors</span>
                  <i className="icon icon-chevron-right" />
                </a>
              </div>
            </div>
          </section>

          {/* PROFESSIONOLL  END */}

        </main>

       
        {/* MAIN END */}

        {/* FOOTER START */}

        <Footer />

        {/* FOOTER END */}

        {/* Custom Tooltip Render Here */}

        <div className="tu-tippysm">
          <span id="tu-verifed" className="d-none">
            <span className="tu-tippytooltip">
              <span>Verified</span>
            </span>
          </span>
        </div>

      </div>
    </>
  );
};



export default Indexv2;


{/* <div
                id="tu-categoriesslider"
                className="splide tu-categoriesslider tu-splidedots"
              >
                <div className="splide__track">

                  <ul className="splide__list">

                    {
                      data.map((item) => (
                        <>
                          <li className="splide__slide">
                            <a
                              className="tu-categories_content"
                              href=""
                            >
                              <img
                                src={"https://thecompletesoftech.com/kotatimes/admin/uploads/form_sliders/" + item.banner_images}
                                alt="img"
                                style={{
                                  width: "100px",
                                  height: "100px"
                                }}
                              />
                              <div className="tu-categories_title">
                                <h6>{item.text}</h6>
                              </div>
                            </a>
                          </li>
                        </>
                      ))
                    }


                    {/* <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-10.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Computer &amp; hardware</h6>
                          <span>4,329 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-11.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Beauty learning</h6>
                          <span>6,406 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-12.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>IT &amp; development</h6>
                          <span>5,925 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-13.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Islamic education</h6>
                          <span>4,157 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-09.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Music learning</h6>
                          <span>6,301 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-10.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Computer &amp; hardware</h6>
                          <span>4,329 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-11.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Beauty learning</h6>
                          <span>6,406 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-12.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>IT &amp; development</h6>
                          <span>5,925 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-13.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Islamic education</h6>
                          <span>4,157 Listings</span>
                        </div>
                      </a>
                    </li> */}
{/* </ul>
                </div>
              </div>  */}