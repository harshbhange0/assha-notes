import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link, NavLink } from "react-router-dom";

export default function BreadCrumbNav() {
  const rootUrl = window.location.href
    .toString()
    .split("/")
    .filter((v) => v !== "")
    .filter((v) => v !== "http:");

  return (
    <Breadcrumb className="px-10 py-2">
      <BreadcrumbList>
        {rootUrl.map((url, i) => (
          <Fragment key={i}>
            <BreadcrumbItem className="capitalize">
              <Link to={"/"}>{url == "localhost:5173" ? "Home" : url}</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
