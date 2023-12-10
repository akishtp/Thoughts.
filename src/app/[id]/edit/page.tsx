"use client";

import { ThoughtProps } from "@/app/types";
import Inputs from "@/components/Inputs";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditProps {
  params: {
    id: string;
  };
}

const Edit: FC<EditProps> = ({ params }) => {
  const router = useRouter();

  const { data: dataThought, isLoading: isFetchingThought } = useQuery({
    queryKey: ["thoughts", params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/thoughts/${params.id}`);
      return response.data;
    },
  });

  const {
    mutate: updateThought,
    isPending: isEditingThought,
    isSuccess: editedThought,
  } = useMutation({
    mutationFn: (newThought: ThoughtProps) => {
      return axios.patch(`/api/thoughts/${params.id}`, newThought);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<ThoughtProps> = (data) => {
    updateThought(data);
  };

  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/thoughts/${params.id}`);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  if (isFetchingThought || isEditingThought || editedThought) {
    return <p className="text-2xl">Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-4xl">Edit...</div>
        <button
          className="bg-red-500 flex text-white items-center px-3 min-w-10 justify-center"
          onClick={() => handleDelete()}
        >
          {isPending ? (
            "Please wait"
          ) : (
            <>
              <TrashIcon className="w-5" />
              Delete
            </>
          )}
        </button>
      </div>
      <Inputs submit={handleEditPost} isEditing initialValue={dataThought} />
    </div>
  );
};

export default Edit;
