import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

// !! I've Feedback component but i don't use it in this file
// !! I've Feedback component but i don't use it in this file
// !! I've Feedback component but i don't use it in this file
// !! I've Feedback component but i don't use it in this file

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="body_color bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="body_color">
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        <div className="relative z-[0]">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
