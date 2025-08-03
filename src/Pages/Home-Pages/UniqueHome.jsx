import React from "react";

import cardImg1 from "../../assets/property/card-1.png";
import cardImg2 from "../../assets/property/card-2.png";
import cardImg3 from "../../assets/property/card-3.png";
import cardImg4 from "../../assets/property/card-4.png";
import cardImg5 from "../../assets/property/card-5.png";
import cardImg6 from "../../assets/property/card-6.png";
import arrowIcon from "../../assets/arrow.png";

const UniqueHome = () => {
  return (
    <section className="bg-white mb-10 py-28" id="properties">
      <div className="max-w-screen-2xl container mx-auto px-5">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Find your home with{" "}
            <span className="text-orange-500">unique preferences</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#0F0E0E] mt-4">
              Explore a curated selection of homes designed to match your unique
              preferences, making it effortless to find the ideal property that
              perfectly fits your lifestyle and needs.
            </p>
          </div>
        </div>

        {/* card section 1*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="relative overflow-hidden">
            <img
              src={cardImg1}
              alt="card image 1"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                Luxury waterfront
              </p>
              <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative lg:-mb-16 lg:mt-16 overflow-hidden">
            <img
              src={cardImg2}
              alt="card image 2"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                Luxury waterfront
              </p>
              <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative overflow-hidden">
            <img
              src={cardImg3}
              alt="card image 1"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                Luxury waterfront
              </p>
              <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
            </div>
          </div>
        </div>

        {/* card section 2 */}
        <div className="md:mt-20 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 4 */}
            <div className="relative overflow-hidden">
              <img
                src={cardImg4}
                alt="card image 4"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  Luxury waterfront
                </p>
                <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
              </div>
            </div>

            {/* card 5 */}
            <div className="lg:-mb-16 lg:mt-16 overflow-hidden">
              <img
                src={cardImg5}
                alt="card image 5"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  Luxury waterfront
                </p>
                <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
              </div>
            </div>

            {/* card 6 */}
            <div className="relative overflow-hidden">
              <img
                src={cardImg6}
                alt="card image 6"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  Luxury waterfront
                </p>
                <h3 className="text-[#0F0E0E] font-bold">$235, 000</h3>
              </div>
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="text-center mt-9 lg:mt-24">
          <button className="px-6 py-3 border mx-auto text-[#0F0E0E] border-orange-600 flex items-center gap-2 text-sm font-medium rounded-md transition-transform transform hover:scale-105">
            View all properties{" "}
            <span>
              {" "}
              <img src={arrowIcon} alt="arrow icon" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniqueHome;
