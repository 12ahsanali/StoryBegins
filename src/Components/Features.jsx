import React from "react";

const Features = () => {
  return (
    <>
    {/* feature */}
    <div className="relative pt-[10px]">
        <div className="relative left-[-5px] flex justify=start w-[130px] h-[35px]">
          <a href="https://www.artinthemiddle.com/collection/feature">
            <img src="Images/featuresimage.jpg" className="w-full h-full -object-fill" alt="" />
          </a>
        </div>
      <div class="parent py-[20px]">
        <div class="div1">
          <a   target="_blank" href="https://www.artinthemiddle.com/blog/best-places-uae-buy-develop-film">
             <img src="Images/featureNews1.jpg" className="object-fill w-full h-full rounded-lg" alt="" />
          </a>
        </div>
        <div class="div2">
          <a  target="_blank" href="https://www.artinthemiddle.com/blog/zayed-national-museum-abu-dhabi-design">
            <img src="Images/featuresNew3.jpg" className="object-fill w-full h-full rounded-lg block" alt="alt" />
          </a>
        </div>
        <div class="div3">
          <a  target="_blank" href="https://www.artinthemiddle.com/blog/ahlam-bolooki-summer-reading-list">
            <img src="Images/featureNews2.jpg" className="object-fill w-full h-full rounded-lg" alt="alt" />
          </a>
        </div>
        <div class="div4">
          <a  target="_blank" href="https://www.artinthemiddle.com/blog/walking-tours-qasr-alhukm-fatimah-abusrair">
            <img src="Images/featuresNews4.jpg" className="object-fill w-full h-full rounded-lg" alt="alt" />
          </a>
        </div>
       </div>
       <div className="w-full h-[300px] pt-2 pb-4">
        <a  target="_blank" href="https://elfdubai.org/">
        <img src="/Images/featureNews5.jpg" alt="" className="object-fill w-full h-full rounded-lg" />
        </a>
       </div>
       </div>
    </>
  );
};

export default Features;
