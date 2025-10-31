"use client";

import Link from "next/link";
import Image from "next/image";
import SVGIcons from "./icons/SVGIcons";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export default function Header() {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalActive ? "hidden" : "auto";
  }, [modalActive]);

  const onBackdropClick = () => {
    setModalActive(!modalActive);
  };

  return (
    <div>
      <div className="flex max-w-[1440px] px-10 justify-between m-auto items-center bg-header-background">
        <div>
          <Link href={"/"}>
            <img src={"/img/logo.jpg"} className="h-15 lg:h-20" />
          </Link>
        </div>

        <div className="lg:flex lg:gap-8 hidden items-center  font-bold">
          <Link
            className="text-[18px] transition-all hover:text-[#146c78] border-transparent border-b-2 hover:border-[#146c78]"
            href={"#packages-selections"}
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
            className="transition-all px-5 py-2 border-[3px] border-black text-[18px] hover:text-white hover:bg-[#146c78]"
            href={"#contact-us"}
          >
            Contact
          </Link>
        </div>

        <div className="flex lg:hidden">
          <SVGIcons.MenuIcon
            onClick={() => setModalActive(true)}
            className="h-8 cursor-pointer"
          />
        </div>

        {/* Mobile Navigation */}
        <MobileNav modalActive={modalActive} onClick={onBackdropClick} />
      </div>
    </div>
  );
}
