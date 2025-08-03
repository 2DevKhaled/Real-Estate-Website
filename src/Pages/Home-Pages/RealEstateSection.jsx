import React from "react";
const items = [
  { count: "200+", label: "Modern\nProperties" },
  { count: "98%", label: "Client\nSatisfaction" },
  { count: "12+", label: "Years\nExperience" },
  { count: "20+", label: "Award\nWinning" },
];
export default function RealEstateSection() {
  return (
    <section className="max-w-screen-xl mx-auto lg:my-20 my-7 p-7 ">
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left section  */}
          <div className="space-y-6">
            <div className="max-w-md">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Building dreams into stunning
                <span className="text-[#ff5b28]"> real estate</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-gray-800">
                We take pride in our track record of excellence and innovation
                in the real estate industry. Here’s a glimpse of our notable
                achievements.
              </p>
            </div>
            <div className="mt-7 lg:mt-12">
              <button className="px-6 py-3 border text-gray-800 border-orange-600 flex items-center gap-2 text-sm lg:text-base font-medium rounded-md transition-transform transform hover:scale-105 ">
                More About Us{" "}
                <img src="/src/assets/arrow.png" alt="arrow-icon" />
              </button>
            </div>
          </div>
          {/* Right section  */}
          <div className="grid grid-cols-2 gap-6">
          {items.map((item,index) => (
            <div key={index} className="bg-orange-50 p-6 text-start rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800 lg:text-3xl">{item.count}</h2>
              <p className="text-gray-700 mt-2 whitespace-pre-line-">{item.label}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
