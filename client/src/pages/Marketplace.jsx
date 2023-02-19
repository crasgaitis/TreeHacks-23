import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import ParcelCard from "../partials/Card";
import ParcelList from "../partials/ParcelList";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import { useQuery } from "../../convex/_generated/react";

import HeroImage from "../images/hero-image-01.jpg";

export default function Marketplace() {
  const parcels = useQuery("getParcels:getParcels")

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

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="100px" minHeight="800px">
          <Typography fontSize="40px">All Properties</Typography>
          <Box maxWidth="1000px" display="flex" flexDirection="row" justifyContent="center" alignItems="center" flexWrap="wrap">
            {parcels && parcels.map((element,index) => {return(<ParcelCard key={index} parcel={element}></ParcelCard>)})}
          </Box>
        </Box>
        {/*  Page sections */}

        <FeaturesBlocks />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
