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
              <img
                src="/Images/interveiwimage1.jpg"
                alt=""
                className="object-fill w-full h-full rounded-lg"
              />
                </a>
            </div>
            <div className="w-full h-[160px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/blog/artist-goloba-charles-paints-a-new-life-in-dubai">
              <img
                src="/Images/interveiwimage2.jpg"
                alt=""
                className="object-fill w-full h-full rounded-lg"
              />
                </a>
            </div>
            <div className="w-full h-[160px]">
                <a  target="_blank" href="https://www.artinthemiddle.com/blog/inside-takhayyal-e-l-seed-talks-imagination-calligraphy-and-dubai-s-art-scene">
              <img
                src="/Images/interveiwimage3.jpg"
                alt=""
                className="object-fill w-full h-full rounded-lg"
              />
                </a>
            </div>
          </div>
        </div>
        {/* art and design */}
        <div className="relative pt-[20px]">
          <div className="relative left-[-5px] flex justify=start w-[130px] h-[35px]">
            <img
              src="Images/art&drop.jpg"
              className="w-full h-full -object-fill"
              alt=""
            />
          </div>
          <div className="relative w-full h-[470px] pt-[15px]">
            <img
              src="/Images/blueshadeimage.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col items-center text-center inset-0 py-[100px] px-[15px] text-white">
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
              <button className="rounded-lg px-[40px] py-[10px] text-[16px] font-Arial text-black bg-[rgb(255,130,197)]">
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
              <img src="/Images/AMlogo.png" alt="" />
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
                <a  target="_blank" href="">
                  <img src="/Images/picoicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="">
                  <img src="/Images/instagramicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="">
                  <img src="/Images/linkedinicon.png" alt="a" />
                </a>
              </div>
              <div className=" w-[32px] h-[32px]">
                <a  target="_blank" href="">
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
