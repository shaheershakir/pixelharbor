"use client";

import { PRODUCT_CATEGORY } from "@/config/intex";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIntex, setActiveIntex] = useState<null | Number>(null);
  const isAnyOpen = activeIntex !== null;
  return (
    <div className="flex gap-4 h-full">
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
