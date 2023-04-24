import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import {
  AiOutlineFire,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { RiWalletLine } from "react-icons/ri";
// import { RiWalletLine } from "react-icons/ai";
// import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        //
      });
    };
  }, []);
  const NAV_LINKS = [
    {
      display: "Home",
      url: "/home",
    },
    {
      display: "Market",
      url: "/market",
    },
    {
      display: "Create",
      url: "/create",
    },
    {
      display: "Contact",
      url: "/contact",
    },
  ];

  // const menuRef = useRef(null);
  // const toggleMenu = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-2">
              <AiOutlineFire className="ai-fire" />
              NFTs
            </h2>
          </div>
          <div className="nav_menu">
            <ul className="nav_list ">
              {NAV_LINKS.map((item, index) => {
                return (
                  <li className="nav_item" key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav_right d-flex align-items-center gap-2 ">
            <button className="btn ">
              <a
                href="/wallet"
                style={{ textDecoration: "none" }}
                className="d-flex align-items-center gap-2 "
              >
                <RiWalletLine className="icon" />
                <span> Connect Wallet</span>
              </a>
            </button>

            <span className="mobile_menu">
              <AiOutlineMenu className="icon" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
