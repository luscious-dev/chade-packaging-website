"use client";
import { useState } from "react";

type TabDetail = {
  header: string;
  content: string;
  image: string;
};

export default function PackagingSolutions() {
  const tabs = [
    "Bottle Preform",
    "Strip Label",
    "Carrier/Shopping Bags",
    "Refuse Bags",
    "Fomo Packs/Take Away",
    "Bottle Cover",
    "Disposable Cup",
    "Bread Nylon",
    "Cling Films",
    "Stretch Films",
  ];

  const tabDetails: Record<string, TabDetail> = {
    "Bottle Preform": {
      header: "Crafting packaging solutions for modern businesses",
      content:
        "We understand packaging is more than containers. It's communication, protection, and brand identity rolled into one powerful product.",
      image: "/img/packaging/bottle-pre-form.jpg",
    },
    "Strip Label": {
      header: "Precision, identity, and durability in every detail.",
      content:
        "At CHADE, we understand that a strip label is more than a tag — it’s the face of your product. Our labels are designed to communicate quality, reinforce brand identity, and ensure every package looks professional and consistent. From vibrant designs to long-lasting adhesion, we craft labels that stay sharp, clear, and true to your brand’s message.",
      image: "/img/packaging/shrink-labels.jpg",
    },
    "Carrier/Shopping Bags": {
      header: "Carrying your brand with strength and style.",
      content:
        " We design carrier and shopping bags that blend durability with visual appeal. More than just a means of transport, our bags are crafted to represent your brand wherever they go. Made from high-quality, eco-friendly materials, they offer strength, comfort, and a premium look that enhances your customers’ shopping experience. From retail packaging to corporate branding, our bags deliver both functionality and lasting impression.",
      image: "/img/packaging/shopping-bags.png",
    },
    "Refuse Bags": {
      header: "Reliable strength for everyday waste management.",
      content:
        "We produce refuse bags built to handle waste with efficiency, durability, and hygiene in mind. Our bags are crafted from high-quality materials that resist tears and leaks, ensuring a cleaner and more convenient disposal experience. Whether for households, offices, or industrial environments, our refuse bags provide dependable performance while supporting sustainable waste practices.",
      image: "/img/packaging/trash-bag.jpg",
    },
    "Fomo Packs/Take Away": {
      header: "Smart packaging for fresh and secure meals.",
      content:
        "At CHADE, our fomo packs are designed to keep food fresh, safe, and visually appealing. Crafted from high-quality, food-grade foam materials, they provide excellent insulation for both hot and cold meals. Whether used in restaurants, takeout services, or food deliveries, our fomo packs combine durability with convenience — ensuring your products reach customers in perfect condition while maintaining hygiene and presentation.",
      image: "/img/packaging/fomo.png",
    },
    "Bottle Cover": {
      header: "Protection that seals in quality.",
      content:
        "At CHADE, our bottle covers are designed to do more than cap a product — they preserve freshness, ensure safety, and enhance presentation. Whether for beverages, cosmetics, or industrial use, we provide durable, perfectly fitted covers that protect your product and reinforce your brand’s commitment to excellence. Every cover reflects precision, reliability, and attention to detail.",
      image: "/img/packaging/bottle-cover.jpg",
    },
    "Disposable Cup": {
      header: "Convenience crafted with care.",
      content:
        "Our disposable cups are designed to deliver comfort, durability, and style for every sip. At CHADE, we combine functionality with eco-conscious craftsmanship — creating cups that are lightweight, leak-resistant, and ideal for both hot and cold beverages. Whether for events, offices, or food service, our cups reflect quality you can trust and convenience your customers will appreciate.",
      image: "/img/packaging/disposable-cup.jpg",
    },
    "Bread Nylon": {
      header: "Freshness you can see, quality you can feel.",
      content:
        "Our bread nylon packaging is crafted to preserve taste, texture, and freshness from production to the customer’s table. Made from premium, food-safe materials, each nylon offers excellent clarity, strength, and sealing properties. Whether for local bakeries or large-scale distributors, our packaging ensures your bread stays protected, appealing, and ready to enjoy — every single time.",
      image: "/img/packaging/bread-nylon.png",
    },
    "Cling Films": {
      header: "Sealing freshness with precision and clarity.",
      content:
        "At CHADE, our cling films are designed to provide superior protection and presentation for food and packaging needs. Made from premium, stretchable materials, they cling tightly to surfaces to preserve freshness, prevent contamination, and maintain product quality. Ideal for households, restaurants, and industrial use, our films deliver a clean, transparent finish that keeps food safe and appealing while reducing waste.",
      image: "/img/packaging/cling-film.jpg",
    },
    "Stretch Films": {
      header: "Tough protection that keeps every load secure.",
      content:
        "Our stretch films are engineered for strength, flexibility, and reliability. Designed to tightly wrap and stabilize goods during storage or transportation, they help reduce product damage and improve load efficiency. Made from durable, high-performance materials, our films offer excellent stretchability, tear resistance, and clarity — providing a cost-effective solution for safe and professional packaging across industries.",
      image: "/img/packaging/stretch-film.jpg",
    },
  };

  const [curTab, setCurTab] = useState(tabs[0]);
  const [curTabDetail, setCurTabDetail] = useState(tabDetails[tabs[0]]);

  const setTabState = (tab: string) => {
    setCurTab(tab);
    setCurTabDetail(tabDetails[tab]);
  };

  return (
    <div className="bg-[#E2F5F2]">
      <div className="flex flex-col lg:flex-row">
        {tabs.map((item, i) => (
          <div
            key={item}
            onClick={() => setTabState(item)}
            className={`
        p-2 text-sm lg:p-5 cursor-pointer transition font-bold text-center border
        hover:bg-[#0E91A1] 
        ${curTab == item ? "bg-[#0E91A1] border-b-0" : ""}
        ${i != tabs.length - 1 ? "lg:border-r-0" : ""}
        
        flex-[1_1_auto]
        truncate
        overflow-hidden 
        text-ellipsis
        whitespace-nowrap
      `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center transition-all justify-between p-10">
        <div>
          <div className=" max-w-[650px]">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-[15px]">
              {curTab.toUpperCase()}
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              {curTabDetail.header}
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold ">
              {curTabDetail.content}
            </p>
          </div>
        </div>

        <div
          className={`rounded-3xl bg-cover bg-no-repeat bg-center w-[95%] sm:w-[70%] lg:w-[40%] h-[400px] lg:h-[550px]`}
          style={{ backgroundImage: `url(${curTabDetail.image})` }}
        ></div>
      </div>
    </div>
  );
}
