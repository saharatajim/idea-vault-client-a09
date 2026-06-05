"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { deleteComment } from "@/lib/action";
import { toast } from "react-toastify";

export default function DeleteCommentDialog({ id }) {
  const handleDelete = async () => {
    await deleteComment(id);
    toast.error("Comment deleted");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="btn text-blue-600 hover:underline">Delete</div>
      </DialogTrigger>
      <DialogContent>
        <div className="p-5 space-y-4 border">
          <p className="text-xl">
            Are you sure to delete? If yes then continue
          </p>
          <button
            onClick={handleDelete}
            className="btn text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
