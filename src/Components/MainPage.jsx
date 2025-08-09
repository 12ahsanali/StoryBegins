import React from "react";

const MainPage = () => {
  return (
    <>
        <div className="w-full pt-[9px] pb-[6.5px] flex justify-center items-center">
          <a href=""
            className=" text-[12px] text-[#858588] font-helvetica underline">View in browser
          </a>
        </div>
        <div className="relative w-full h-[311px]">
            <img src="/Images/frontimage.jpg" alt="front image"  class="w-full h-full object-cover"/>
            <div className="absolute top-0 left-[15px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/">
            <img src="/Images/AMlogo.png" alt="AM Logo" class="hover:cusor-pointer w-[80px] h-[80px] object-cover"/>
                </a>
            </div>
        </div>
    </>
  );
};

export default MainPage;
