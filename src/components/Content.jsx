import React,{useState} from 'react'


function Content() {

      const [activeMenu, setActiveMenu] = useState(null); // ใช้ null เพื่อบ่งบอกว่าไม่มีเมนูไหนเปิด
    
      const handleMenuClick = (menu) => {
        setActiveMenu((prev) => (prev === menu ? null : menu)); // ถ้าคลิกเมนูเดิม ให้ปิด, ถ้าคลิกเมนูใหม่ ให้เปิด
      };

    //   ----------------------------------


  return (
    <div className='container absolute top-full  min-w-full '>
        <section className='px-[15%] pt-[5%]'>
            <div className='flex-col lg:grid lg:grid-cols-2 gap-x-10 pb-20'>
                <div className='detail bg-white '>
                    <h1 className='text-4xl font-bold w-11/12 lg:w-9/12'>Humanica: Your Trusted Partner for Comprehensive HR Solutions in Southeast Asia</h1>
                    <br />
                    <p className='font-semibold text-gray-500 lg:w-11/12 text-base'>Tailored for the modern organization in the Southeast Asia region, Humanica offers a range of comprehensive business solutions. Our cutting-edge software and outstanding services are crafted to prepare you for the upcoming stage in your transformation journey, covering everything from comprehensive HR management to finance and accounting. Collaborating closely with you, we aim to create lasting value for years to come.</p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3  gap-6 items-center text-center '>
                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services1.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>HR Core</h1>
                        </a>
                    </div>

                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services2.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>Talent Management</h1>
                        </a>
                    </div>

                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services3.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>PayRoll & Taxes</h1>
                        </a>
                    </div>

                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services4.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>Benefits</h1>
                        </a>
                    </div>

                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services5.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>ERP</h1>
                        </a>
                    </div>

                    <div className=' px-1 lg:px-8 py-8 hover:shadow-xl hover:border-solid hover:border hover:border-blac-100 hover:rounded-lg'>
                        <a href="/">
                        <img className='self-center justify-self-center pb-5 ' src="./images/section1-services6.png" alt="" />
                        <h1 className='text-gray-500 font-semibold'>Mid Market Solutions</h1>
                        </a>
                    </div>
                    
                    



                </div>

            </div>
        </section>

        <section className='px-[15%] lg:px-[20%] bg-[#f9f9f9]  pt-[10%] lg:pt-[2%] pb-[20%] lg:pb-[4%]'>
            <div className='lg:flex gap-[10%]'>
                <div>
                    <img className='w-full' src="https://www.humanica.com/wp-content/uploads/2023/02/stay-ahead.png" alt="" />
                </div>
                <div className=' pt-[8%] lg:w-11/12'>
                    <h1 className='text-3xl font-bold'>Stay Ahead in the Game</h1>
                    <br />
                    <p className='text-gray-500 text-base font-semibold '>The world changing quickly and companies must innovate or be passed by are recurring themes. The ability to see those changes and guide teams accordingly shows good leadership.</p>
                    <br />
                    <p className='text-gray-500 text-base font-semibold'>Our flexible solutions help you do that and allow you agility to move ahead.</p>
                </div>
            </div>
        </section>

        <section className=' px-[5%] lg:px-[15%] bg-[#f9f9f9] pb-[20%] lg:pb-[5%]' >
            <h1 className='text-center text-3xl font-bold pb-[3%]'>Our Services</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-[10%] lg:gap-[3%]'>
                <div className='bg-white shadow-xl  px-[10%] lg:px-8 py-8 rounded-lg hover:shadow-2xl'>
                <a href="/">
                    <img className='' src="./images/our-services-1.png" alt="" />
                    <h1 className='pt-[10%]  text-xl font-bold'>Payroll Outsourcing</h1>
                    <br />
                    <br />
                    <img className='' src="./images/arrow-right.png" alt="" />
                    </a>
                </div>

                <div className='bg-white shadow-xl  px-8 py-8 rounded-lg hover:shadow-2xl'>
                <a href="/">
                    <img className='' src="./images/our-services-2.png" alt="" />
                    <h1 className='pt-[10%]  text-xl font-bold'>Accounting Services</h1>
                    <br />
                    <br />
                    <img className='' src="./images/arrow-right.png" alt="" />
                    </a>
                </div>

                <div className='bg-white shadow-xl  px-8 py-8 rounded-lg hover:shadow-2xl'>
                <a href="/">
                    <img className='' src="./images/our-services-3.png" alt="" />
                    <h1 className='pt-[10%]  text-xl font-bold'>Corporate Services</h1>
                    <br />
                    <br />
                    <img className='' src="./images/arrow-right.png" alt="" />
                    </a>
                </div>

                <div className='bg-white shadow-xl  px-8 py-8 rounded-lg hover:shadow-2xl'>
                <a href="/">
                    <img className='' src="./images/our-services-4.png" alt="" />
                    <h1 className='pt-[10%] text-xl font-bold'>Hosting</h1>
                    <br />
                    <br />
                    <br className='md:hidden'/>
                    <img className='' src="./images/arrow-right.png" alt="" />
                    </a>
                </div>
            </div>
        </section>

        <section className='px-[10%] lg:px-[15%] bg-[#f9f9f9] pb-[10%] lg:pb-[3%]'>
            <div className='md:flex gap-[18%]'>
                <div className='md:w-11/12 lg:w-6/12'> 
                    <h1 className='text-3xl font-bold pt-[10%]'>Our Strength</h1>
                    <br />
                    <p className='text-gray-500 font-semibold text-base'>In facilitating change, Humanica is committed to leveraging technologies that enhance communication and collaboration for our customers.</p>
                    <br />
                    <p className='text-gray-500 font-semibold text-base'>We firmly believe that successful change begins with people and thrives when they collaborate towards shared objectives.</p>
                </div>

                <div>
                    <img className=' lg:w-9/12 pt-[5%]' src="https://www.humanica.com/wp-content/uploads/2023/02/Our-Strength.png" alt="" />
                </div>
            </div>

        </section>

        <section className='px-[15%] bg-[#f9f9f9] pb-[5%]'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold pb-[2%]'>Why Choose Humanica?</h1>
                <p className='text-gray-500 font-semibold pb-[4%]'>Humanica stands out as the ideal choice because we tailor solutions to meet your specific business processes, prioritizing flexibility, efficiency, and engagement. Our technical solutions are reinforced by a substantial team of professional services experts in HR, project management, support, and security. This ensures timely and budget-friendly project launches, guaranteeing the success of the implementation. Our commitment extends to working closely with customers, fostering a partnership that creates lasting value for years to come</p>
            </div>
            <div className='flex-col md:grid md:grid-cols-3 gap-x-[2%] '>
                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-features.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Features</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>Our market-leading solution offers robust features designed to support a broad spectrum of HR best practices through cutting-edge technology. Achieve optimal attendance tracking through mobile, kiosk, and physical devices, ensuring security against fraud.</p>
                </div>

                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-secure.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Secure</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>Enabling secure operations for customers involves implementing stringent security standards and continual optimization for efficient processing, ensuring the safety of data and applications under our vigilant care.</p>
                </div>

                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-proven.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Proven</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>Our solutions have gained the trust of 2000 companies and 1.2 million users, boasting a remarkable 98% customer satisfaction rate. Many of these clients have been growing with us since 2005, as we continuously learn from their experiences and translate their needs into innovative technology solutions.</p>
                </div>

                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-option.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Options</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>We provide the opportunity to go beyond standard features, offering enhancements for internal social networks, people development, and recruitment.</p>
                </div>

                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-mobile.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Mobile</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>With 98% of sessions taking place on phones, our entire solution is optimized for mobile access.</p>
                </div>

                <div className='my-[10%] px-[8%] py-[8%] bg-white shadow-xl'>
                    <img className='w-3/12' src="https://www.humanica.com/wp-content/uploads/2022/12/icon-competence.png" alt="" />
                    <br />
                    <h1 className='text-2xl font-bold'>Competence</h1>
                    <br />
                    <p className='font-semibold text-gray-500'>Our two decades of experience in HR sets us apart from our competitor as we are able to bring unparalleled support for a wide range of HR processes.</p>
                </div>


                
            </div>
        </section>

        <section className='px-[15%] py-[4%]'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>We have earned the trust of over 5000 local and international companies across various industries, ranging from small businesses to large enterprises</h1>
                <br />
                <p className='text-base font-semibold'>
                Humanica, a service provider, aims to establish an ecosystem providing top-tier HR solutions and services for our clients and their workforce with top-notch HR solutions. Positioned as a leader in HR management technology in Thailand, we have garnered the trust of over 5,000 clients across Asia. Our HR solutions have played a crucial role in transforming businesses into digitally efficient operations.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-8 gap-[15%] md:gap-[5%] py-[3%]'>
                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/ISS-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/Sheraton-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/huawei-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/Sharp-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/samsung-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/legoland-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/Danone-logo-150x150.png" alt="" />

                <img className='w-9/12 lg:w-11/12' src="https://www.humanica.com/wp-content/uploads/2022/12/kfc-logo-1-150x150.png" alt="" />

            </div>
        </section>

        <section className='px-[10%] md:px-[15%] pb-[15%] lg:pb-[5%] pt-[50%] md:pt-[15%] lg:pt-0'>
            <div className='text-center pb-[4%]'>
                <h1 className='text-3xl font-bold'>FAQ about Humanica Service</h1>
                <br />
                <h2 className='text-2xl font-bold'>What types of services does Humanica offer?</h2>
                <br />
                <p className='font-semibold text-gray-500' >Humanica Service supports a diverse range of businesses and organizations, leveraging its expertise to provide solutions that enhance organizational development effectiveness. Here are some of the services offered by Humanica to meet the needs of business owners.</p>
            </div>

            <div>
                <div className='pt-[3%]'>
                    <div className='border-solid border border-black-900 px-[1%] py-[1%]' onClick={() => handleMenuClick("menu1")}>
                        {activeMenu === "menu1" ? 
                        <div className='flex '>
                        <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                        <div>
                            <h1 className='px-6 font-bold'>HR Solutions</h1>
                            <br />
                            <p className='font-semibold text-gray-500'>
                            We provide HR solutions with our HRIS software, a technological advancement created exclusively for HR activities. It includes all the capabilities that HR needs, including the ability to track employee time in and out, approve leave requests, save personal information about them, verify their total benefits, and even provide recruitment services.
                            </p>
                        </div>
                                                     
                        </div>                          
              
                        :

                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>HR Solutions</h1>                                  
                        </div>  
                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}  

                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu2")}>
                        {activeMenu === "menu2" ? 

                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>Payroll Outsourcing</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                Humanica has more than 30 years of experience providing all types of organizations and businesses with the demands they have for payroll outsourcing, another key service. We design and calculate compensation that is in line with the organizational culture, taking into account tax and salary calculations, payroll reporting, time and leave reporting, and local law compliance.
                                </p>
                            </div>
                                                         
                        </div>                          
                        
                        :
                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>Payroll Outsourcing</h1>                                  
                        </div>  


                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}  

                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu3")}>
                        {activeMenu === "menu3" ? 


                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>ERP Implementation</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                “Humanica is a service provider that implements ERP systems for businesses of all sizes, with the goal of making their workflows more modern and efficient than before.” We have formed alliances with prominent worldwide ERP providers such as Business One, Oracle NetSuite, and SunFish Workplaze. We promise quality and have gained the trust of prominent organizations in Thailand and around Asia with over 30 years of expertise in the ERP area..
                                </p>
                            </div>
                                                         
                        </div>                         
                        
                        :
                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>ERP Implementation</h1>                                  
                        </div>   
 
                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}  

                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu4")}>
                        {activeMenu === "menu4" ? 

                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>Accounting Service (FAS)</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                The Department of Business Development (DBD) has recognized us as a “Quality Accounting Office” and we have over 30 years of expertise offering accounting services to companies and nonprofits. Our competence in accounting, precision, and thorough understanding of tax rules and regulations from the government sector are some of our key competencies. Our team of skilled specialists makes sure that our clients may have faith in Humanica’s professional abilities.
                                </p>
                            </div>
                                                         
                        </div>                          
                        
                        :

                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>Accounting Service (FAS)</h1>                                  
                        </div>


                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}  

                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu5")}>
                        {activeMenu === "menu5" ? 
                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>Corporate Service and Expatriate Service</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                For companies that use foreign labor, Humanica offers practical paperwork services. The services range from company registration, visa conversion services, work permit renewal and application for foreign nationals. These services are quick and effective, supporting the expansion of your company with assurance.
                                </p>
                            </div>
                                                         
                        </div>  
                        
                        
                        :

                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>Corporate Service and Expatriate Service</h1>                                  
                        </div> 


                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}  

                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu6")}>
                        {activeMenu === "menu6" ? 

                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>Humanica Consulting Service</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                    <a className='text-gray-800' href="/">Humanica Consulting Service </a>
                                    is a solution that assists in the resolution of numerous internal organizational difficulties that effect employee well-being. By examining data from the organization’s HR management department, plans are established to improve the work culture in accordance with the needs of the employees. This reduces personnel turnover and ensures the organization’s long-term stability.
                                </p>
                            </div>
                                                         
                        </div>                          
                        
                        :
                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>Humanica Consulting Service</h1>                                  
                        </div> 


                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */} 


                    <div className='border-solid border border-black-900 px-[1%] py-[1%] my-[1%]' onClick={() => handleMenuClick("menu7")}>
                        {activeMenu === "menu7" ? 
                        <div className='flex '>
                            <img className='w-4 absolute pt-1' src="./images/minus.svg" alt="" />
                            <div>
                                <h1 className='px-6 font-bold'>Hosting</h1>
                                <br />
                                <p className='font-semibold text-gray-500'>
                                With our deployment options, including Software-As-A-Service (SaaS) in a cloud-hosted environment that permits data to be accessed via internet connectivity, and on-premise solutions that offer flexibility in usage, Humanica’s Hosting service is created to meet the needs of businesses and organizations of all types. Our solution offers exceptional long-term value for money and is very secure.
                                </p>
                            </div>
                                                         
                        </div>  
                        
                        
                        :

                        <div className='flex space-x-2'>
                        <img className='w-4' src="./images/plus.svg" alt="" />
                        <h1 className='font-bold'>Hosting</h1>                                  
                        </div>  

                                                
                        }   
                    </div> {/*------------ end click show detail ------------ */}                      

                </div>



            </div>

        </section>

        <section className='px-[5%] md:px-[15%] bg-[#f9f9f9] py-[3%]'>
            <div className='text-center pb-[3%] py-[8%] lg:py-[2%]'>
                <h1 className='text-3xl font-bold'>Humanica Blog & News</h1>
            </div>

            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-[3%] py-[8%] lg:py-[2%]'>

                <div className='bg-white px-[8%] py-[8%]  shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/Oct.5.1.webp" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>Leadership vs. Management</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>In any organization, both leadership and management are essential for success. While the terms…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}

                <div className='bg-white px-[8%] py-[8%] shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/Oct.4.1.webp" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>Workplace Policies: 10 Policies to Consider for Your Business</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>Every successful organization thrives on structure, clarity, and consistency. Workplace policies play a vital…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}

                <div className='bg-white px-[8%] py-[8%] shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/Sep.24.3.1.webp" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>What Are HR Metrics?</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>Top 10 most important HR metrics to track, and learn how to improve workforce…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}

                <div className='bg-white px-[8%] py-[8%] shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/Sep.24.2.1.webp" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>Learn How to Improve Your Company’s Payroll Process</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>Learn 7 essential ways to improve your payroll process, boost efficiency, and reduce errors…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}

                <div className='bg-white px-[8%] py-[8%] shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/Sep.24.1.1.webp" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>How to Build a Successful Talent Management Strategy</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>Learn how HR and talent management can attract, retain, and develop top talent for…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}

                <div className='bg-white px-[8%] py-[8%] shadow-xl mb-10'>
                    <div>
                        <a href="/"><img src="https://www.humanica.com/wp-content/uploads/2024/12/executives-touch-human-resource-network-structure-hr-effective-management-recruitment-hr-effective-organizational-structure-training-employment-practice-1-1-2048x970.jpg" alt="" /></a>
                        <br />
                        <div>

                        <p className='text-gray-800'>December 20, 2024
                        </p>
                        <br />

                        <a className='w-8' href="/"><h1 className='text-2xl md:text-3xl font-bold '>HR Trends in 2025: Directions Organizations Must Be Ready to Face</h1></a>

                        <br />

                        <p className='text-gray-500 font-semibold'>In an era where uncertainty has become the norm, businesses must navigate changes in…
                        </p>
                       </div>

                        <br />
                       <button className='bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[3%] px-[7%] rounded-3xl text-white hover:text-black'><a href="/">Continue Reading</a></button>
                    </div>
                </div> {/*------------------ end 1 box ------- */}
            </div>
            <div className=' justify-self-center md:mt-[15%] mb-10 lg:mt-[5%]'>
                <button className='w-44 bg-gradient-to-r from-[#395EBC] to-[#94C2E9] py-[6%] px-[8%] rounded-3xl text-white  '><a href="/">View More Posts</a></button>
            </div>

        </section>

        <section className='bg-[url(https://www.humanica.com/wp-content/uploads/2022/12/Section-bg-quotes.jpg)] '>
            <div className='text-center text-2xl text-white font-bold md:text-4xl lg:text-[40px] md:py-[15%] py-[40%] lg:py-[4%] px-[10%] lg:px-[25%]'>
                <h1>Moving forward, implementing changes, or leading in a new direction requires courage.</h1>
                <br />
                <h1>We are here to support you in taking that next step.</h1>
            </div>
        </section>

        <section className='px-[8%] lg:px-[15%] bg-[url(https://www.humanica.com/wp-content/uploads/2022/12/background-contact-us.jpg)]'>
            <div className='md:grid md:grid-cols-2 gap-x-[3%] py-[4%]'>
                <div className='pt-[10%] md:pt-[40%] px-5'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Schedule a Demo Today.</h1>
                    <br />
                    <h2 className='text-gray-500 font-semibold md:text-2xl w-11/12 pb-[10%]'>Drop us a message, and our team will reach out to you to arrange a demo</h2>

                </div>
                <div className='bg-white shadow-xl px-[8%] py-[8%] rounded-xl'>
                    <form className='grid grid-cols-1 gap-5 '  action="">
                        <input className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base' type="text" placeholder='*Company Name' />

                        <input className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base' type="text" placeholder='*Your Name' />

                        <input className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base' type="email" placeholder='*Valid Email' />

                        <input className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base' type="tel" name="phone" placeholder='*Your Contact Number' />

                        <select className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base text-gray-600' id="" >
                            <option value="">*Number of Employees</option>
                            <option value="micro">10-100</option>
                            <option value="small">100-500</option>
                            <option value="medium">500-1000</option>
                            <option value="large">1000+</option>
                        </select>

                        <select className='px-2 py-2 border-solid border border-[#ccc] bg-gray-100 text-base text-gray-600' id="" >
                            <option value="">*Please select the service of your interest</option>
                            <option value="service-1">Workplaze HRIS</option>
                            <option value="service-2">ERP Solution</option>
                            <option value="service-3">Payroll Outsourcing</option>
                            <option value="service-4">Accounting Services</option>
                            <option value="service-5">Visa Work Permit Services</option>
                            <option value="service-5">Company Registration Services</option>
                        </select>
                        <div>
                        <input  type="checkbox" />
                        <label className='px-2 font-semibold text-sm' for="vehicle1">Privacy Notice: I have read and consented to the Privacy Policy, and agreed to be contacted by the company to offer products and services.</label>
                        </div>
                        <br />
                        <p className='text-xs text-gray-500 font-semibold'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <button className='text-white bg-black w-32 px-4 py-2 rounded-3xl text-base font-bold' type='submit'>SEND NOW</button>

                        

                    </form>

                </div>
            </div>
        </section>

        <section className='bg-[#001229] px-[3%] text-white py-[5%]'>
            <div className='hidden lg:grid lg:grid-cols-6 gap-[2%]'>
                {/* footer one */}
                <div>
                    <div className=''>
                        <img className='pb-[50%]' src="https://www.humanica.com/wp-content/uploads/2023/11/HMC-Group@4x.png" alt="" />
                        <div>
                            <p className='font-bold py-[3%]'>Follow Us On</p>
                        </div>

                    </div>
                    {/* social */}
                    <div className='grid grid-cols-5 pr-10 items-end'>
                        <a className='w-6/12' href="/"><img className='' src="./images/linkedin.png" alt="" />
                        </a>

                        <a className='w-6/12' href="/"><img className='' src="./images/facebook.png" alt="" />
                        </a>

                        <a className='w-6/12' href="/"><img className='' src="./images/blockdit.png" alt="" />
                        </a>

                        <a className='w-6/12' href="/"><img className='' src="./images/youtube.png" alt="" />
                        </a>

                        <a className='w-6/12' href="/"><img className='' src="./images/phone.png" alt="" />
                        </a>

                        


                    </div>

                </div>

                {/* footer two */}

                <div className='flex flex-col'>
                    <h1 className='pb-5 font-bold'>PRODUCT</h1>
                    <a className='text-gray-400 text-sm py-1' href="/">HR Core</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Payroll</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Time</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Benefits</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Training</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Talent Management</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Recruitment</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Analytics</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Attendance Recording</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Mobile</a>
                    <a className='text-gray-400 text-sm py-1' href="/">ERP</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Mid Market Solution</a>
                </div>

                {/* footer three */}
                <div className='flex flex-col'>
                    <h1 className='pb-5 font-bold'>SERVICES</h1>
                    <a className='text-gray-400 text-sm py-1' href="/">Payroll Outsourcing</a>
                    <a className='text-gray-400 text-sm py-1' href="/">MCPO</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Accounting Services</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Corporate Services</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Hosting</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Consulting</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Project Implementation</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Customization</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Benefits Administration</a>
                </div>

                {/* footer four*/}
                <div className='flex flex-col'>
                    <h1 className='pb-5 font-bold'>OUR STRENGTH</h1>
                    <a className='text-gray-400 text-sm py-1' href="/">Integration</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Innovation</a>
                    <a className='text-gray-400 text-sm py-1' href="/">UI/UX</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Technology</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Data Privacy & Security</a>
                    <a className='text-gray-400 text-sm py-1' href="/">HRSaaS</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Ecosystem</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Change Management</a>
                </div>

                {/* footer five*/}
                <div className='flex flex-col'>
                    <h1 className='pb-5 font-bold'>RESOURCES</h1>
                    <a className='text-gray-400 text-sm py-1' href="/">Blog</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Customer Story</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Downloads</a>
                    <a className='text-gray-400 text-sm py-1' href="/">EURA</a>
                </div>

                {/* footer six*/}
                <div className='flex flex-col'>
                    <h1 className='pb-5 font-bold'>COMPANY</h1>
                    <a className='text-gray-400 text-sm py-1' href="/">About Us</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Vision & Mission</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Awards & Certification</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Leadership</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Customers</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Privacy Policy</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Whistleblowing</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Investors</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Governance</a>
                    <a className='text-gray-400 text-sm py-1' href="/">Careers</a>
                </div>                

            </div>

            <div className='text-center py-[5%]'>
                <p className='text-[10px] font-semibold'>© 2025 Humanica Public Company Limited. All Rights Reserved.</p>
            </div>

        </section>
    </div>
  )
}

export default Content