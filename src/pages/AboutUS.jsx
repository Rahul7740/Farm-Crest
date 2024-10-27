
import React from 'react'
import AllBanners from '../snippets/AllBanners'
import AboutFarmCrest from '../aboutUS/AboutFarmCrest'
import OurMission from '../aboutUS/OurMission'
import WhyChooseUs from './../home/WhyChooseUs';
import CustomerCommitment from '../aboutUS/CustomerCommitment';
import AboutUsFooterBanner from '../aboutUS/AboutUsFooterBanner';

function AboutUS() {
  return (
    <>
      <AllBanners name="About Us" />
      <AboutFarmCrest />
      <OurMission />
      <WhyChooseUs />
      <CustomerCommitment />
      <AboutUsFooterBanner />
    </>
  )
}

export default AboutUS
