import React from "react";
import AllBanners from "../snippets/AllBanners";
import SectionHeading from "../snippets/SectionHeading";
import jsonData from "../json/ContactUs.json";
import AllButtons from "../snippets/AllButtons";

function Contact() {
  return (
    <>
      <AllBanners name="Contact Us" />
      <section className="all-sections">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-8 items-start lg:items-center justify-center">
            <div className="p-0 lg:p-[35px_50px_35px_51px] flex items-start flex-col ">
              <SectionHeading name="Contact Us" />
              <h3 className="text-[28px] mt-4 mb-3 leading-[40px] sm:text-[36px] sm:leading-[46px] lg:text-[40px] lg:leading-[52px] font-normal font-aa text-[#222222]">
                Get in Touch with Farm Crest
              </h3>
              <p className=" text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] text-[#6B6B6B] font-normal">
                We’d love to hear from you! Whether you have questions about our
                products, need assistance with an order.
              </p>
              <div className="flex flex-col gap-5 items-start mt-[25px] pb-6 border-b border-solid border-[#D6D6D6] w-full">
                {jsonData["contacts"].map((item, index) => (
                  <a
                    href={item.link}
                    key={index}
                    className="flex items-center gap-4 transition-all duration-200 hover:pl-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../assets/svg/${item.img}`)}
                      alt="contacts"
                    />
                    <div className="">
                      <h4 className="text-[#222222] text-[16px] leading-[19.36px] font-semibold">
                        {item.name}
                      </h4>
                      <p className="font-normal text-[14px] leading-[16.94px] text-[#787878]">
                        {item.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex gap-6 items-center justify-start mt-6">
                <h4 className="text-[#222222] text-[16px] leading-[19.36px] font-semibold">
                  Follow Us:
                </h4>
                <div className="flex items-center gap-4">
                  {jsonData["followUS"].map((item, index) => (
                    <a
                      href={item.link}
                      target="_blank"
                      className=" hover:-translate-y-1 transition-all duration-200"
                      rel="noreferrer"
                      key={index}
                    >
                      <img
                        src={require(`../assets/svg/${item.img}`)}
                        alt="FollowUS"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <form className="w-full p-4 sm:p-6 md:p-[42px] bg-[#EED19C] flex flex-col items-start gap-4 md:gap-6 justify-center rounded-xl md:rounded-[30px]">
              <label className="text-[20px] leading-[30px] sm:text-[24px] sm:leading-[36px] md:text-[28px] md:leading-[44px] lg:text-[32px] lg:leading-[52px] text-[#222222] font-normal font-aa ">
                Contact Form
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-3 md:p-5 text-black placeholder:text-[#816127] text-[18px] leading-[21.78px] font-normal bg-[#E9C686] border-2 border-solid border-[#D5B06E] rounded-[8px] md:rounded-[12px] w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 md:p-5 text-black placeholder:text-[#816127] text-[18px] leading-[21.78px] font-normal bg-[#E9C686] border-2 border-solid border-[#D5B06E] rounded-[8px] md:rounded-[12px] w-full"
              />
              <input
                type="tel"
                maxLength="13"
                name="phoneNo."
                placeholder="Enter Phone Number"
                className="p-3 md:p-5 text-black placeholder:text-[#816127] text-[18px] leading-[21.78px] font-normal bg-[#E9C686] border-2 border-solid border-[#D5B06E] rounded-[8px] md:rounded-[12px] w-full"
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                rows={7}
                className="p-3 md:p-5 max-h-[150px] md:max-h-[192px] text-black placeholder:text-[#816127] text-[18px] leading-[21.78px] font-normal bg-[#E9C686] border-2 border-solid border-[#D5B06E] rounded-[8px] md:rounded-[12px] w-full outline-none"
              ></textarea>
              <AllButtons
                name="Submit"
                class="bg-black text-white w-full hover:text-black border-black"
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="all-sections">
        <div className="container">
          <h3 className="font-aa font-normal text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] text-[#222222] mb-10 md:mb-[50px] lg:mb-[60px]">
            Visit Our Store
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6943.148226284034!2d-72.73380837847374!3d41.763958639437774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730014239350!5m2!1sen!2sin"
            width="100%"
            title="map"
            height="509"
            className="rounded-[10px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
