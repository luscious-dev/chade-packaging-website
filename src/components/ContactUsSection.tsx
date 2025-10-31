import SVGIcons from "./icons/SVGIcons";

export default function ContactUsSection() {
  return (
    <div id="contact-us" className="bg-[#E2F5F2] py-20">
      <div className="max-w-[1440px] flex flex-col px-10 m-auto">
        <div className="flex flex-col lg:flex-row text-black gap-10 justify-between mb-[45px] lg:mb-[90px]">
          <div>
            <h3 className="text-[12px] lg:text-[16px] font-medium">Connect</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="font-medium">
              We're ready to discuss your packaging needs and create custom
              solutions
            </p>
          </div>
          <div className="leading-none flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <SVGIcons.EmailIcon />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[16px] lg:text-[18px]">Email</p>
                <a
                  className="text-[14px] lg:text-[16px] font-medium"
                  href="mailto:charles.adegoke@chadepackaging.com"
                >
                  Charles.adegoke@chadepackaging.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <SVGIcons.PhoneIcon />
              <div className="flex flex-col gap-2">
                <p className="font-bold  text-[16px] lg:text-[18px]">Phone</p>
                <div>
                  <a
                    className="text-[14px] lg:text-[16px] font-medium"
                    href="tel:+2347061055131"
                  >
                    +234 706 105 5131
                  </a>
                  ,{" "}
                  <a
                    className="text-[14px] lg:text-[16px] font-medium"
                    href="tel:+2348069519635"
                  >
                    +234 806 951 9635
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <SVGIcons.LocationIcon />
              <div className="flex flex-col gap-2">
                <p className="font-bold  text-[16px] lg:text-[18px]">Office</p>
                <p className="text-[14px] lg:text-[16px] font-medium">
                  3b Alegbe close Mende Maryland Lagos State Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[600px] lg:h-[720px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6201218900496!2d3.3687740756801623!3d6.569536222625241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9278547c0001%3A0xc00516f95db0cce1!2s3B%20Alegbe%20Cl%2C%20Maryland%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1761915954685!5m2!1sen!2sng"
            className="h-[600px] lg:h-[720px] w-full border-0 md:h-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
