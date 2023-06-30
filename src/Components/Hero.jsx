import React from "react";
import Img1 from "../assets/img1.png";

const Hero = () => {
  return (
    <section className="pt-high w-full pb-low hero">
      <div className="container flex flex-col justify-center items-center gap-10 text-center lg:text-start">
        <h1
          className="font-wendyOne text-7xl md:text-9xl text-center uppercase "
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          welcome to pepaid
        </h1>
        <a
          href=""
          className="w-[241px] h-[54px] px-8 py-4 bg-orange-500 rounded-[100px] shadow border border border border font-wendyOne uppercase border-lime-400 justify-center items-center gap-2.5 inline-flex hover:scale-95 transition"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          BUY pepaid
        </a>

        <article className="grid lg:grid-cols-3 justify-between w-full items-center gap-8">
          <p
            className="w-[352px] text-white text-[16px] font-normal leading-loose"
            data-aos="fade-up"
          >
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading{" "}
          </p>
          <div className="flex justify-center items-center relative">
            <div className="w-[300px] h-[300px] absolute bg-lime-200 rounded-full blur-[300px]" />
            <img
              className="z-10"
              src={Img1}
              data-aos="fade-right"
              data-aos-duration="600"
            />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <a href="" data-aos="fade-down" data-aos-duration="400">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="52"
                  height="52"
                  rx="4"
                  fill="#0FE170"
                />
                <rect width="52" height="52" rx="4" fill="#E88819" />
                <path
                  d="M40.5294 16.8422C39.4442 17.3245 38.2753 17.6493 37.0498 17.797C38.3024 17.0464 39.2596 15.8604 39.7149 14.4454C38.5435 15.1393 37.2467 15.6438 35.8662 15.9145C34.7638 14.7358 33.1864 14 31.4466 14C27.534 14 24.6598 17.6493 25.5432 21.4389C20.5109 21.1855 16.0446 18.7739 13.0572 15.1098C11.47 17.8314 12.2353 21.3946 14.9323 23.1984C13.9406 23.1664 13.008 22.8933 12.191 22.4405C12.1246 25.2458 14.1375 27.8714 17.0511 28.4571C16.1996 28.6884 15.2645 28.7425 14.3147 28.5604C15.0849 30.9671 17.3267 32.7167 19.9745 32.7659C17.4226 34.7641 14.2162 35.6573 11 35.2784C13.6823 36.9985 16.864 38 20.2845 38C31.5352 38 37.889 28.4989 37.5051 19.9772C38.6912 19.1258 39.7173 18.0578 40.5294 16.8422Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href=""
              className=""
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="52"
                  height="52"
                  rx="4"
                  fill="#0FE170"
                />
                <rect width="52" height="52" rx="4" fill="#E88819" />
                <path
                  d="M15.9458 23.315C15.4238 23.141 15.4188 22.86 15.9558 22.681L35.0428 16.319C35.5718 16.143 35.8748 16.439 35.7268 16.957L30.2728 36.043C30.1228 36.572 29.8178 36.59 29.5938 36.088L25.9998 28L31.9998 20L23.9998 26L15.9458 23.315Z"
                  fill="#FCF5ED"
                />
              </svg>
            </a>
            <a
              href=""
              className=""
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="52"
                  height="52"
                  rx="4"
                  fill="#0FE170"
                />
                <rect width="52" height="52" rx="4" fill="#E88819" />
                <path
                  d="M32.667 22.6667L26.0003 26.8333L19.3337 22.6667V21L26.0003 25.1667L32.667 21M32.667 19.3333H19.3337C18.4087 19.3333 17.667 20.075 17.667 21V31C17.667 31.442 17.8426 31.8659 18.1551 32.1785C18.4677 32.4911 18.8916 32.6667 19.3337 32.6667H32.667C33.109 32.6667 33.5329 32.4911 33.8455 32.1785C34.1581 31.8659 34.3337 31.442 34.3337 31V21C34.3337 20.558 34.1581 20.134 33.8455 19.8215C33.5329 19.5089 33.109 19.3333 32.667 19.3333Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
