import AddChildren from "@/components/add/AddChildren";
import AddHouse from "@/components/add/AddHouse";
import AddMember from "@/components/add/AddMember";
import React from "react";
import { useParams } from "react-router-dom";

export default function Add() {
  const { param } = useParams();
  console.log(param);

  if (param == "house") {
    return <AddHouse />;
  }
  if (param == "male" || param == "female") {
    return <AddMember param={param} />;
  }
  if (param == "child") {
    return <AddChildren />;
  }
  if (param == "dead") {
    return <AddMember param={param} />;
  }
  if (param == "Pregnant") {
    return <AddMember param={param} />;
  }
}
