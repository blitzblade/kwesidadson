import React, { useState, MouseEvent } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './assets/css/bootstrap.min.css';
import './assets/css/stylish-portfolio.css';
import './App.css';
import SideBar from './components/SideBar';
import { stat } from 'fs';


const App: React.FC = () => {

  let aboutRows: Array<AboutRow> = [
    {
      id: 0,
      heading: "Ruby/Rails Developer",
      description: "A professional rails developer.",
      status: ""
    },
    {
      id: 1,
      heading: "Python/Flask Developer",
      description: "I use python for almost every small project",
      status: ""
    },
    {
      id: 2,
      heading: "C#/Dotnet Core Developer",
      description: "A professional dotnet developer. I usually use the crossplatform version dotnet core.",
      status: ""
    }
  ];
  const [appState, setStatus] = useState({ status: "", iconClass: "fa fa-bars", aboutRows: aboutRows });

  const statusToggler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (appState.status === "") {
      setStatus({ ...appState, status: "active", iconClass: "fa fa-times" });
    } else {
      setStatus({ ...appState, status: "", iconClass: "fa fa-bars" });
    }

  }

  const toggleAbout = (index: number) => {
    let aboutItems = appState.aboutRows.map((row, i) => {
      if (i === index) {
        row.status === "" ? row.status = "open" : row.status = "";
      } else {
        row.status = "";
      }
      return row;
    });

    setStatus({ ...appState, aboutRows: aboutItems });
  }

  return (
    <React.Fragment>
      <a className={"menu-toggle rounded " + appState.status} href="/" onClick={statusToggler}>
        <i className={appState.iconClass}></i>
      </a>

      <SideBar sideBarClass={appState.status} />
      <Header userName={"Kwesi Dadson"} tag={"Software Engineer"} />

      <section className="content-section bg-light" id="about">
        <About aboutRows={appState.aboutRows} toggleAbout={toggleAbout} />
      </section>

      <section className="content-section bg-primary text-white text-center" id="services">
        <Services />
      </section>

      <section className="content-section" id="portfolio">
        <Portfolio />
      </section>


      <div id="contact" className="map">
        <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
        <br />
        <small>
          <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
        </small>
      </div>

      <Footer />

      <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </React.Fragment>
  );
}

export default App;
