"use client";

import Inputs from "@/components/Inputs";
import { SubmitHandler } from "react-hook-form";
import { ThoughtProps } from "../types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<ThoughtProps> = (data) => {
    createPost(data);
  };

  const {
    mutate: createPost,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: (newThought: ThoughtProps) => {
      return axios.post("/api/thoughts/create", newThought);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  if (isPending || isSuccess) {
    return <p className="text-2xl">Loading...</p>;
  }

  return (
    <div>
      <div className="text-4xl">Write...</div>
      <Inputs submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
