import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PropertyGridItems({ properties: propsList, showItems }) {
  const items = propsList || properties;
  const displayed = showItems ? items.slice(0, showItems) : items;

  return (
    <>
      {displayed.map((property) => (
        <div className="box-house hover-img" key={property.id}>
          <div className="image-wrap" style={{ maxHeight: 350, overflow: "hidden" }}>
            <Link href={`/property-detail-v1/${property.id}`}>
              <Image
                className="lazyload"
                alt={property.title}
                src={property.imageSrc}
                width={600}
                height={401}
                style={{ objectFit: "cover", minHeight: 350, maxHeight: 350, width: "100%" }}
              />
            </Link>
            <ul className="box-tag flex gap-8">
              <li className="flat-tag text-4 bg-main fw-6 text_white">
                Featured
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
                <span>{property.beds}</span>Beds
              </li>
              <li className="text-1 flex">
                <span>{property.baths}</span>Baths
              </li>
              <li className="text-1 flex">
                <span>{property.sqft}</span>Sqft
              </li>
            </ul>
            <div className="bot flex justify-between items-center">
              <h5 className="price">&#8377;{property.price}</h5>
              <div className="wrap-btn flex">
                <a href="#" className="compare flex gap-8 items-center text-1">
                  <i className="icon-compare" />
                  Compare
                </a>
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
    </>
  );
}
