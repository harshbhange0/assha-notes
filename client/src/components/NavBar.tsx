import { Input } from "./ui/input";
import { Search } from "lucide-react";
import UserDropDown from "./UserDropDown";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import {
  SheetContent,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-2 px-3 py-2 shadow-md">
      <div className="hidden w-full items-center justify-start gap-10 ps-20 lg:flex">
        <Link
          className="font-[500] text-gray-500 transition-colors hover:text-gray-900"
          to={"/"}
        >
          Home
        </Link>
      </div>
      <div className="block lg:hidden">
        <MobileNavBar />
      </div>
      <div className="relative ml-auto">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>

      <UserDropDown />
    </nav>
  );
}

function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger className="px-4 py-2">
        <GrMenu />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <SheetHeader className="pb-10">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Link
            className="rounded-sm px-3 py-2 font-[500] text-gray-500 transition-colors hover:bg-slate-100 hover:text-gray-900"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="rounded-sm px-3 py-2 font-[500] text-gray-500 transition-colors hover:bg-slate-100 hover:text-gray-900"
            to={"/notes"}
          >
            Add House
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
