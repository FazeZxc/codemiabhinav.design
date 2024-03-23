/* eslint-disable react/no-unescaped-entities */
function Landing() {
  return (
    <div id="landing" className="landing">
      <nav id="nav" className="nav" >
        <h1 className="logotext"></h1>
        <div id="nav-controls" className="nav-controls text-contact">
          {/* <a href="#">Work</a>
          <a href="#">How</a> */}
          <button id="talk"><a href="#footer">Lets talk.</a></button>
        </div>
      </nav>

      <div className="display">
        <div id="circle" className="circle bg-contact" ></div>
        <div className="text-content">
          <h1>Hey, i'm</h1>
          <h1>Abhinav Mishra</h1>
          <h1>Abhinav Mishra</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;