import React from "react";
import Img2 from "../assets/img2.png";

const About = () => {
  return (
    <div className="bg-green-50 py-low text-black about">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="" data-aos="fade-right" data-aos-duration="1200">
          <svg
            width="218"
            height="80"
            viewBox="0 0 218 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.751 36.9844L23.126 38.4844L21.7197 33.1875H16.376L15.2041 38.4844L3.25098 37.3125L12.5791 6.09375L25.6104 5.4375L34.751 36.9844ZM20.876 26.0156L19.0947 17.8594L17.3604 26.0156H20.876ZM62.5244 30.6562C62.5244 31.9531 62.2822 33.0703 61.7979 34.0078C61.3291 34.9453 60.6963 35.7422 59.8994 36.3984C59.1025 37.0547 58.1807 37.5938 57.1338 38.0156C56.1025 38.4219 55.0244 38.7422 53.8994 38.9766C52.7744 39.2109 51.6416 39.3672 50.501 39.4453C49.376 39.5234 48.3213 39.5625 47.3369 39.5625C46.3682 39.5625 45.3604 39.5234 44.3135 39.4453C43.2822 39.3828 42.251 39.2656 41.2197 39.0938C40.1885 38.9219 39.1729 38.6953 38.1729 38.4141C37.1729 38.1172 36.2275 37.75 35.3369 37.3125L35.29 7.125C36.165 6.76563 37.0947 6.44531 38.0791 6.16406C39.0635 5.86719 40.0635 5.625 41.0791 5.4375C42.1104 5.23437 43.1338 5.08594 44.1494 4.99219C45.165 4.88281 46.1494 4.82812 47.1025 4.82812C48.2119 4.82812 49.3291 4.89844 50.4541 5.03906C51.5947 5.17969 52.6885 5.41406 53.7354 5.74219C54.7822 6.07031 55.7588 6.5 56.665 7.03125C57.5713 7.54688 58.3604 8.1875 59.0322 8.95312C59.7197 9.71875 60.251 10.6094 60.626 11.625C61.0166 12.6406 61.2119 13.8125 61.2119 15.1406C61.2119 16.0156 61.0869 16.8359 60.8369 17.6016C60.5869 18.3672 60.2275 19.0547 59.7588 19.6641C59.29 20.2734 58.7197 20.7969 58.0479 21.2344C57.376 21.6562 56.6182 21.9688 55.7744 22.1719C56.79 22.4375 57.7119 22.8281 58.54 23.3438C59.3838 23.8594 60.0947 24.4844 60.6729 25.2188C61.2666 25.9531 61.7197 26.7812 62.0322 27.7031C62.3604 28.625 62.5244 29.6094 62.5244 30.6562ZM50.6182 17.2969C50.6182 16.8438 50.5244 16.4609 50.3369 16.1484C50.1494 15.8203 49.915 15.5547 49.6338 15.3516C49.3682 15.1484 49.0713 15 48.7432 14.9062C48.4307 14.8125 48.1494 14.7656 47.8994 14.7656C47.5869 14.7656 47.2822 14.8125 46.9854 14.9062C46.6885 15 46.3994 15.1094 46.1182 15.2344L45.9775 20.4375C46.3369 20.4375 46.7822 20.4062 47.3135 20.3438C47.8447 20.2812 48.3525 20.1484 48.8369 19.9453C49.3369 19.7266 49.7588 19.4141 50.1025 19.0078C50.4463 18.5859 50.6182 18.0156 50.6182 17.2969ZM47.29 24.9375C46.8369 24.9375 46.3994 24.9844 45.9775 25.0781L45.8838 30.4219C46.1182 30.4688 46.3447 30.5156 46.5635 30.5625C46.7979 30.5938 47.0244 30.6094 47.2432 30.6094C47.5713 30.6094 47.9307 30.5781 48.3213 30.5156C48.7119 30.4375 49.0791 30.2969 49.4229 30.0938C49.7666 29.875 50.0479 29.5859 50.2666 29.2266C50.501 28.8672 50.6182 28.3906 50.6182 27.7969C50.6182 27.2031 50.501 26.7188 50.2666 26.3438C50.0479 25.9688 49.7744 25.6797 49.4463 25.4766C49.1182 25.2578 48.7588 25.1172 48.3682 25.0547C47.9775 24.9766 47.6182 24.9375 47.29 24.9375ZM92.29 22.4531C92.29 23.875 92.126 25.25 91.7979 26.5781C91.4697 27.8906 90.9932 29.125 90.3682 30.2812C89.7588 31.4375 89.0088 32.5 88.1182 33.4688C87.2432 34.4219 86.251 35.2422 85.1416 35.9297C84.0479 36.6172 82.8525 37.1562 81.5557 37.5469C80.2588 37.9219 78.8838 38.1094 77.4307 38.1094C76.0244 38.1094 74.6807 37.9297 73.3994 37.5703C72.1338 37.2109 70.9463 36.7109 69.8369 36.0703C68.7275 35.4141 67.7197 34.6328 66.8135 33.7266C65.9229 32.8047 65.1572 31.7891 64.5166 30.6797C63.8916 29.5547 63.3994 28.3516 63.04 27.0703C62.6963 25.7891 62.5244 24.4531 62.5244 23.0625C62.5244 21.7031 62.6885 20.375 63.0166 19.0781C63.3447 17.7656 63.8135 16.5312 64.4229 15.375C65.0479 14.2188 65.7979 13.1562 66.6729 12.1875C67.5479 11.2188 68.5244 10.3828 69.6025 9.67969C70.6963 8.97656 71.876 8.42969 73.1416 8.03906C74.4072 7.64844 75.7432 7.45312 77.1494 7.45312C79.415 7.45312 81.4775 7.80469 83.3369 8.50781C85.2119 9.21094 86.8057 10.2188 88.1182 11.5312C89.4463 12.8281 90.4697 14.4063 91.1885 16.2656C91.9229 18.1094 92.29 20.1719 92.29 22.4531ZM81.8838 23.0625C81.8838 22.3906 81.7822 21.7422 81.5791 21.1172C81.3916 20.4766 81.1104 19.9141 80.7354 19.4297C80.3604 18.9297 79.8916 18.5312 79.3291 18.2344C78.7822 17.9219 78.1494 17.7656 77.4307 17.7656C76.6963 17.7656 76.04 17.8984 75.4619 18.1641C74.8838 18.4297 74.3838 18.7969 73.9619 19.2656C73.5557 19.7188 73.2432 20.2578 73.0244 20.8828C72.8057 21.4922 72.6963 22.1406 72.6963 22.8281C72.6963 23.4844 72.79 24.1406 72.9775 24.7969C73.165 25.4531 73.4463 26.0469 73.8213 26.5781C74.1963 27.1094 74.6572 27.5391 75.2041 27.8672C75.7666 28.1953 76.415 28.3594 77.1494 28.3594C77.8838 28.3594 78.54 28.2188 79.1182 27.9375C79.7119 27.6406 80.2119 27.25 80.6182 26.7656C81.0244 26.2656 81.3369 25.6953 81.5557 25.0547C81.7744 24.4141 81.8838 23.75 81.8838 23.0625ZM121.962 12.9375C121.962 14.0937 121.907 15.3672 121.798 16.7578C121.688 18.1484 121.509 19.5859 121.259 21.0703C121.009 22.5547 120.681 24.0625 120.274 25.5938C119.884 27.1094 119.392 28.5703 118.798 29.9766C118.204 31.3828 117.509 32.7031 116.712 33.9375C115.931 35.1562 115.024 36.2266 113.993 37.1484C112.978 38.0547 111.837 38.7656 110.571 39.2812C109.306 39.8125 107.899 40.0781 106.353 40.0781C104.54 40.0781 102.962 39.7812 101.618 39.1875C100.29 38.6094 99.1494 37.8281 98.1963 36.8438C97.2432 35.8438 96.4619 34.6875 95.8525 33.375C95.2432 32.0469 94.7666 30.6484 94.4229 29.1797C94.0791 27.6953 93.8369 26.1875 93.6963 24.6562C93.5713 23.1094 93.5088 21.625 93.5088 20.2031C93.5088 18.0156 93.6182 15.8359 93.8369 13.6641C94.0557 11.4766 94.3682 9.29688 94.7744 7.125L105.743 7.54688C105.321 10 104.954 12.4688 104.642 14.9531C104.345 17.4219 104.196 19.9062 104.196 22.4062C104.196 22.6719 104.204 23.0703 104.22 23.6016C104.251 24.1172 104.298 24.7031 104.36 25.3594C104.423 26 104.509 26.6641 104.618 27.3516C104.743 28.0234 104.907 28.6406 105.11 29.2031C105.313 29.7656 105.556 30.2266 105.837 30.5859C106.134 30.9453 106.478 31.125 106.868 31.125C107.321 31.125 107.728 30.9141 108.087 30.4922C108.446 30.0547 108.759 29.4766 109.024 28.7578C109.306 28.0391 109.548 27.2109 109.751 26.2734C109.954 25.3359 110.126 24.3594 110.267 23.3438C110.407 22.3281 110.517 21.3125 110.595 20.2969C110.688 19.2812 110.759 18.3359 110.806 17.4609C110.868 16.5859 110.907 15.8125 110.923 15.1406C110.938 14.4687 110.946 13.9688 110.946 13.6406C110.946 12.4219 110.923 11.2109 110.876 10.0078C110.845 8.78906 110.79 7.57812 110.712 6.375H121.681C121.868 8.53125 121.962 10.7187 121.962 12.9375ZM148.61 5.48438L148.376 15.4219L141.392 15.7031L139.61 37.9219L129.72 38.4375L129.767 16.2188L122.782 16.5938L123.063 5.53125L148.61 5.48438ZM187.306 12.9375C187.306 14.0937 187.251 15.3672 187.142 16.7578C187.032 18.1484 186.853 19.5859 186.603 21.0703C186.353 22.5547 186.024 24.0625 185.618 25.5938C185.228 27.1094 184.735 28.5703 184.142 29.9766C183.548 31.3828 182.853 32.7031 182.056 33.9375C181.274 35.1562 180.368 36.2266 179.337 37.1484C178.321 38.0547 177.181 38.7656 175.915 39.2812C174.649 39.8125 173.243 40.0781 171.696 40.0781C169.884 40.0781 168.306 39.7812 166.962 39.1875C165.634 38.6094 164.493 37.8281 163.54 36.8438C162.587 35.8438 161.806 34.6875 161.196 33.375C160.587 32.0469 160.11 30.6484 159.767 29.1797C159.423 27.6953 159.181 26.1875 159.04 24.6562C158.915 23.1094 158.853 21.625 158.853 20.2031C158.853 18.0156 158.962 15.8359 159.181 13.6641C159.399 11.4766 159.712 9.29688 160.118 7.125L171.087 7.54688C170.665 10 170.298 12.4688 169.985 14.9531C169.688 17.4219 169.54 19.9062 169.54 22.4062C169.54 22.6719 169.548 23.0703 169.563 23.6016C169.595 24.1172 169.642 24.7031 169.704 25.3594C169.767 26 169.853 26.6641 169.962 27.3516C170.087 28.0234 170.251 28.6406 170.454 29.2031C170.657 29.7656 170.899 30.2266 171.181 30.5859C171.478 30.9453 171.821 31.125 172.212 31.125C172.665 31.125 173.071 30.9141 173.431 30.4922C173.79 30.0547 174.103 29.4766 174.368 28.7578C174.649 28.0391 174.892 27.2109 175.095 26.2734C175.298 25.3359 175.47 24.3594 175.61 23.3438C175.751 22.3281 175.86 21.3125 175.938 20.2969C176.032 19.2812 176.103 18.3359 176.149 17.4609C176.212 16.5859 176.251 15.8125 176.267 15.1406C176.282 14.4687 176.29 13.9688 176.29 13.6406C176.29 12.4219 176.267 11.2109 176.22 10.0078C176.188 8.78906 176.134 7.57812 176.056 6.375H187.024C187.212 8.53125 187.306 10.7187 187.306 12.9375ZM213.181 26.5312C213.181 28.6719 212.806 30.5469 212.056 32.1562C211.321 33.75 210.306 35.0781 209.009 36.1406C207.728 37.2031 206.22 38 204.485 38.5312C202.767 39.0625 200.915 39.3281 198.931 39.3281C198.165 39.3281 197.321 39.2266 196.399 39.0234C195.493 38.8203 194.571 38.5703 193.634 38.2734C192.696 37.9609 191.79 37.6328 190.915 37.2891C190.056 36.9297 189.29 36.5938 188.618 36.2812L189.649 26.625C190.978 27.4219 192.446 28.0312 194.056 28.4531C195.681 28.8594 197.274 29.0625 198.837 29.0625C199.134 29.0625 199.493 29.0547 199.915 29.0391C200.337 29.0078 200.735 28.9375 201.11 28.8281C201.501 28.7031 201.829 28.5234 202.095 28.2891C202.36 28.0547 202.493 27.7188 202.493 27.2812C202.493 26.9844 202.399 26.7344 202.212 26.5312C202.024 26.3125 201.782 26.1406 201.485 26.0156C201.188 25.875 200.853 25.7734 200.478 25.7109C200.103 25.6328 199.735 25.5781 199.376 25.5469C199.017 25.5156 198.681 25.5 198.368 25.5C198.056 25.5 197.806 25.5 197.618 25.5C196.274 25.5 195.048 25.2656 193.938 24.7969C192.845 24.3281 191.899 23.6797 191.103 22.8516C190.321 22.0078 189.712 21.0156 189.274 19.875C188.837 18.7188 188.618 17.4688 188.618 16.125C188.618 14.2812 188.985 12.6328 189.72 11.1797C190.47 9.71094 191.462 8.46875 192.696 7.45312C193.946 6.42188 195.376 5.63281 196.985 5.08594C198.595 4.53906 200.259 4.26562 201.978 4.26562C202.743 4.26562 203.532 4.29687 204.345 4.35938C205.157 4.40625 205.962 4.5 206.759 4.64062C207.571 4.78125 208.36 4.96094 209.126 5.17969C209.892 5.39844 210.618 5.67188 211.306 6L210.415 15.5156C209.353 15.1562 208.235 14.8594 207.063 14.625C205.907 14.375 204.774 14.25 203.665 14.25C203.462 14.25 203.196 14.2578 202.868 14.2734C202.556 14.2734 202.22 14.2969 201.86 14.3438C201.517 14.375 201.165 14.4297 200.806 14.5078C200.446 14.5859 200.126 14.6953 199.845 14.8359C199.563 14.9609 199.337 15.1328 199.165 15.3516C198.993 15.5703 198.915 15.8281 198.931 16.125C198.946 16.4688 199.071 16.75 199.306 16.9688C199.556 17.1719 199.868 17.3359 200.243 17.4609C200.634 17.5703 201.056 17.6484 201.509 17.6953C201.978 17.7422 202.438 17.7734 202.892 17.7891C203.345 17.7891 203.767 17.7891 204.157 17.7891C204.548 17.7734 204.868 17.7812 205.118 17.8125C206.368 17.8906 207.493 18.1562 208.493 18.6094C209.493 19.0625 210.337 19.6641 211.024 20.4141C211.728 21.1641 212.259 22.0625 212.618 23.1094C212.993 24.1406 213.181 25.2812 213.181 26.5312Z"
              fill="#55883B"
            />
            <line
              y1="-0.5"
              x2="92.001"
              y2="-0.5"
              transform="matrix(1 0 0.00161316 0.999999 1 72)"
              stroke="#55883B"
            />
            <path
              d="M116.001 72C116.003 72.2051 115.94 72.4055 115.823 72.5736C115.705 72.7416 115.538 72.8688 115.345 72.9375L111.38 74.3794L109.939 78.3437C109.868 78.5351 109.74 78.7002 109.572 78.8167C109.405 78.9333 109.205 78.9957 109.001 78.9957C108.797 78.9957 108.598 78.9333 108.43 78.8167C108.263 78.7002 108.135 78.5351 108.064 78.3437L106.622 74.375L102.657 72.9375C102.466 72.8664 102.301 72.7385 102.184 72.5709C102.068 72.4034 102.005 72.2041 102.005 72C102.005 71.7958 102.068 71.5966 102.184 71.429C102.301 71.2614 102.466 71.1335 102.657 71.0625L106.626 69.6206L108.064 65.6562C108.135 65.4648 108.263 65.2998 108.43 65.1832C108.598 65.0667 108.797 65.0042 109.001 65.0042C109.205 65.0042 109.405 65.0667 109.572 65.1832C109.74 65.2998 109.868 65.4648 109.939 65.6562L111.381 69.625L115.345 71.0625C115.538 71.1312 115.705 71.2584 115.823 71.4264C115.94 71.5944 116.003 71.7949 116.001 72Z"
              fill="#55883B"
            />
            <line
              y1="-0.5"
              x2="92.001"
              y2="-0.5"
              transform="matrix(1 0 0.00158987 0.999999 125.001 72)"
              stroke="#55883B"
            />
          </svg>
        </h1>

        <div className="w-full grid gap-14 justify-between items-center lg:grid-cols-2 mt-14">
          <article className="flex flex-col gap-7">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className=" text-stone-950 text-[48px] font-normal leading-10"
            >
              START MAKING <br />
              MONEY
            </h1>
            <p
              className=" text-stone-950 text-[16px] font-normal leading-loose"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              Introducing Pepaid, the hippest crypto project on Ethereum! It's
              so cool, it defies gravity and taxes. Join us for an electrifying
              journey where financial freedom is just a dance move away. No
              taxes, all vibes! Let's groove to the beat of Pepaid! 🕺💃🚀
            </p>
            <a
              data-aos="fade-right"
              data-aos-duration="400"
              href=""
              className="w-[241px] h-[54px] px-8 py-4 bg-orange-500 rounded-[100px] shadow text-white border border border border font-wendyOne uppercase border-lime-400 justify-center items-center gap-2.5 inline-flex hover:scale-95"
            >
              dextool chart
            </a>
          </article>
          <img src={Img2} alt="" data-aos="zoom-out" data-aos-duration="1200" />
        </div>
      </div>
    </div>
  );
};

export default About;
