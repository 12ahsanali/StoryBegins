import React from "react";

const Interveiws = () => {
  return (
    <>
      <div>
        {/* interveiw */}
        <div className="relative pt-[20px] pb-[20px]">
          <div className="relative left-[-5px] flex justify=start w-[130px] h-[35px]">
            <a  target="_blank" href="https://www.artinthemiddle.com/collection/interview">
            <img
              src="Images/interveiw.jpg"
              className="w-full h-full object-fill"
              alt=""
            />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 mt-4">
            <div className="w-full h-[160px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/blog/futura-on-street-art-his-les-benjamins-collab-and-abu-dhabi-s-creative-energy">
               <div className="w-full h-full relative rounded-b-lg overflow-hidden">
                <img
                src="/Images/interveiwimage1.webp"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] w-full ">
              <p className="text-gray-200 font-Arial text-[8px] leading-[13px] font-semibold px-2 py-1">
                FUTURA on street art, his Les Benjamins collab and Abu Dhabi,s creative energy.</p>
              </div>
               </div>
                </a>
            </div>
            <div className="w-full h-[160px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/blog/artist-goloba-charles-paints-a-new-life-in-dubai">
              <div className="w-full h-full relative rounded-b-lg overflow-hidden">
                <img
                src="/Images/interveiwimage2.webp"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute w-full bottom-0 left-0 bg-[rgba(0,0,0,0.5)]">
              <p className="text-gray-200 text-[9px] font-Arial  leading-[13px] font-semibold px-2 py-1  bottom-0">
                Artist Goloba Charles paints a new life in Dubai</p>
              </div>
              </div>

                </a>
            </div>
            <div className="w-full h-[160px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/blog/inside-takhayyal-e-l-seed-talks-imagination-calligraphy-and-dubai-s-art-scene">
             <div className="w-full h-full relative rounded-b-lg overflow-hidden">
                 <img
                src="/Images/interveiwimage3.webp"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute w-full bottom-0 left-0 bg-[rgba(0,0,0,0.4)]">
              <p className="text-gray-200 text-[9px] leading-[13px] font-Arial  font-semibold px-2 py-1  bottom-0">
                Inside Takhayyal: eL Seed talks imagination, calligraphy and Dubai's art scene</p>
              </div>
             </div>
                </a>
            </div>
          </div>
        </div>
        {/* art and design */}
        <div className="relative pt-[20px]">
          <div className="relative left-[-5px] flex justify=start w-[130px] h-[35px]">
            <a target="_blank" href="https://www.artinthemiddle.com/collection/dine"> 
            <img
              src="Images/art&drop.jpg"
              className="w-full h-full -object-fill"
              alt=""
            />
            </a>
          </div>
          <div className="relative w-full h-[470px] pt-[15px]">
            <img
              src="/Images/blueshadeimage.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute  text-center inset-0 pt-[120px]  px-[15px] text-white">
              <h1 className="leading-[39px] text-[26px] font-bold font-Arial pb-5">
                teamLab Phenomena & Ting Irie Abu Dhabi
              </h1>
              <p className="leading-[24px] text-[16px] font-Arial pb-8">
                Spend a weekend in Abu Dhabi with this perfect Art & Dine
                pairing. Start at teamLab Phenomena on Saadiyat Island, an
                immersive digital art space full of light, colour and motion.
                Book ahead, wear flats, and choose solid colours for great
                photos. Then head to Ting Irie for bold Jamaican flavours and
                beach views. Ideal for couples, mates or solo wanderers.
              </p>
              <button className="hover:cursor-pointer rounded-lg px-[40px] py-[10px] text-[16px] font-Arial text-black bg-[rgb(255,130,197)]">
                <a  target="_blank"  href="https://www.artinthemiddle.com/blog/art-and-dine-teamlab-phenomena-ting-irie-abu-dhabi">Read more
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="w-full h-[289px] bg-[rgb(22,28,45)] border-[#d9d9d9] mt-7 mb-5">
          <div className=" flex flex-col items-center justify-center text-center">
            <div className="w-[114px] h-[114px]">
              <a  target="_blank" href="https://www.artinthemiddle.com/">
              <img src="/Images/AMlogo.png" alt="" />
              </a>
            </div>
            <p className="text-white pt-[10px] text-[14px] font-bold font-Arial">
              Art in the Middle Magazine
            </p>
            <div className="flex flex-row items-center justify-center gap-2 pt-4">
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="https://x.com/artinthemiddle_">
                  <img src="/Images/twittericon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="https://www.pinterest.com/@ArtintheMiddlemagazine/">
                  <img src="/Images/picoicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="https://www.instagram.com/artinthemiddlemag/">
                  <img src="/Images/instagramicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="https://linkedin.com/company/art-in-the-middle-magazine">
                  <img src="/Images/linkedinicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="https://www.facebook.com/artinthemiddle">
                  <img src="/Images/facebookicon.png" alt="a" />
                </a>
              </div>
            </div>
            <div className="text-white pt-4 text-[14px] font-Arial">
              <p>This email was sent to mashaim@buraktec.com.</p>
              <p className="pt-[3px]">
                You've received this email because you've subscribed to our
                newsletter.
              </p>
            </div>
            <div className="underline text-white pt-[13px] text-[14px] font-Arial">
              <a href="">Unsubscribe</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interveiws;
