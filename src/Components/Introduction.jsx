import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="w-full py-[20px] ">
        <div className="grid grid-cols-[30%_65%] gap-[35px] ">
          {/* Image */}
          <div className="w-[199.77px] h-[310px] p-[15px]">
            <img
              src="/Images/femaleimage.png"
              alt="Female"
              className="w-full h-full object-fill"
            />
          </div>
          {/* Text Content */}
          <div className="relative flex flex-col items-starts w-full h-[310px]">
            <div className="font-Arial text-[rgb(65,65,65)] top-[60px] absolute w-[370px] h-full flex flex-col gap-6">
              <div className="leading-[24px] text-[13px]">
                <p className=" text-[13px]">
                  <span className="block">Hi ,</span>
                  Welcome to the first Art in the Middle newsletter. We're here
                  to share the creative energy coming out of the Middle East,
                  across visual art, design, literature, music and more.
                  Discover the talent and voices shaping the region's cultural
                  scene.
                </p>
              </div>
              <div className="leading-[24px] text-[13px]">
                <p className="font-bold">Hayley Alexander</p>
                <p>Editor-in-Chief</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[171px] pt-[9px] pb-[30px]">
        <a  target="_blank" href="https://pachaicons.com/event/17102025-carl-cox-grand-dubai-season-opening">
        <img
          src="Images/bluebannerimage.jpg"
          className="w-full h-full object-fill rounded-lg"
          alt="blue banner"
        />
        </a>
      </div>
      <div>
        <div className="relative w-full ">
          <h1 className="font-Arial text-[rgb(65,65,65)] text-[16px] font-bold py-[12px]">Explore and Create This Summer</h1>
          <p className="font-Arial text-[rgb(65,65,65)] text-[13px] pb-6 leading-[24px]">Summer in the UAE has a rhythm of its own. I’m looking forward to the last few weeks of a calm August before things get busy again. The slightly slower pace has created room to reset and tap into a different kind of energy. I recently staycayed at Andaz The Palm, a comfy creative space that allowed me to recharge and spark new ideas. It set the perfect mood for summer, I'm very tempted to head back for one last summer staycay</p>
          <p className="font-Arial text-[rgb(65,65,65)] text-[13px] pb-6 leading-[24px]" >There’s plenty to explore if you’re staying local. Efie Gallery and Carbon 12 in Alserkal Avenue are open this season, Cinema Akil is showing timeless films, and Kutubna Cultural Center is hosting an evening writing club. Or try an Art & Dine night where food meets creativity. The city may be quieter, but inspiration is still buzzing</p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
