import React from "react";
import realEstateAgent from "/src/assets/real-estate-agent.png";
import starVectorIcon from "/src/assets/start-vector.png";
export default function EstateServices() {
  const services = [
    { key: 1, title: "Buy a home", description: "Find your ideal home effortlessly with our expert guidance & extensive property listings, ensuring a smooth and satisfying home-buying experience." },
    { key: 2, title: "Rent a home", description: "Find your perfect rental home with ease. Our service offers personalized options and expert support to help you secure a comfortable and ideal living space.." },
    { key: 3, title: "Property management", description: " Expert property management to handle maintenance, tenant relations, and financials, ensuring your property runs smoothly and remains profitable." },
  ];
  return (
    <section className="bg-[#FDF3EE] my-5 py-24 " id="about">
      {/* main content */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-32 gap-10 lg:gap-20">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="lg:text-4xl font-bold text-gray-800">
            Discover the range of real <br /> estate{" "}
            <span className="text-orange-500">services</span> we offer
          </h2>
          <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start">
            <img
              src={realEstateAgent}
              alt="Real Estate Agent"
              className="rounded-lg shadow-lg"
            ></img>
          </div>
        </div>
        {/* Right content */}
        <div className="lg:w-1/2">
          <div className=" relative flex justify-center mb-3 lg:mb-10">
            <img src={starVectorIcon} alt="Star Icon" />
          </div>
          {/* service 1 */}
          {services.map((service) => (
            <div
              className="flex items-start space-x-4 lg:mb-6 "
              key={service.key}
            >
              <h3 className="lg:text-3xl font-bold text-gray-800">
                0{service.key}
              </h3>
              <div>
                <h4 className="lg:text-3xl font-bold text-[#0F0F0E]">
                  {service.title}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  {service.description}
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
