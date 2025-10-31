import SVGIcons from "./icons/SVGIcons";

export default function HowWeDeliverSection() {
  return (
    <div className="bg-cp-secondary py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-cp-primary text-center max-w-[915px] m-auto mb-10">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold mb-1">
            Process
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-[700px] m-auto font-bold mb-3">
            How we deliver packaging solutions
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
            Transforming your packaging vision from concept to reality
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="bg-no-repeat relative h-[310px] flex flex-col basis-[300px] justify-end bg-center bg-cover p-8 text-cp-primary lg:grow-2"
            style={{
              backgroundImage: `url("/img/process/consultation.png")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10">
              <h3 className="text-[16px] font-semibold mb-1 ">
                <SVGIcons.RelumeIcon />
              </h3>
              <h2 className="text-[24px] md:text-[28px] font-bold leading-snug mb-3">
                Understanding your unique packaging requirements
              </h2>
              <p className="text-[16px] font-normal">
                We listen carefully to your specific needs and design custom
                packaging strategies.
              </p>
            </div>
          </div>

          <div
            className="bg-no-repeat relative h-[310px] flex flex-col basis-[300px] justify-end bg-cover bg-center  p-8 text-cp-primary grow"
            style={{
              backgroundImage: `url("/img/process/design-proto.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 ">
              <h3 className="text-[16px] font-semibold mb-1 ">
                <SVGIcons.RelumeIcon />
              </h3>
              <h2 className="text-[24px] md:text-[28px] font-bold leading-snug mb-3">
                Design and prototyping
              </h2>
              <p className="text-[16px] font-normal">
                Creating precise packaging solutions for your brand
              </p>
            </div>
          </div>

          <div
            className="bg-no-repeat relative h-[310px] flex flex-col basis-[300px] justify-end bg-cover bg-center  p-8 text-cp-primary grow"
            style={{
              backgroundImage: `url("/img/process/prod-delivery.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10">
              <h3 className="text-[16px] font-semibold mb-1 ">
                <SVGIcons.RelumeIcon />
              </h3>
              <h2 className="text-[24px] md:text-[28px] font-bold leading-snug mb-3">
                Production and delivery
              </h2>
              <p className="text-[16px] font-normal">
                Efficient manufacturing and timely distribution of your
                packaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
