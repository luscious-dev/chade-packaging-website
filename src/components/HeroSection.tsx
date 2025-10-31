import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/img/hero-bg.jpg')] h-[800px] bg-top-right bg-no-repeat bg-cover flex items-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="pl-10 max-w-[1440px] m-auto">
        <div className="relative z-10 w-[90%] lg:w-[60%]">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cp-primary uppercase
          mb-6
        [text-shadow:6px_6px_6px_rgba(0,0,0,0.7)]"
          >
            Packaging solutions that transform your business
          </h1>
          <p className="text-xl lg:text-2xl leading-normal text-cp-primary font-semibold mb-6">
            We craft precision packaging for businesses that demand excellence.
            Our five years of experience deliver reliable, custom solutions
            across multiple industries.
          </p>
          <Link
            href={"#packages-selections"}
            className="bg-light-green hover:bg-light-green/80 text-white font-bold py-3 px-6"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
