import React from "react";

export default function AddHouse() {
  return (
    <>
      <Component />
    </>
  );
}

import { Bird, Rabbit, Turtle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Component() {
  return (
    <div className="relative flex flex-col items-start gap-8">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border bg-white p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
          <div className="mb-2 h-full">
            <Label htmlFor="house-name">House Name/House head Name</Label>
            <Input className="mt-4" id="house-name" />
          </div>
          <div className="mb-2 h-full">
            <Label htmlFor="house-address">Address</Label>
            <Textarea className="mt-4" id="house-address" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
