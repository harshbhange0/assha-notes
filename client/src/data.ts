import { DashCardProps } from "./components/DashCard";
import { FaHouse } from "react-icons/fa6";
import { FaMale, FaFemale, FaChild, FaBookDead } from "react-icons/fa";
import { MdPregnantWoman } from "react-icons/md";
import { DashNavItemProps } from "./components/DashNav";

export const dashboardItem: DashCardProps[] = [
  {
    title: "House",
    Icon: FaHouse,
    description: "House Under me",
    info: "200 houses",
  },
  {
    title: "Male ",
    Icon: FaMale,
    description: "Total Male Population",
    info: "400 Entity ",
  },
  {
    title: "Female ",
    Icon: FaFemale,
    description: "Total Female Population",
    info: "400 Entity ",
  },
  {
    title: "Pregnant",
    Icon: MdPregnantWoman,
    description: "Total Pregnant Woman",
    info: "22 Entity ",
  },
  {
    title: "Child ",
    Icon: FaChild,
    description: "Total Child Population",
    info: "209 Entity ",
  },
  {
    title: "Dead",
    Icon: FaBookDead,
    description: "Total Dead Population",
    info: "22 Entity ",
  },
];
export const peoples = [
  {
    name: "jon F",
    age: 21,
    dob: "23-32-2024",
    gender: "male",
    isHead: false,
    isHeadWife: false,
    isMarried: false,
    isHusband: false,
    isWife: false,
    ashaId: "1",
    houseId: "2",
  },
  {
    name: "jen F",
    age: 21,
    dob: "23-32-2024",
    gender: "female",
    isHead: false,
    isHeadWife: false,
    isMarried: false,
    isHusband: false,
    isWife: false,
    ashaId: "1",
    houseId: "2",
  },
];
export const houses = [
  {
    id: "21",
    name: "k house",
    address: "somethings",
    totalMember: 2,
    femaleMember: 1,
    maleMember: 1,
    // relation
    ashaId: "1",
    members: ["1"],
  },
];
export const dashNavItems: DashNavItemProps[] = [
  {
    title: "House",
    Icon: FaHouse,
    href: "/all/home",
  },
  {
    title: "Male",
    Icon: FaMale,
    href: "/all/male",
  },
  {
    title: "Female",
    Icon: FaFemale,
    href: "/all/female",
  },
  {
    title: "Pregnant Woman",
    Icon: MdPregnantWoman,
    href: "/all/pregnant",
  },
  {
    title: "Children",
    Icon: FaChild,
    href: "/all/children",
  },
];
