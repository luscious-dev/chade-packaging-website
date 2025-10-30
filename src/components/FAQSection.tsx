export default function FAQSection() {
  const data = [
    {
      question: "What packaging services do you offer?",
      answer:
        "We provide comprehensive packaging solutions including preforms, carrier bags, shopping bags, garbage bags, food packs, and custom branding services for various industries.",
    },
    {
      question: "How long does production take?",
      answer:
        "Production timelines vary based on project complexity, typically ranging from 5-15 business days after design approval.",
    },
    {
      question: "Do you offer sustainable packaging?",
      answer:
        "Yes, we are committed to developing eco-friendly packaging solutions that minimize environmental impact while maintaining high-quality standards.",
    },
    {
      question: "Can you handle custom branding?",
      answer:
        "Absolutely. We specialize in custom branding and can incorporate your logo, colors, and design elements into packaging solutions.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve retail, food service, hospitality, healthcare, and many other sectors with tailored packaging solutions.",
    },
  ];
  return (
    <div className="bg-cp-secondary py-20">
      <div className="max-w-[1440px] px-10 m-auto">
        <div className="text-cp-primary text-center max-w-[915px] m-auto mb-20">
          <h2 className="text-[48px] max-w-[700px] m-auto font-bold mb-3">
            FAQs
          </h2>
          <p className="text-[24px] font-semibold">
            Quick answers to common questions about our packaging services
          </p>
        </div>

        <div className="flex flex-col max-w-[800px] m-auto gap-8">
          {data.map((item) => (
            <div
              key={item.question}
              className="p-10  flex flex-col gap-5 bg-white border border-cp-tertiary"
            >
              <h3 className="font-bold">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
