import Image from "next/image";
import SVGIcons from "./icons/SVGIcons";

export default function TeamSection() {
  return (
    <div id="team" className="bg-[#E2F5F2] py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-center max-w-[915px] m-auto mb-[50px] md:mb-[65px] lg:mb-[90px]">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#146C78] font-semibold mb-1">
            Team
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#007626] font-bold mb-3">
            Our experts
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#007626] font-semibold">
            Passionate professionals driving packaging innovation
          </p>
        </div>

        <div className="flex justify-between items-center flex-col">
          <img
            src={`/img/expert.jpg`}
            className="mb-6 h-[450px] lg:h-[600px]"
            alt="expert"
          />
          <div className="text-center">
            <h2 className="uppercase text-[28px] text-[#007626] font-extrabold">
              Adegoke Adedayo Charles{" "}
            </h2>
            <h3 className="text-[#146C78] font-bold text-[20px] mb-5">
              Managing Director
            </h3>
            <p className="text-[#007626] font-bold mb-5">
              Visionary leader with deep understanding of packaging industry
              dynamics.
            </p>
            <div className="flex gap-5 justify-center">
              <SVGIcons.LinkedInIcon />
              <SVGIcons.XIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
