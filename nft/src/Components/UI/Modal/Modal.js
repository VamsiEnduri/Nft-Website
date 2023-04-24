import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
const Modal = ({ setShowModal }) => {
  return (
    <div className="modal_wrapper">
      <div className="single_modal">
        <span className="close_modal">
          <RiCloseLine className="i" onClick={() => setShowModal(false)} />
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>
        <div className="input_item mb-4">
          <input type="number" placeholder="00:00 ETH" />
        </div>

        <div className="input_item mb-3">
          <h6>Enter qyanity, 7 avialble</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-1">
          <p>You must bid at leaset</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Service fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Total bid amount</p>
          <span className="money">5.89 ETH</span>
        </div>
        <button className="place_bid_btn mt-2">Place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;
