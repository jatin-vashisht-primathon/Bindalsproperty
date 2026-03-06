"use client";
import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isParentActive = (menus) =>
    menus.some((menu) =>
      menu.submenu
        ? menu.submenu.some((item) =>
            item.submenu
              ? item.submenu.some(
                  (item) => item.href.split("/")[1] === pathname.split("/")[1]
                )
              : item.href.split("/")[1] === pathname.split("/")[1]
          )
        : menu.href.split("/")[1] === pathname.split("/")[1]
    );
  return (
    <>
   
      <li>
        <a href="/">Home</a>
      </li>
      <li className="has-child">
        <a href="#">Listing</a>
        <ul className="submenu">
          <li>
            <Link href="/property/apartments">Apartment</Link>
          </li>
            <li><Link href="#">Villa</Link></li>
            <li><Link href="#">Studio</Link></li>
            <li><Link href="#">Office</Link></li>
            <li><Link href="#">Townhouse</Link></li>
            <li><Link href="/property/commercials">Commercial</Link></li>
        </ul>
      </li>
        <li className={"/faq" == pathname ? "current-menu" : ""}>
        <Link href={`/faq`}>FAQs</Link>
      </li>
      <li className={"/blog" == pathname ? "current-menu" : ""}>
        <Link href={`/blog-grid`}>Blogs</Link>
      </li>
      <li className={"/contact" == pathname ? "current-menu" : ""}>
        <Link href={`/contact`}>Contact</Link>
      </li>
    </>
  );
}
