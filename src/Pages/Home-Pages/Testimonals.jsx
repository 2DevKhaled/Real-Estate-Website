import React from "react";
import cardImg1 from "../../assets/users/about-1.png";
import cardImg2 from "../../assets/users/about-2.png";
import cardImg3 from "../../assets/users/about-3.png";
import qouteIcon from "../../assets/users/quate_icon.png"
const testimonals = [
  {
    key: 1,
    img: cardImg1,
    testimonalText:
      "Top-notch real estate service, always available with expert guidance. Highly professional and truly dedicated to clients’ needs.",
    name: "Michael Thompson",
    jobTitle: "Software Engineer",
  },
  {
    key: 1,
    img: cardImg2,
    testimonalText:
      "Dedicated real estate experts, always ready to help. Their support was invaluable throughout my buying experience.",
    name: "Daniel Martinez",
    jobTitle: "Product Designer",
  },
  {
    key: 1,
    img: cardImg3,
    testimonalText:
      "Fantastic real estate experience. The team was professional, responsive, and genuinely focused on my needs.",
    name: "Michael Smith",
    jobTitle: "Medical Officer",
  },
];
export default function Testimonal() {
  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="max-w-screen-2xl conatiner px-5 mx-auto ">
        {/* Header */}
        <div className="flex justify-center flex-col">
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-800">
            Clients speak volumes
            <span className="text-orange-500"> about us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-center mx-auto ">
            Stay up-to-date with our lastest news and blog posts, offering
            valueable insights and updates on industry trends and expert tips.
          </p>
        </div>
        {/* testimonals section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Cards */}
          {testimonals.map((testimonal, index) => (
            <div className="bg-white rounded-lg shadow-md p-6" key={index}>
              <img src={testimonal.img} alt="img" className="size-12 rounded-full object-cover"/>
              <div className="mb-4"> 
                <blockquote className="text-gray-700 text-sm mb-3 ">
                  {testimonal.testimonalText}
                </blockquote>
                <div className="text-start flex justify-between items-center">
                  <div>
                    <h4 className="text-gray-800 font-semibold">
                      {testimonal.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {" "}
                      {testimonal.jobTitle}
                    </p>
                  </div>
                  <div>
                    <span className="">
                      <img src={qouteIcon}/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* dots for slider */}
        <div className="flex justify-center mt-8">
          <div className="size-2 bg-orange-500 rounded-full mx-1"></div>
          <div className="size-2 bg-orange-300 rounded-full mx-1"></div>
          <div className="size-2 bg-orange-300 rounded-full mx-1"></div>
        </div>
      </div>
    </section>
  );
}
