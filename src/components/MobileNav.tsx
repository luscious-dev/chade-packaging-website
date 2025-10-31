import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
  modalActive: boolean;
  onClick: () => void;
}

export default function MobileNav({ modalActive, onClick }: MobileNavProps) {
  return (
    <div
      className={`absolute transition-all duration-300 top-0 left-0 bottom-0 right-0 bg-black/60 ${
        modalActive ? "open-backdrop" : "close-backdrop"
      }`}
      onClick={onClick}
    >
      <div
        className={`bg-white transition-all duration-300 w-[80%] absolute flex flex-col items-center gap-5 p-10 top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 ${
          modalActive ? "open-modal" : "close-modal"
        }`}
      >
        <Link
          className="text-[18px] transition-all hover:text-[#146c78] border-transparent border-b-2 hover:border-[#146c78]"
          href="#packages-selections"
        >
          Products
        </Link>
        <Link
          className="text-[18px] transition-all hover:text-[#146c78] border-transparent border-b-2 hover:border-[#146c78]"
          href={"#services"}
        >
          Services
        </Link>

        <Link
          className="text-[18px] transition-all hover:text-[#146c78] border-transparent border-b-2 hover:border-[#146c78]"
          href={"#team"}
        >
          Team
        </Link>
        <Link
          className="text-[18px] transition-all hover:text-[#146c78] border-transparent border-b-2 hover:border-[#146c78]"
          href={"#reviews"}
        >
          Reviews
        </Link>
        <Link
          className="px-5 transition-all py-2 border-[3px] border-black text-[18px] hover:text-white hover:bg-[#146c78]"
          href={"#contact-us"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
