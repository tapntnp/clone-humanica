import React, { useState, useEffect } from "react";

const slides = [
    {
      image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_HR-Core-3.jpg",
      title: "Workplaze HR Core",
      text: "Implement the premier HR solution in Southeast Asia to digitize your essential HR processes",
      text2: "Digitize your basic HR Processes With the No. 1 HR Solution for SEA",
    },
    {
      image: "https://www.humanica.com/wp-content/uploads/2023/05/230518-bn-erp-homebanner.png",
      title: "Modern Enterprise Resource Planning",
      text: "Solution to merge Production, Inventory, Accounting, Sales, Delivery, and Projects effortlessly into employee workflows and compensation, fostering a Contemporary Enterprise Resource Management.",
      text2: "Integrate Accounting, Production, Inventory, Projects, Sales and Delivery into employee workflows and compensation with our advanced ERP Solution"
    },
    {
      image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_Workplaze-Mobile-2.jpg",
      title: "Workplaze for your mobile workforce",
      text: "Elevate your traditional HR operations with our leading HR solution and embrace the era of digital transformation.",
      text2:"Fuss-free access anytime, anywhere"
    },
    // 4
    {
      image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_Talent-Management-2.jpg",
      title: "Workplaze Talent Management",
      text: "Enhance your workforce’s potential with our advanced Talent Management Solution.",
      text2: "Maximize the value of your workforce with our next-generation Talent Management Solution"
    },

    {
        image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_Attandance-Recording-2.jpg",
        title: "Attendance Recording",
        text: "Time recorders, face scanners, card scanners, interactive displays, and many more – we offer cutting-edge machines for your attendance tracking.",
        text2: "Time recorders, face scanners, card scanners, interactive displays, and many more – we offer cutting-edge machines for your attendance tracking."
      },
    //   6
    {
        image: "https://www.humanica.com/wp-content/uploads/2023/06/Workplaze-OKR.png",
        title: "Integrated OKR",
        text: "Explore cutting-edge tools such as time recorders, face scanners, card scanners, interactive displays, and more for precise attendance tracking.",
        text2: "Performance Management enhanced with OKR linked to organizational activities that support both traditional and non-traditional workers"
      },
    //   7
    {
        image: "https://www.humanica.com/wp-content/uploads/2023/06/Payroll-Outsourcing-employees-meeting.png",
        title: "Payroll Outsourcing",
        text: "Concentrate on what your company does best. We do the same.",
        text2: "Concentrate on what your company does best. We do the same."
      },
    //   8
    {
        image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_-Benefits-Management.jpg",
        title: "Benefits Management",
        text: "Become a caring employer with Connect your business success with the right employee benefits using our digitalized insurance broker platform. With Benix, we help you prioritize your employees’ personal well-being and healthy lifestyles.",
        text2: "Become a caring employer with Connect your business success with the right employee benefits using our digitalized insurance broker platform. With Benix, we help you prioritize your employees’ personal well-being and healthy lifestyles."
      },
    //   9
    {
        image: "https://www.humanica.com/wp-content/uploads/2023/01/Homepage_Slider_Mid-Market-Solution.jpg",
        title: "Mid Market solutions",
        text: "Support your growing business with our flexible HR solutions catered to the evolving needs of medium sized companies. Our platforms Tigersoft and GreatDay HR combine across the board beneficial HRIS feature with a high level of scalability to support your changing HR requirements as you mature.",
        text2: "Support your growing business with our flexible HR solutions catered to the evolving needs of medium sized companies. Our platforms Tigersoft and GreatDay HR combine across the board beneficial HRIS feature with a high level of scalability to support your changing HR requirements as you mature."
      },
  ];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval); // Clean up interval
    }, [currentIndex]);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="relative max-w-screen mx-auto max-h-screen">
        {/* Image and Text */}
        <div className="overflow-hidden absolute z-[-9999999] w-full  object-cover">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="h-[80vh]  object-cover 2xl:h-[70vh] lg:h-[80vh] md:h-[60vh] w-full"
          />

        {/* 2xl------------------------- */}
        <div className=" hidden 2xl:flex lg:hidden md:hidden mt-4">
            <h1 className="  absolute left-1/4 top-48   text-4xl font-bold w-96 ">
            {slides[currentIndex].title}</h1>
            <p className="  text-black absolute left-1/4 top-48   w-96 text-xl font-semibold pt-24 ">
              {slides[currentIndex].text}
            </p>
          </div>

          {/* lg------------------------- */}
          <div className=" hidden lg:flex md:hidden 2xl:hidden mt-4">
            <h1 className="  absolute left-1/4 top-20   text-4xl font-bold w-96 ">
            {slides[currentIndex].title}</h1>
            <p className="  text-black absolute left-1/4 top-20   w-96 text-xl font-semibold pt-24 ">
              {slides[currentIndex].text}
            </p>
          </div>

          {/* md------------------------- */}
          <div className=" hidden md:flex lg:hidden 2xl:hidden mt-4">
            <h1 className="  absolute left-1/4 top-28   text-4xl font-bold w-96 ">
            {slides[currentIndex].title}</h1>
            <p className="  text-black absolute left-1/4 top-28   w-96 text-xl font-semibold pt-24 ">
              {slides[currentIndex].text}
            </p>
          </div>
          

            {/* sm ------------------------- */}
          <div className=" md:hidden lg:hidden  2xl:hidden mt-4 ">
            <h1 className="  absolute left-10 top-44  text-2xl font-bold w-64 ">
            {slides[currentIndex].title}</h1>

            <p className="  text-black absolute left-10 top-40  w-80 text-sm font-semibold pt-24">
              {slides[currentIndex].text2}
            </p>
          </div>


        </div>
  
        {/* Dots */}
        <div className="flex justify-center space-x-2 absolute z-[-99999] m-auto left-0 right-0 top-[75vh] 2xl:top-[65vh] lg:top-[70vh] md:top-[55vh]">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full  ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }

export default ImageSlider