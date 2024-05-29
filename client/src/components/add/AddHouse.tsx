import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Inputs {
  name: string;
  address: string;
}

export default function AddHouse() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };
  return (
    <>
      <div className="relative flex flex-col items-start gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid w-full max-w-lg items-start gap-6"
        >
          <fieldset className="grid gap-6 rounded-lg border bg-white p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Add House Details
            </legend>
            <div className="mb-2 h-full">
              <Label htmlFor="house-name">House Name/House head Name</Label>
              <Input className="mt-4" id="house-name" {...register("name")} />
            </div>
            <div className="mb-2 h-full">
              <Label htmlFor="house-address">Address</Label>
              <Textarea
                className="mt-4"
                id="house-address"
                {...register("address")}
              />
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
          <Link to={"/add/member"}>Add House Members</Link>
        </Button>
      </div>
    </>
  );
}
