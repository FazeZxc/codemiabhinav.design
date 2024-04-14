/* eslint-disable react/no-unescaped-entities */

function Landing() {
  return (
    <div
      id="landing"
      className="w-screen flex flex-col bg-landing-bg bg-no-repeat bg-white ]"
    >
      <nav className="box-content pt-[20px] w-full h-[50px] flex flex-row justify-between bg-transparent absolute">
        <h1 className="text-white"></h1>
        <div className=" w-[40%] pr-[50px] flex flex-row justify-end text-contact">
          <button className="border-none bg-dark text-light w-[120px] rounded-2xl font-fjallaOne text-2xl hover:text-dark hover:bg-contact ">
            <a
              href="#contact"
              className="text-[24px] no-underline z-[100] hover:font-bold"
            >
              Lets talk.
            </a>
          </button>
        </div>
      </nav>

      <div className="flex flex-row h-full">
        <div className="bg-[#202124] text-white w-[400px] h-[800px] rounded-br-[500px] shadow-[4px 4px 4px white]">
          Devleoped By : Abhinav Mishra
        </div>
        <div className="pl-[70px] pt-[100px] absolute font-fjallaOne text-[110px] text-nowrap uppercase left-[-60] cursor-context-menu">
          <h1 className="text-white mix-blend-difference selection:hidden">
            Hey, i'm
          </h1>
          <h1 className="text-white mix-blend-difference selection:hidden">
            Abhinav Mishra
          </h1>
          <h1 className="text-white mix-blend-difference selection:hidden">
            Abhinav Mishra
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
