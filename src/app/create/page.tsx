"use client";

import Inputs from "@/components/inputs";
import { SubmitHandler } from "react-hook-form";
import { ThoughtProps } from "../types";

export default function CreatePage() {
  const handleCreatePost: SubmitHandler<ThoughtProps> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="text-4xl">Write...</div>
      <Inputs submit={handleCreatePost} />
    </div>
  );
}
