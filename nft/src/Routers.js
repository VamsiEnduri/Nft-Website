import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Create from "./Pages/Create";
import EditProfile from "./Pages/EditProfile";
import Market from "./Pages/Market";
import NftDetails from "./Pages/NftDetails";
import SellerProfile from "./Pages/SellerProfile";
import Wallet from "./Pages/Wallet";
const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Nft-Website/favicon.ico"
            element={<Navigate to="/home" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/conatct" element={<Contact />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit-Profile" element={<EditProfile />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market/:id" element={<NftDetails />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/seller-Profile" element={<SellerProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
