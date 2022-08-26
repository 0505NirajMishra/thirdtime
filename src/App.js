import React from "react";
// import Index from './component/pages/Index';
import Indexv2 from "./component/pages/Indexv2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchlisting from './component/pages/Searchlisting';
import Gallery from './component/pages/Gallery';
import Events from "./component/pages/Events";
import Aboutus from './component/pages/Aboutus'
import Privacyandpolicy from './component/pages/Privacyandpolicy'
import Contact from './component/pages/Contact'
import Termsandconditions from './component/pages/Termsandconditions'

function App() {
  return (

    <div className="App">
      {/* <Index/> */}
      {/* <Indexv2/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Indexv2 />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Searchlisting" element={<Searchlisting/>} />
          <Route exact path="/Aboutus" element={<Aboutus/>} />
          <Route exact path="/Privacyandpolicy" element={<Privacyandpolicy/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Termsandconditions" element={<Termsandconditions/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;