import Link from "next/link";
import SVGIcons from "./icons/SVGIcons";

export default function WhyChooseUs() {
  const data = [
    {
      title: "Our Mission",
      content:
        "Our mission is to offer excellent services in each of our professional disciplines, in accordance with statutory practices, codes of conduct and integrity, thereby developing our team and providing a leading platform from which to serve the built environment and in particular, our highly esteemed clients.",
    },
    {
      title: "Proven track record",
      content:
        "Five years of delivering exceptional packaging solutions to leading retailers and brands across multiple sectors.",
    },
    {
      title: "Customer focus",
      content:
        "We build packaging solutions that align perfectly with your brand's unique requirements and market positioning.",
    },
  ];

  return (
    <div className="bg-[#7DCE94] py-20">
      <div className="max-w-[1440px] flex flex-col md:flex-row gap-10 lg:gap-20 justify-between px-10 m-auto">
        <div className="text-cp-primary w-full lg:w-[50%]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#146C78] w-[270px] leading-none font-bold mb-3">
            Why choose us?
          </h2>
          <p className="text-[20px] mb-10 max-w-[550px]">
            Our packaging solutions deliver measurable value to your business
            through innovative design and strategic thinking.
          </p>

          {data.map((item) => (
            <div key={item.title} className="max-w-[550px] mb-7">
              <div className="flex gap-5">
                <div>
                  <SVGIcons.SaveIcon />
                </div>
                <div>
                  <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] leading-none mb-3 text-[#146C78] font-semibold">
                    {item.title}
                  </h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-no-repeat relative overflow-clip bg-cover bg-center rounded-3xl h-[450px] lg:h-[640px] w-full lg:w-[600px]"
          style={{
            backgroundImage: `url("/img/why-choose-us.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </div>
  );
}
