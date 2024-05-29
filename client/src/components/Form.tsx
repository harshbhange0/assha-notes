import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { PasswordInput } from "./ui/password_input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";

interface FormProps {
  type: "register" | "login";
}
export default function Form({ type }: FormProps) {
  return (
    <>
      <Card className="w-full max-w-md select-none">
        <CardHeader>
          <CardTitle className="text-center text-4xl capitalize">
            Aasha {type}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="mx-auto flex w-full flex-col items-center justify-center gap-3 ">
            <div className="mb-4 flex w-full flex-col gap-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div className="mb-4 flex w-full flex-col gap-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput id="password" />
            </div>{" "}
            {type == "register" && (
              <div className="mb-4 flex w-full flex-col gap-y-2">
                <Label htmlFor="conform-password">Conform Password</Label>
                <PasswordInput id="conform-password" />
              </div>
            )}
            <Button className="w-full capitalize" variant={"ghost"}>
              {type}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <span className="flex items-center justify-center w-full">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              className="ps-1 capitalize text-blue-600 underline"
              to={`/auth/${type == "login" ? "register" : "login"}`}
            >
              {type == "login" ? "register" : "login"}
            </Link>
          </span>
        </CardFooter>
      </Card>
    </>
  );
}
