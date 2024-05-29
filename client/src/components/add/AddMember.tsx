import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface Inputs {
  name: string;
  dob: string;
  age: number;
  phonNo: number;
  gender: "male" | "female" | "other";
}

export default function AddMember({ param }: { param?: string }) {
  console.log(param);

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto grid w-full max-w-lg items-start gap-6 "
      >
        <fieldset className="grid gap-6 rounded-lg border bg-white p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            House Member Information
          </legend>
          <div className="mb-2 h-full">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} className="mt-4" />
          </div>
          <div className="mb-2 h-full">
            <Label htmlFor="name">Phone No</Label>
            <Input
              id="name"
              type="tel"
              maxLength={10}
              {...register("phonNo")}
              className="mt-4"
            />
          </div>
          <div className="grid-2 grid grid-cols-3 gap-5">
            <div className="mb-2 h-full">
              <Label htmlFor="dob">Age</Label>
              <Input
                id="dob"
                type="number"
                {...register("age")}
                className="mt-4"
              />
            </div>
            <div className="mb-2 h-full">
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input
                id="dob"
                type="date"
                {...register("dob")}
                className="mt-4"
              />
            </div>
            <div className="mb-2 h-full">
              <Label htmlFor="dob">Gender</Label>
              <div className="mt-4">
                <Select {...register("gender")}>
                  <SelectTrigger>
                    <SelectValue placeholder={"Gender"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"Male"}>Male</SelectItem>
                    <SelectItem value={"Female"}>Female</SelectItem>
                    <SelectItem value={"Other"}>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex gap-x-20">
            <Button className="mx-auto w-1/2" type="submit">
              Submit
            </Button>
            <Button
              variant={"ghost"}
              className="mx-auto w-1/2"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </div>
        </fieldset>
      </form>
      <Button className="mx-auto w-1/2">
        <Link to={"/add/child"}>Add Child</Link>
      </Button>
    </div>
  );
}
// const UpdateMember = () => {
//   return <></>;
// };
