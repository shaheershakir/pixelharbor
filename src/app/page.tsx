import MaxWidthWraper from "./components/MaxWidthWraper";

export default function Home() {
  return (
    <MaxWidthWraper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1>
          Your MarketPlace for high quality{" "}
          <span className=" text-slate-600">Digital Assets</span>
        </h1>
      </div>
    </MaxWidthWraper>
  );
}
