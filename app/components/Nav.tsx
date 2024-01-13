"use client";

import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (param: string) => {
    if (param === "home") {
      router.push("/");
    } else if (param === "login") {
      router.push("/user/login");
    }
  };

  return (
    <div className="btm-nav">
      <button
        className={`text-secondary ${pathname === "/" && "active"}`}
        onClick={() => handleClick("home")}
      >
        <HomeIcon className="h-5 w-5" />
      </button>
      <button
        className={`text-secondary ${pathname.includes("user") && "active"}`}
        onClick={() => handleClick("login")}
      >
        <UserIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Nav;
