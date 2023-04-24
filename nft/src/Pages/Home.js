import React from "react";
import HeroSection from "../Components/UI/HeroSection";
import LiveAuction from "../Components/UI/LiveAuction/LiveAuction";
import SellerSection from "../Components/UI/SellerSection/SellerSection";
import Trending from "../Components/UI/Trending/Trending";
import StepSection from "../Components/UI/StepSection/StepSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </div>
  );
};

export default Home;
