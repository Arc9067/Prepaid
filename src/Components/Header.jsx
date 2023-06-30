import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute to">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          className="font-wendyOne uppercase text-3xl"
          data-aos="fade-up "
        >
          Pepaid
        </a>
        <div
          className="  px-8 py-[18px] bg-orange-500 rounded-[100px] flex-col justify-start items-start lg:inline-flex hidden"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <div className="justify-start items-start gap-[49px] inline-flex">
            <a href="" className="text-white text-[20px] hover:text-black">
              Home{" "}
            </a>
            <a href="" className="text-white text-[20px] hover:text-black">
              About
            </a>
            <a href="" className="text-white text-[20px] hover:text-black">
              RoadMap
            </a>
            <a href="" className="text-white text-[20px] hover:text-black">
              Tekonomics
            </a>
          </div>
        </div>
        <a
          href=""
          className="px-8 py-4 bg-white text-orange-500 text-[16px] leading-snug uppercase font-wendyOne rounded shadow justify-center items-center gap-2.5 inline-flex hover:bg-transparent hover:shadow-none hover:text-white"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          ape now
        </a>
      </nav>
    </header>
  );
};

export default Header;
