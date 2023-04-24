import React, { useState } from "react";
import "./NftCard.css";
import { RiShoppingBagLine } from "react-icons/ri";
import Modal from "../Modal/Modal";
const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
  const [showModal, setShowModal] = useState(false);
  return (
    // <div className="card d-flex align-items-center justify-content-between gap-3">
    <div className="single_nft_card">
      <div className="nft_img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="nft_content">
        <h5 className="nft_title">
          <a href={`/market/:${id}`}>{title}</a>
        </h5>
        <div className="creator_info-wrapper d-flex gap-3">
          <div className="creator-img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>
          <div className="craetor-info w-100 d-flex align-items-center justify-content-between gap-3">
            <div>
              <h6>Created by</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid}ETH</p>
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid_btn d-flex align-items-center  gap-2"
            onClick={() => setShowModal(true)}
          >
            <RiShoppingBagLine size={20} />
            Place Bid
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}
          <span className="history_link">
            <a href="#">View History</a>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NftCard;
