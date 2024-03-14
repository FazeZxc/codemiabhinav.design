// import { useState, useEffect } from "react";
import "./index.css";
import Landing from "./components/landing";
import Hero from "./components/hero";
import About from "./components/about";
import Expertise from "./components/expertise";
import{ Footer} from "./components/footer";
import "./App.css"
import { Contact } from "./components/Contact";

function App() {
  // const [verticalScrollPx, setVerticalScrollPx] = useState(0);
  // const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setVerticalScrollPx(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   if (verticalScrollPx < 200) {
  //     setBackgroundColor("#FFFFFF");
      
  //   } else if (verticalScrollPx > 2100 ) {
  //     setBackgroundColor("#000000");
      
  //   } else if (verticalScrollPx > 3400 && verticalScrollPx > 2600) {
  //     setBackgroundColor("#818069");
     
  //   } else if (verticalScrollPx > 3400 && verticalScrollPx < 4000) {
  //     setBackgroundColor("#ffffff");
      
  //   } else if (verticalScrollPx > 4700 && verticalScrollPx < 6000) {
  //     setBackgroundColor("black");
  //   }
  //   console.log(verticalScrollPx);
  // }, [verticalScrollPx]);

  return (
    <div className="app" style={{ backgroundColor: "black" }}>
      <Landing />
      <Hero />
      <About />
      <Expertise/>
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
