"use client";

import { ThoughtProps } from "@/app/types";
import Inputs from "@/components/Inputs";
import { SubmitHandler } from "react-hook-form";

export default function Edit() {
  const handleEditPost: SubmitHandler<ThoughtProps> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="text-4xl">Edit...</div>
      <Inputs submit={handleEditPost} isEditing={true} />
    </div>
  );
}
