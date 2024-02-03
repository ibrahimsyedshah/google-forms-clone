import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

function CTAButtons({className} : {className?: string}) {
  return (
    <div className={cn('flex flex-col gap-2 min-[400px]:flex-row justify-center', className)}>
      <Button asChild>
        <Link href={"/dashboard"}>Get Started</Link>
      </Button>
      <Button asChild variant={'outline'}>
        <Link href={"https://www.google.com.au/forms/about/"} target="_blank">Learn More</Link>
      </Button>
    </div>
  );
}

export default CTAButtons;
