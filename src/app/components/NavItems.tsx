"use client";

import { PRODUCT_CATEGORY } from "@/config/intex";
import { use, useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "../hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIntex, setActiveIntex] = useState<null | Number>(null);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIntex(null);
      }
    };
  }, []);

  const isAnyOpen = activeIntex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIntex(null));
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORY.map((category, i) => {
        const handleOpen = () => {
          if (activeIntex === i) {
            setActiveIntex(null);
          } else {
            setActiveIntex(i);
          }
        };

        const isOpen = i === activeIntex;
        return (
          <NavItem
            key={category.value}
            isOpen={isOpen}
            handleOpen={handleOpen}
            category={category}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
