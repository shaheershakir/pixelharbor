import { cn } from "@/lib/utils";

const MaxWidthWraper = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-lg px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWraper;
