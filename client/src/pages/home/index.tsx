import DashCard from "@/components/DashCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { dashboardItem } from "@/data";

export default function Home() {
  return (
    <>
      <TooltipProvider>
        <div className=" grid w-full gap-2 ps-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:ps-0">
          {dashboardItem.map((item, i) => (
            <DashCard key={i} {...item} />
          ))}
        </div>
      </TooltipProvider>
    </>
  );
}



