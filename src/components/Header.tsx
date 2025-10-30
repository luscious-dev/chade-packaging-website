import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="flex max-w-[1440px] px-10 justify-between m-auto items-center bg-header-background">
        <div>
          <Link href={"/"}>
            <Image
              width={80}
              height={80}
              src="/img/logo.jpg"
              alt="ChadePackaging"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8 font-bold">
          <Link className="text-xl" href={"#"}>
            Products
          </Link>
          <Link className="text-xl" href={"#"}>
            Services
          </Link>
          <Link className="text-xl" href={"#"}>
            Solutions
          </Link>
          <Link className="text-xl" href={"#"}>
            Resources
          </Link>
          <Link className="px-5 py-2 border-[3px] text-xl" href={"#"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
