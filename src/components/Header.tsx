"use client";
import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";
import { usePathname } from "next/navigation";

const Header = () => {
  const navigation = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
    },
    {
      id: 4,
      title: "Experience",
      url: "/experience",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="border-b-[1px]">
      <div className="max-w-screen-xl h-20 mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="uppercase font-semibold underline decoration-[1px] underline-offset-2 hover:text-blue-600"
        >
          NextJS Theme
        </Link>
        <div className="hidden md:inline-flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item?.id}
              href={item?.url}
              className={`relative group overflow-hidden ${
                pathname === item?.url && "text-blue-600"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-[1px] inline-flex absolute bottom-0 left-0
                -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathname === item?.url ? "bg-blue-600 dark:bg-blue-600 translate-x-0" : "bg-black dark:bg-white"}`}
              />
            </Link>
          ))}
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
