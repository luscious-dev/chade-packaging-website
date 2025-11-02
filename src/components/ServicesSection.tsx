export default function ServicesSection() {
  const services = [
    {
      tag: "Expertise",
      title: "Custom packaging for every business need",
      content:
        "We design packaging solutions that protect your products and elevate your brand's visual identity.",
      image: "/img/services/custom-packaging.png",
    },
    {
      tag: "Innovation",
      title: "Sustainable packaging strategies",
      content:
        "Our approach minimizes environmental impact while maximizing brand visibility and product protection.",
      image: "/img/services/sustainable-packaging.jpg",
    },
    {
      tag: "Quality",
      title: "Precision engineering in every package",
      content:
        "We combine technical expertise with creative design to deliver packaging that meets the highest industry standards.",
      image: "/img/services/precision-engineering.jpg",
    },
  ];

  return (
    <div id="services" className="bg-[#E2F5F2] py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-cp-tertiary text-center max-w-[915px] m-auto mb-20 lg:mb-[110px]">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold mb-1">
            Services
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Our comprehensive packaging solutions
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
            Transforming raw materials into powerful brand communication tools
            across multiple industries.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {services.map((item) => (
            <div
              className="relative h-[450px] lg:h-[550px] w-full lg:w-[366px]  flex flex-col justify-end bg-no-repeat bg-cover lg:bg-center p-5 lg:p-8 text-cp-primary"
              key={item.title}
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10">
                <h3 className="text-[16px] font-semibold mb-1 ">{item.tag}</h3>
                <h2 className="text-[24px] lg:text-[28px] font-bold leading-snug mb-3">
                  {item.title}
                </h2>
                <p className="text-[16px] font-normal">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
