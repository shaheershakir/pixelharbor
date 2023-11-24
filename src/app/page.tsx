import Link from "next/link";
import MaxWidthWraper from "./components/MaxWidthWraper";
import { Button, buttonVariants } from "./components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your digital assets instantly after purchase. No waiting, no hassle.",
  },
  {
    name: "Assured Quality",
    Icon: CheckCircle,
    description:
      "We only offer the best quality digital assets. No compromises.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We plant a tree for every purchase made on our platform. We care about the planet.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWraper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
            Your MarketPlace for high quality{" "}
            <span className=" text-slate-500">Digital Assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to PixelHarbor - your hub for digital assets. Explore a
            variety of offerings where innovation meets seamless transactions.
            Discover, purchase, and elevate your digital experience with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/product" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality Promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: LIST OF PRODUCTS */}
      </MaxWidthWraper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWraper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-slate-100 text-slate-800">
                    <perk.Icon className="w-1/3 h-1/3" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWraper>
      </section>
    </>
  );
}
