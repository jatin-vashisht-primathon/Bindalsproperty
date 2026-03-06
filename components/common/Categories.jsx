"use client";
import { categories } from "@/data/categories";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitTextAnimation from "./SplitTextAnimation";
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function Categories({
  parentClass = "tf-spacing-1 section-categories pb-0",
}) {
  return (
    <section className={parentClass}>
      <div className="tf-container">
        <div className="heading-section text-center mb-48">
          <h2 className="title split-text effect-right">
            <SplitTextAnimation text="Real Estate Services We Offer" />
          </h2>
          <p className="text-1 split-text split-lines-transform">
            Our network includes trusted vendors and experienced real estate agents.
Every service is delivered with transparency, expertise, and client-focused support.
          </p>
        </div>
        <div className="wrap-categories-sw">
          <Swiper
            dir="ltr"
            className="swiper sw-layout style-pagination"
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 2 },
              575: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            pagination={{
              el: ".spd2",
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Link
                  href={category.href}
                  className={`categories-item`}
                >
                  <div className="icon-box">
                    <i className={`icon ${category.icon}`}></i>
                  </div>
                  <div className="content text-center">
                    <h5>{category.name}</h5>
                    {/* <p className="mt-4 text-1">234 Property</p> */}
                  </div>
                </Link>
              </SwiperSlide>
            ))}

            <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd2" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
