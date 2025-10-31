import SVGIcons from "./icons/SVGIcons";

export default function WhatOurClientsSaySection() {
  const data = [
    {
      rating: 5,
      name: "John",
      content:
        "Chade Packaging transformed our product presentation with innovative and reliable packaging designs.",
      initals: "J",
    },
    {
      rating: 5,
      name: "Ade",
      content:
        "Their packaging solutions have significantly improved our brand's market visibility and customer perception.",
      initals: "A",
    },
    {
      rating: 5,
      name: "Ahmed",
      content:
        "Exceptional quality, timely delivery, and creative packaging that truly stands out.",
      initals: "A",
    },
  ];
  return (
    <div id="reviews" className="bg-cp-secondary py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-cp-primary text-center max-w-[915px] m-auto mb-10 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-[700px] m-auto font-bold mb-3">
            What our clients say
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
            Real stories from businesses that trust our packaging solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between grow gap-8">
          {data.map((item) => (
            <div
              key={item.name}
              className="p-10 basis-[200px] md:basis-[400px] flex flex-col gap-5 bg-[#E2F5F2] border border-cp-tertiary"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SVGIcons.StarIcon key={i} />
                ))}
              </div>
              <p>{item.content}</p>
              <div className="flex items-center gap-4 justify-self-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg bg-[#0E91A1]">
                  {item.initals}
                </div>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
