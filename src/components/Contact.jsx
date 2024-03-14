export const Contact = () => {
  return (
    <div className="bg-[#FB6F3E] h-screen w-full z-10">
      <h1 className="pt-24 text-[90px] leading-[85px] font-extrabold">
        HAVE A PROJECT IN MIND?
        <br />
        OR YOU WANT TO SAY HELLO,
        <br />
        <span className="text-white">GET IN TOUCH </span> WITH ME.
      </h1>
      <div className="flex flex-row justify-center pt-10 gap-[100px] leading-[-75px] font-normal text-xl text-right">
        <div>SOCIALS</div>
        <div className="flex flex-col">
          <a href="https://www.linkedin.com/in/abhinavmsn/" className="hover:underline">LINKEDIN</a>
          <a href="https://www.instagram.com/abhinavmxn/" className="hover:underline">INSTAGRAM</a>
          <a href="https://github.com/FazeZxc" className="hover:underline">GITHUB</a>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-10 gap-[100px] leading-[-75px] font-normal text-xl text-right">
        <div>DEVELOPED 
            <br />BY</div>
        <div className="flex flex-col">
          <div>ABHINAV <br /> MISHRA</div>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-[100px] leading-[-75px] font-normal text-xl text-right">
        <a href="#landing" className="underline">BACK TO TOP</a>
      </div>
    </div>
  );
};
