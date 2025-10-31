import Image from "next/image";
import SVGIcons from "./icons/SVGIcons";
export default function FooterSection() {
  return (
    <div className="bg-cp-secondary py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="w-[90%] border-b-2 pb-15 border-black lg:w-[70%] text-center flex flex-col items-center m-auto">
          <Image
            className="mb-6"
            src="/img/logo.jpg"
            width={100}
            height={100}
            alt="Logo"
          />
          <div className="mb-6">
            <p className="font-bold mb-1 text-[18px]">Address</p>
            <p className="font-medium">
              3b Alegbe close Mende Maryland Lagos State Nigeria.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold mb-1 text-[18px]">Contact</p>
            <div className="font-medium">
              <div>
                <a className="font-medium" href="tel:+2347061055131">
                  +234 706 105 5131
                </a>
                ,{" "}
                <a className="font-medium" href="tel:+2348069519635">
                  +234 806 951 9635
                </a>
              </div>
              <div>
                <a
                  className="font-medium"
                  href="mailto:charles.adegoke@chadepackaging.com"
                >
                  Charles.adegoke@chadepackaging.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <SVGIcons.FacebookIcon />
            <SVGIcons.InstagramIcon />
            <SVGIcons.XIcon />
            <SVGIcons.LinkedInIcon />
          </div>
        </div>

        <div className="flex text-center pt-8 lg:pt-10 flex-col max-w-[800px] m-auto gap-8">
          <p>
            © {new Date(Date.now()).getFullYear()} Chade Packaging. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
