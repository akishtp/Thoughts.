"use client";

import Inputs from "@/components/Inputs";
import { SubmitHandler } from "react-hook-form";
import { ThoughtProps } from "../types";

export default function Create() {
  const handleCreatePost: SubmitHandler<ThoughtProps> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="text-4xl">Write...</div>
      <Inputs submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
