import React from "react";

const Features = () => {
  return (
    <>
      {/* feature */}
      <div className="relative pt-[10px]">
        <div className="relative left-[-5px] flex justify=start w-[130px] h-[35px]">
          <a href="https://www.artinthemiddle.com/collection/feature">
            <img
              src="Images/featuresimage.jpg"
              className="w-full h-full -object-fill"
              alt=""
            />
          </a>
        </div>
        <div class="parent py-[20px]">
          <div class="div1 w-full h-[133px]">
            <a
              target="_blank"
              href="https://www.artinthemiddle.com/blog/best-places-uae-buy-develop-film"
            >
              <div className="w-full h-full relative rounded-b-lg overflow-hidden">  
              <img
                src="Images/featureimage1.webp"
                className="object-cover object-[40%_70%] w-full h-full rounded-lg"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(29,28,20,0)_43%)]">
                <p className="text-white text-[14px] leading-[16px] font-semibold pl-3 pr-10 py-2 absolute bottom-0 ">The best places in the UAE to buy and develop film</p>
              </div>
              </div>
            </a>
          </div>
          <div class="div2">
            <a
              target="_blank"
              href="https://www.artinthemiddle.com/blog/zayed-national-museum-abu-dhabi-design"
            >
              <div className="w-full h-full relative rounded-b-lg overflow-hidden">
              <img
                src="Images/featureimage2.webp"
                className="object-fill w-full h-full rounded-lg block"
                alt="alt"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]">
                  <p className="text-white text-[14px] leading-[16px] font-semibold pl-3 pr-10 py-2 absolute bottom-0 ">
                    Zayed National Museum honours heritage through design
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="div3">
            <a
              target="_blank"
              href="https://www.artinthemiddle.com/blog/ahlam-bolooki-summer-reading-list"
            >
              <div className="w-full h-full relative rounded-b-lg overflow-hidden">
                <img
                  src="Images/featureimage3.webp"
                  className="object-cover w-full h-full rounded-lg"
                  alt="alt"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]">
                  <p className="text-white text-[14px] leading-[16px] font-semibold pl-3 pr-10 py-2 absolute bottom-0 ">
                    Ahlam Bolooki on the stories shaping her summer
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="div4">
            <a
              target="_blank"
              href="https://www.artinthemiddle.com/blog/walking-tours-qasr-alhukm-fatimah-abusrair"
            >
              <img
                src="Images/featuresNews4.jpg"
                className="object-fill w-full h-full rounded-lg"
                alt="alt"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-[300px] pt-2 pb-4">
          <a target="_blank" href="https://elfdubai.org/">
            <img
              src="/Images/featureNews5.jpg"
              alt=""
              className="object-fill w-full h-full rounded-lg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Features;
