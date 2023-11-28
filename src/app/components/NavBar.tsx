import Link from "next/link";
import MaxWidthWraper from "./MaxWidthWraper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const NavBar = () => {
  const user = null;

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

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : (
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Sign in
                  </Link>
                )}

                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {user ? (
                  <p></p>
                ) : (
                  <Link
                    href="/register"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Create account
                  </Link>
                )}

                {user ? (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                ) : null}

                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                <div className="ml-4 flow-root lg:ml-6"></div>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWraper>
    </div>
  );
};

export default NavBar;
