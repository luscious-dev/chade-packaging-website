import PackagingSolutions from "@/components/PackagingSolutions";
import HeroSection from "@/components/HeroSection";
import SVGIcons from "@/components/icons/SVGIcons";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Packaging Solutions Section */}
      <PackagesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <div className="bg-[#7DCE94] py-20">
        <div className="max-w-[1440px] flex gap-20 justify-between px-10 m-auto">
          <div className="text-cp-primary w-[50%]">
            <h2 className="text-[#146C78] text-[50px] w-[270px] leading-none font-bold mb-3">
              Why choose us?
            </h2>
            <p className="text-[20px] mb-10 max-w-[550px]">
              Our packaging solutions deliver measurable value to your business
              through innovative design and strategic thinking.
            </p>

            <div className="max-w-[550px] mb-7">
              <div className="flex gap-5">
                <div>
                  <SVGIcons.SaveIcon />
                </div>
                <div>
                  <h2 className="text-[28px] leading-none mb-3 text-[#146C78] font-semibold">
                    Our Mission
                  </h2>
                  <p>
                    Our mission is to offer excellent services in each of our
                    professional disciplines, in accordance with statutory
                    practices, codes of conduct and integrity, thereby
                    developing our team and providing a leading platform from
                    which to serve the built environment and in particular, our
                    highly esteemed clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[550px] mb-7">
              <div className="flex gap-5">
                <div>
                  <SVGIcons.SaveIcon />
                </div>
                <div>
                  <h2 className="text-[28px] leading-none mb-3 text-[#146C78] font-semibold">
                    Proven track record
                  </h2>
                  <p>
                    Five years of delivering exceptional packaging solutions to
                    leading retailers and brands across multiple sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[550px] mb-7">
              <div className="flex gap-5">
                <div>
                  <SVGIcons.SaveIcon />
                </div>
                <div>
                  <h2 className="text-[28px] leading-none mb-3 text-[#146C78] font-semibold">
                    Customer focus
                  </h2>
                  <p>
                    We build packaging solutions that align perfectly with your
                    brand's unique requirements and market positioning.
                  </p>
                </div>
              </div>
            </div>

            <Link
              className="px-5 bg-transparent text-cp-primary py-2 border-[3px] border-[#146C78] text-xl"
              href={"#"}
            >
              Contact
            </Link>
          </div>

          <div
            className="bg-no-repeat relative overflow-clip bg-cover bg-center rounded-3xl h-[640px] w-[600px]"
            style={{
              backgroundImage: `url("/img/why-choose-us.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </>
  );
}
