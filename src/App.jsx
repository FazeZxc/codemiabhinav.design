import "./index.css";
import Landing from "./components/landing";
import About from "./components/about";
import Expertise from "./components/expertise";
import "./App.css";
import { Contact } from "./components/Contact";
import { BlogMarket } from "./components/blogmarket";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="app" style={{ backgroundColor: "black" }}>
      <Landing />
      <BlogMarket></BlogMarket>
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
