export default function PackagingExcellence() {
  return (
    <div className="bg-[#E2F5F2] py-20">
      <div className="max-w-[1440px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 justify-between px-10 m-auto">
        <div
          className="bg-no-repeat relative overflow-clip bg-cover bg-center h-[450px] lg:h-[640px] w-full lg:w-[600px]"
          style={{
            backgroundImage: `url("/img/five-years.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="text-[#146C78] w-full lg:w-[50%]">
          <h2 className="text-[#007626] text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[510px] leading-none font-bold mb-6">
            Five years of packaging excellence
          </h2>
          <p className="text-[18px] lg:text-[20px] font-bold mb-10 max-w-[550px]">
            We transform raw materials into powerful packaging solutions that
            drive business success. Our journey began with a commitment to
            precision and innovation.
          </p>
          <ul className="list-disc flex flex-col gap-3 font-bold text-[16px] lg:text-[18px] ml-8">
            <li>Trusted by leading retailers nationwide</li>
            <li>Delivering quality across multiple industries</li>
            <li>Packaging that speaks your brand's language</li>
            <li>Backed by a team of skilled professionals</li>
            <li>Consistent innovation in design and production</li>
            <li>Sustainable solutions for a cleaner environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
