"use client";

import { ThoughtProps } from "@/app/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputsProps {
  submit: SubmitHandler<ThoughtProps>;
  isEditing: boolean;
  initialValue?: ThoughtProps;
}

const Inputs: FC<InputsProps> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit } = useForm<ThoughtProps>({
    defaultValues: initialValue,
  });

  return (
    <div className="flex pt-10">
      <div className="w-3/5 hidden md:block bg-black text-white p-10">
        Please dont do this
      </div>
      <form
        className="w-full flex flex-col pl-4 md:w-2/5"
        onSubmit={handleSubmit(submit)}
      >
        <label className="flex flex-col py-3">
          Title
          <input
            type="text"
            className="h-10 border-b border-neutral-900"
            {...register("title", { required: true })}
          />
        </label>
        <label className="flex flex-col py-3">
          Cover Image (url)
          <input
            type="text"
            className="h-10 border-b border-neutral-900"
            {...register("img")}
          />
        </label>
        <label className="flex flex-col py-3">
          Content (markdown)
          <textarea
            rows={3}
            className="border-b border-neutral-900"
            {...register("content", { required: true })}
          ></textarea>
        </label>
        <button className="bg-neutral-900 text-white h-12 my-3">
          {isEditing ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Inputs;
