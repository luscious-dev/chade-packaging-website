import Image from "next/image";

export default function OurClientsSection() {
  const clientLogo = [
    "/img/clients/bokku.png",
    "/img/clients/jara.png",
    "/img/clients/justrite.jpg",
    "/img/clients/pick-pay.png",
    "/img/clients/addas.jpg",
    "/img/clients/market-square.jpg",
    "/img/clients/kata.jpg",
  ];

  return (
    <div className="bg-[#E2F5F2] py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-center max-w-[915px] m-auto mb-[90px]">
          <h2 className="text-[48px] text-[#007626] font-bold mb-3">
            Some of our clients
          </h2>
          <p className="text-[24px] text-[#007626] font-semibold">
            Our top clients we’ve worked with in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {clientLogo.map((item, i) => (
            <div
              key={i}
              className={`bg-no-repeat rounded-lg h-[195px] bg-cover bg-center ${
                i === clientLogo.length - 1 ? "lg:col-start-2" : ""
              }`}
              style={{ backgroundImage: `url("${item}")` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
