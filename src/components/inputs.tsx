"use client";

import { ThoughtProps } from "@/app/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputsProps {
  submit: SubmitHandler<ThoughtProps>;
}

const Inputs: FC<InputsProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<ThoughtProps>();

  return (
    <div className="flex pt-10">
      <div className="border-2 border-neutral-900 w-3/5">
        <div className="w-100 flex justify-center pt-10 pb-14 pl-10">
          <img
            src="https://images.unsplash.com/photo-1596428693280-648ba296233c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cover image"
            className="w-3/4 cool-shadow"
          />
        </div>
        <div className="text-3xl px-10">Title</div>
        <div className="px-10"></div>
      </div>
      <form
        className="w-2/5 flex flex-col px-4"
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
            {...register("imgurl")}
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
        <button className="bg-neutral-900 text-white h-12 my-3">Submit</button>
      </form>
    </div>
  );
};

export default Inputs;
