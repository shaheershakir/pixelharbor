"use client";

import { PRODUCT_CATEGORY } from "@/config/intex";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORY)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ category, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex ">
      <div className="reletive flex items-center"></div>
      <Button
        className="gap-1.5"
        onClick={handleOpen}
        variant={isOpen ? "secondary" : "ghost"}
      >
        {category.label}
        <ChevronDown
          className={cn("h-4 w-4 translate-all text-muted-foreground", {
            "-rotate-180": isOpen,
          })}
        />
      </Button>
    </div>
  );
};

export default NavItem;
