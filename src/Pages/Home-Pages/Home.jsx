import React from "react";
import Banner from "./Banner";
import RealEstateSection from "./RealEstateSection";
import LogoList from "./LogoList";
import EstateServices from "./EstateServices";
import UniqueHome from "./UniqueHome";
import Testimonals from "./Testimonals";
import Newsletter from "./Newsletter";
function Home() {
  return (
    <div>
      
      <Banner />
      <RealEstateSection />
      <LogoList />
      <EstateServices />
      <UniqueHome />
      <Testimonals/>
      <Newsletter/>
    </div>
  );
}

export default Home;
