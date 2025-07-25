import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
import { StarsCanvas } from "./components/canvas";
// import BannerBackground from "./components/canvas/BannerBackground";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <BannerBackground /> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <section className="relative z-0">
            <div id="about" className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <About />
            </div>
          </section>
          <section className="relative z-0">
            <div id="experience" className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <Experience />
            </div>
          </section>
          <section className="relative z-0">
            <div className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <Tech />
            </div>
          </section>
          <section className="relative z-0">
            <div id="work" className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <Works />
            </div>
          </section>
          <section className="relative z-0">
            <div className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <Feedbacks />
            </div>
          </section>
          <section className="relative z-0">
            <div id="contact" className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
              <Contact />
            </div>
            <StarsCanvas />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;