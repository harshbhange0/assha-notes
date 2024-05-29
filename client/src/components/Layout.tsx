import React from "react";
import NavBar from "./NavBar";
import DashNav from "./DashNav";
import { dashboardItem } from "@/data";
import DashCard from "./DashCard";
import { TooltipProvider } from "./ui/tooltip";
import BreadCrumbNav from "./BreadCrumbNav";

export default function Layout({
  children,
}: {
  children: React.ReactNode | string;
}) {
  const rootUrl = window.location.href;
  const hideSideNav =
    rootUrl.toString().match("all") || rootUrl.toString().match("add");
  return (
    <>
      <header className="sticky top-0 z-20 bg-slate-50">
        <NavBar />
      </header>
      <main className="relative flex min-h-screen w-full flex-col p-5 lg:p-10">
        <BreadCrumbNav />{" "}
        <div
          className={`fixed left-0 pt-14 ${hideSideNav ? "hidden" : "lg:hidden"}`}
        >
          <DashNav />
        </div>
        <div className="flex h-full flex-row">
          <aside className=" hidden h-full w-full py-10 lg:block lg:basis-[20%]">
            <DashNav />
          </aside>
          <section className="h-full w-full py-5 lg:basis-[80%]">
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
