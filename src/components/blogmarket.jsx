export const BlogMarket = () => {
  return (
    <div className="h-screen w-screen blog-market">
      <div className="p-10 sm:p-24 flex flex-col gap-[100px]">
        <h1 className="text-2xl font-bold sm:text-7xl">
          <span className="text-contact">DO YOU READ </span> ?
        </h1>
        <p className="text-xl sm:text-2xl sm:w-1/2">
          Are you ready to dive into a world of inspiration, knowledge, and
          captivating stories? Well, you're in the right place!
          <br />
          <br />
          In My Blogs i talk about all things programming !!
        </p>
        <a href="https://dailysitemiabhinavdesign.super.site/" target="_blank">
          <button className="bg-contact p-4 text-white font-bold text-xl rounded-xl w-fit hover:bg-black hover:text-contact">
            START READING
          </button>
        </a>
      </div>
    </div>
  );
};
