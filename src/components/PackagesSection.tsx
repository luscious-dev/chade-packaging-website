import PackagingSolutions from "./PackagingSolutions";

export default function PackagesSection() {
  return (
    <div className="bg-cp-secondary py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-cp-primary text-center max-w-[915px] m-auto mb-10">
          <h3 className="text-[24px] font-semibold mb-1">Packaging</h3>
          <h2 className="text-[48px] font-bold mb-3">
            Precision Packaging Solutions
          </h2>
          <p className="text-[24px] font-semibold">
            We deliver custom packaging that speaks to the heart of your
            business. Raw materials transformed into powerful brand messengers.
          </p>
        </div>

        <PackagingSolutions />
      </div>
    </div>
  );
}
