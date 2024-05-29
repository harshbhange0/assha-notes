import { Link } from "react-router-dom";
import { dashNavItems } from "@/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function DashNav() {
  return (
    <div className=" flex h-full w-auto flex-col gap-y-4 px-4 lg:w-full">
      <TooltipProvider>
        {dashNavItems.map((item, i) => (
          <DashNavItem {...item} key={i} />
        ))}
      </TooltipProvider>
    </div>
  );
}

export interface DashNavItemProps {
  title: string;
  href: string;
  Icon: any;
}
function DashNavItem({ title, href, Icon }: DashNavItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className="group flex w-full items-center justify-normal gap-5 rounded-md px-4 py-2 text-slate-500 transition-colors hover:bg-slate-100 "
        >
          <span className="transition-colors group-hover:text-black ">
            <Icon />
          </span>
          <span className="hidden transition-colors group-hover:text-black lg:block">
            {title}
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="block lg:hidden">
        {title}
      </TooltipContent>
    </Tooltip>
  );
}
