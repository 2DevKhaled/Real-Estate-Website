import React from "react";
import companyLogo1 from "/src/assets/company-logos/logo-1.png";
import companyLogo2 from "/src/assets/company-logos/logo-2.png";
import companyLogo3 from "/src/assets/company-logos/logo-3.png";
import companyLogo4 from "/src/assets/company-logos/logo-4.png";
import companyLogo5 from "/src/assets/company-logos/logo-5.png";
import companyLogo6 from "/src/assets/company-logos/logo-6.png";
export default function LogoList() {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-around items-center gap-6 my-10 py-4 px-16">
      <div>
        <img src={companyLogo1} alt="company Logo 1" />
      </div>
      <div>
        <img src={companyLogo2} alt="company Logo 2" />
      </div>
      <div>
        <img src={companyLogo3} alt="company Logo 3" />
      </div>
      <div>
        <img src={companyLogo4} alt="company Logo 4" />
      </div>
      <div>
        <img src={companyLogo5} alt="company Logo 5" />
      </div>
      <div>
        <img src={companyLogo6} alt="company Logo 6" />
      </div>
    </div>
  );
}
