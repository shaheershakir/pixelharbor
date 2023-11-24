import Link from "next/link";
import MaxWidthWraper from "./MaxWidthWraper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="bg-white sticky zoom-in-50 top-0 inset-0 h-16">
      <header className="relative bg-white"></header>
      <MaxWidthWraper>
        <div className="border-b bg-gray-50">
          <div className="h-16 flex items-center">
            {/* TODO: Moblie nav */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>
            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch"></div>
            <NavItems />
          </div>
        </div>
      </MaxWidthWraper>
    </div>
  );
};

export default NavBar;
