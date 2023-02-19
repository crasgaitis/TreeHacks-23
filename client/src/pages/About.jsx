import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import ParcelCard from "../partials/Card";
import ParcelList from "../partials/ParcelList";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box"
import Fade from "react-reveal/Fade";

import HeroImage from "../images/hero-image-01.jpg";

export default function About() {
  return (
    
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true">
          <PageIllustration />
        </div>
      
        <Box height="80px"/>
        <Fade>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
                <h2 className="h2 mb-4">We tackle something huge: affordable land. But how is it done?</h2>
                <p className="text-xl text-gray-400">
                  Generation Z is all about renting - buying land is simply out of our budgets. But the tides are changing: with Pocket Plots, an entirely new generation can unlock the power of land ownership without a budget. <br/><br/>
                  Traditional land ownership goes like this: you find a property, spend weeks negotiating a price, and secure a loan. Then, you have to pay out agents, contractors, utility, and more. Next, you have to go through legal documents, processing, and more. All while you are shelling out tens to hundreds of thousands of dollars.<br/><br/>
                  Yuck.<br/><br/>
                  Pocket Plots handles all of that for you.<br/><br/>
                  We, as an LLC, buy up large parcels of land, stacking over 10 acres per purchase. Under the company name, we automatically generate internal contracts that outline a customer's rights to a certain portion of the land, defined by 4 coordinate points on a map.<br/><br/>
                  Each parcel is now divided into individual plots ranging from 1,000 to 10,000 sq ft, and only one person can own a contract to each plot to the plot.<br/><br/>
                  This is what makes us fundamentally novel: we simulate land ownership without needing to physically create deeds for every person. This skips all the costs and legal details of creating deeds and gives everyone the opportunity to land ownership.<br/><br/>
                  These contracts are 99-years and infitely renewable, so when it's time to sell, you'll have buyers flocking to buy from you first.

                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
                <h2 className="h2 mb-4">Buy land like it's ebay</h2>
                <p className="text-xl text-gray-400">
                  We aren't just a business: we're a platform. Our technology allows for fast transactions, instant legal document generation, and resale of properties like it's the world's first ebay land marketplace. <br/><br/>
                  Everyday, we have thousands of people cross our site, generating sales, traffic, and conversation.<br/><br/>
                  We've not just a business.<br/><br/>
                  We've got what it takes to launch your next biggest investment.<br/><br/>
                  
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                <h2 className="h2 mb-4">Pocket as a new financial asset class</h2>
                <p className="text-xl text-gray-400">
                  In fintech, the last boom has been in blockchain. But after FTX and the bitcoin crash, cryptocurrency has been shaken up: blockchain is no longer the future of finance. <br/><br/>
                  Instead, the market is shifting into tangible assets, and at the forefront of this is <strong>land</strong>. However, land investments have been gatekeeped by the wealthy, leaving little opportunity for an entire generation<br/><br/>
                  That's where pocket comes in. By following our novel perpetual-lease model, we sell contracts to tangible buildable plots of land on our properties for pennies on the dollar.<br/><br/>
                  We buy the land, and you buy the contract.<br/><br/>
                  It's that simple.<br/><br/>
                  We take care of everything legal: the deeds, easements, taxes, logistics, and costs. No more expensive real estate agents, commissions, and hefty fees.<br/><br/>
                  With the power of Pocket, we give you land for just $99, no strings attached. <br/><br/>
                  <strong>But wait - there's more!</strong><br/><br/>
                  With our resell marketplace, you can sell your land the exact same way we sell ours: on our very own website.<br/><br/>
                  We handle all logistics, from the legal forms to the system data - and give you 100% of the sell value, with no seller fees at all.<br/><br/>
                  We even will run ads for you, giving your investment free attention.<br/><br/>
                  <strong>So how much return does a Pocket Plot bring?</strong><br/><br/>
                  Well, once a parcel sells out its plots, it's gone - whoever wants to buy land from that parcel has to buy from you.<br/><br/>
                  We've seen plots sell for 3x the original investment value in under one week. Now how insane is that? The tides are shifting, and Pocket is leading the way.<br/><br/>
                  So, if you want to see your investments fly to the moon, you better buy up - prices may be double tomorrow.

                </p>
              </div>
            </div>
          </div>
        </Fade>
        <ParcelList />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
