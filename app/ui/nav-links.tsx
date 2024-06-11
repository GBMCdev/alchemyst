"use client";

import Link from "next/link";

const links = [{ name: "Friends :", href: "/home" }];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              " p-3 text-sm font-medium text-white hover:text-blue-600"
            }
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
