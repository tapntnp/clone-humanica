import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // ใช้ null เพื่อบ่งบอกว่าไม่มีเมนูไหนเปิด

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu)); // ถ้าคลิกเมนูเดิม ให้ปิด, ถ้าคลิกเมนูใหม่ ให้เปิด
  };

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="container px-[15px] lg:px-[35px] py-2 max-w-full">
      <div className="nav-grid ">
        <a href="/">        <img
          className="min-h-24 min-w-24 lg:w-24"
          src="./images/logo.png"
          alt=""
        /></a>
        <div className=" hidden lg:flex lg:relative  lg:self-center lg:justify-self-center">
          <ul className="  flex space-x-5 text-gray-500 text-base">
            {/* Home */}
            <li className="menu-item ">
              <button className="menu-button">
                <a href="/">Home</a>
              </button>
            </li>

            {/* Product */}
            <li className="menu-item ">
              <button
                className="menu-button flex gap-x-1"
                onClick={() => handleMenuClick("menu1")}
              >
                Products
                <img
                  className="w-3 h-3 self-center"
                  src="./images/arrow-down-2.png"
                  alt=""
                />
              </button>
              {activeMenu === "menu1" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-4 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item  ">
                    <a href="/">HCM Core</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Benefits</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Recruitment</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Mobile</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Payroll</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Training</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Analytics</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">ERP</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">OKR</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Talent Management</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Attendance Recording</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Mid Market Solution</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Time Management</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Services */}
            <li className="menu-item ">
              <button
                className="menu-button flex gap-x-1"
                onClick={() => handleMenuClick("menu2")}
              >
                Services
                <img
                  className="w-3 h-3 self-center"
                  src="./images/arrow-down-2.png"
                  alt=""
                />
              </button>
              {activeMenu === "menu2" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-3 grid-rows-4 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item   ">
                    <a href="/">Payroll Outsourcing</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Corporate Services</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Project Implementation</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">MCPO</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Expatriate Service</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Customization</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Accounting Services</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Hosting</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Benefits Administration</a>
                  </li>
                  <li className="submenu-item row-start-4 col-start-2  ">
                    <a href="/">Consulting</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Our Strength*/}
            <li className="menu-item ">
              <button
                className="menu-button flex gap-x-1"
                onClick={() => handleMenuClick("menu3")}
              >
                Our Strength
                <img
                  className="w-3 h-3 self-center"
                  src="./images/arrow-down-2.png"
                  alt=""
                />
              </button>
              {activeMenu === "menu3" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-3 grid-row-3 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item   ">
                    <a href="/">Integration</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Technology</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">HRSaaS</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Innovation</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">
                      Security & Data <br />
                      Privacy
                    </a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Ecosystem</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">UI/UX</a>
                  </li>
                  <li className="submenu-item col-start-3 row-start-3  ">
                    <a href="/">
                      Changebr <br />
                      Management
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Resources*/}
            <li className="menu-item ">
              <button
                className="menu-button flex gap-x-1"
                onClick={() => handleMenuClick("menu4")}
              >
                Resources
                <img
                  className="w-3 h-3 self-center"
                  src="./images/arrow-down-2.png"
                  alt=""
                />
              </button>
              {activeMenu === "menu4" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-1 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item   ">
                    <a href="/">Blog</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Customer Story</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Download</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">EURA</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Company*/}
            <li className="menu-item ">
              <button
                className="menu-button flex gap-x-1"
                onClick={() => handleMenuClick("menu5")}
              >
                Company
                <img
                  className="w-3 h-3 self-center"
                  src="./images/arrow-down-2.png"
                  alt=""
                />
              </button>
              {activeMenu === "menu5" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-3 grid-row-4 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item   ">
                    <a href="/">About US</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Leadership</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Investors</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Vision & Mission</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Customers</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Awards & Certificates</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Governance</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Careers</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Others Policy</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Whistleblowing</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li className="menu-item ">
              <button className="menu-button">
                <a href="/">Contact</a>
              </button>
            </li>

            {/* Language */}
            <li className="menu-item ">
              <img
                className="w-6 self-center"
                src="./images/language.png"
                alt=""
                onClick={() => handleMenuClick("menu6")}
              />
              <a href="/"></a>
              {activeMenu === "menu6" && (
                <ul className="bg-white submenu absolute z-999 grid grid-cols-1 gap-x-5 min-w-max px-3 py-3 rounded-2xl mt-2">
                  <li className="submenu-item   ">
                    <a href="/">Thailand (English)</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Thailand (Thai)</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Indonesia (English)</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Indonesia (Bahasa)</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Global</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Philippines (English)</a>
                  </li>
                  <li className="submenu-item  ">
                    <a href="/">Vietnam (English)</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Singapore (English)</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/">Malaysia (English)</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      {/* mobile menu ------------------------- */}
      <div className="absolute  lg:hidden justify-self-end border-solid border border-black px-3 py-3" onClick={toggleMenu}>
        <img className="w-5  " src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000" alt="" />
      </div>

      {/* check menu -------------------------*/}
      {isMenuOpen ? (
          <ul className="text-black flex-col absolute z-99999 top-0 right-0 min-h-screen min-w-[80%]  bg-white text-gray-500 text-base ">
          {/* Home */}
          <li className="px-5 py-5 justify-self-end ">
            <img className="w-5  " src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" alt="" onClick={toggleMenu}/>
          </li>
          <li className="menu-item px-2 py-5">
            <button className="menu-button">
              <a href="/">Home</a>
            </button>
          </li>

          {/* Product */}
          <li className="menu-item px-2 py-5">
            <button
              className="menu-button flex gap-x-1"
              onClick={() => handleMenuClick("menu1")}
            >
              Products
              <img
                className="w-3 h-3 self-center absolute right-5"
                src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                alt=""
              />
            </button>
            {activeMenu === "menu1" && (
              <ul className="submenu flex-col px-3">
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />HCM Core</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Benefits</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Recruitment</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Mobile</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Payroll</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Training</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Analytics</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />ERP</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />OKR</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Talent Management</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Attendance Recording</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Mid Market Solution</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Time Management</a>
                </li>
              </ul>
            )}
          </li>

          {/* Services */}
          <li className="menu-item px-2 py-5">
            <button
              className="menu-button flex gap-x-1"
              onClick={() => handleMenuClick("menu2")}
            >
              Services
              <img
                className="w-3 h-3 self-center absolute right-5"
                src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                alt=""
              />
            </button>
            {activeMenu === "menu2" && (
              <ul className="submenu flex-col px-3">
                <li className="submenu-item   ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Payroll Outsourcing</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Corporate Services</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Project Implementation</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />MCPO</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Expatriate Service</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Customization</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Accounting Services</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Hosting</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Benefits Administration</a>
                </li>
                <li className="submenu-item row-start-4 col-start-2  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Consulting</a>
                </li>
              </ul>
            )}
          </li>

          {/* Our Strength*/}
          <li className="menu-item px-2 py-5">
            <button
              className="menu-button flex gap-x-1"
              onClick={() => handleMenuClick("menu3")}
            >
              Our Strength
              <img
                className="w-3 h-3 self-center absolute right-5"
                src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                alt=""
              />
            </button>
            {activeMenu === "menu3" && (
              <ul className=" submenu flex-col px-3">
                <li className="submenu-item   ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Integration</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Technology</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />HRSaaS</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Innovation</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />
                    Security & Data Privacy
                  </a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Ecosystem</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />UI/UX</a>
                </li>
                <li className="submenu-item col-start-3 row-start-3  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />
                    Changebr <br />
                    Management
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Resources*/}
          <li className="menu-item px-2 py-5">
            <button
              className="menu-button flex gap-x-1"
              onClick={() => handleMenuClick("menu4")}
            >
              Resources
              <img
                className="w-3 h-3 self-center absolute right-5"
                src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                alt=""
              />
            </button>
            {activeMenu === "menu4" && (
              <ul className="submenu flex-col px-3">
                <li className="submenu-item   ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Blog</a>
                </li>
                <li className="submenu-item  ">
                <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Customer Story</a>
                </li>
                <li className="submenu-item   ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Download</a>
                </li>
                <li className="submenu-item  ">
                <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />EURA</a>
                </li>
              </ul>
            )}
          </li>

          {/* Company*/}
          <li className="menu-item px-2 py-5">
            <button
              className=" menu-button flex gap-x-1"
              onClick={() => handleMenuClick("menu5")}
            >
              Company
              <img
                className="w-3 h-3 self-center absolute right-5"
                src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                alt=""
              />
            </button>
            {activeMenu === "menu5" && (
              <ul className="submenu flex-col px-3">
                <li className="submenu-item   ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />About US</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Leadership</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Investors</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Vision & Mission</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Privacy Policy</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Customers</a>
                </li>
                <li className="submenu-item  ">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Awards & Certificates</a>
                </li>
                <li className="submenu-item">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Governance</a>
                </li>
                <li className="submenu-item">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Careers</a>
                </li>
                <li className="submenu-item">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Others Policy</a>
                </li>
                <li className="submenu-item">
                  <a className="flex gap-2" href="/"><img className="w-4 h-4 self-center" src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000" alt="" />Whistleblowing</a>
                </li>
              </ul>
            )}
          </li>

          {/* Contact */}
          <li className="menu-item px-2 py-5">
            <button className="menu-button">
              <a href="/">Contact</a>
            </button>
          </li>

        </ul>
      ):null}

      
      </div>
    </div>
  );
}

export default Navbar;
