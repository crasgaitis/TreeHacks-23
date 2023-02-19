import React from "react";

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

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';
import { Box } from "@mui/system";


export default function OrderCompleted() {
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
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Order has been sent to your email</h2>
                <p className="text-xl text-gray-400">
                  Complete your payment before your plot is sold!.
                </p>
              </div>

              {/* Testimonials */}
              <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                {/* 1st testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img
                        className="rounded-full"
                        src={TestimonialImage01}
                        width="48"
                        height="48"
                        alt="Testimonial 01"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    I never thought I could afford my own piece of land, but
                    Pocket Plots made it possible! For just $99, I was able to
                    purchase a beautiful plot of land that's just a short drive
                    from the city. I love that it's off-grid, so I can build my
                    own sustainable oasis and live off the land. Thank you
                    Pocket Plots for making my dream a reality!
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="">
                      Investment Banker
                    </a>
                  </div>
                </div>

                {/* 2nd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img
                        className="rounded-full"
                        src={TestimonialImage02}
                        width="48"
                        height="48"
                        alt="Testimonial 02"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    As someone who's always been interested in homesteading and
                    off-grid living, I was thrilled to discover Pocket Plots.
                    The land they offer is affordable and close to major cities,
                    yet still far enough away to enjoy the peace and quiet of
                    the countryside. I was able to find the perfect plot of land
                    and start building my dream home with ease. I highly
                    recommend Pocket Plots to anyone looking to own land and
                    live off the grid.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0">
                      Professional Skier
                    </a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img
                        className="rounded-full"
                        src={TestimonialImage03}
                        width="48"
                        height="48"
                        alt="Testimonial 03"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    I'm so happy with my purchase from Pocket Plots! I had been
                    searching for a plot of land for years, but everything I
                    found was either too expensive or too remote. With Pocket
                    Plots, I was able to find a plot of land that's both
                    affordable and accessible. I love that I can build my own
                    sustainable home and live off the grid, while still being
                    close to the city. Thank you Pocket Plots for making my
                    dreams a reality!
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0">
                      Real Estate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ParcelList />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
