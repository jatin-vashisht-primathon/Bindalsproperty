"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { commercials } from "@/data/properties";

export default function CommercialProperties() {
  return (
    <section className="section-property-layout">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-title">
              <h2>Commercial Listings</h2>
            </div>
            <div className="flat-animate-tab">
              <div className="tab-content">
                <div className="tab-pane active show" role="tabpanel">
                  <div className="tf-grid-layout lg-col-3 md-col-2">
                    {commercials.map((property) => (
                      <div className="box-house hover-img" key={property.id}>
                        <div className="image-wrap" style={{ maxHeight: 300, overflow: "hidden" }}>
                          <Link href={`/property-detail-v1/${property.id}`}>
                            <Image
                              className="lazyload"
                              alt={property.title}
                              src={property.imageSrc}
                              width={600}
                              height={401}
                              style={{ objectFit: "cover", minHeight: "unset", height: 300, width: "100%" }}
                            />
                          </Link>
                          <ul className="box-tag flex gap-8">
                            <li className="flat-tag text-4 bg-main fw-6 text_white">
                              Commercial
                            </li>
                            <li className="flat-tag text-4 bg-3 fw-6 text_white">
                              For Sale
                            </li>
                          </ul>
                          <div className="list-btn flex gap-8">
                            <a href="#" className="btn-icon save hover-tooltip">
                              <i className="icon-save" />
                              <span className="tooltip">Add Favorite</span>
                            </a>
                            <a href="#" className="btn-icon find hover-tooltip">
                              <i className="icon-find-plus" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/property-detail-v1/${property.id}`}>
                              {property.title}
                            </Link>
                          </h5>
                          <p className="location text-1 flex items-center gap-6">
                            <i className="icon-location" /> {property.location}
                          </p>
                          <ul className="meta-list flex">
                            <li className="text-1 flex">
                              <span>{property.area}</span>Area
                            </li>
                          </ul>
                          <p className="text-1 line-clamp-2" style={{ marginTop: 8 }}>
                            {property.description}
                          </p>
                          <div className="bot flex justify-between items-center">
                            <h5 className="price">&#8377;{property.price}</h5>
                            <div className="wrap-btn flex">
                              <Link
                                href={`/property-detail-v1/${property.id}`}
                                className="tf-btn style-border pd-4"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {commercials.length === 0 && (
                <p className="text-center text-1" style={{ padding: "40px 0" }}>
                  No commercial properties available.
                </p>
              )}
              <div className="wrap-pagination">
                <p className="text-1">
                  Showing {commercials.length} of {commercials.length} results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
