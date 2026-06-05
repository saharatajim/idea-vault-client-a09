"use client"
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { updateMyComment } from '@/lib/action';

const UpdateCommentDialog = ({id}) => {

    const onSubmit=async(e)=>{
         e.preventDefault()
         console.log(id);
     const formData = new FormData(e.currentTarget)
      const comment = Object.fromEntries(formData.entries())
       console.log(comment)
      await updateMyComment(id,comment)
            setTimeout(() => {
      window.location.reload();
    }, 2000);
    toast.success("comment updated")
    }
    return (
        <div>
                 <Dialog>
        <DialogTrigger>
          <div className="btn text-blue-600 hover:underline">Edit</div>
        </DialogTrigger>
        <DialogContent>
          <form 
          onSubmit={onSubmit}
          >
            <div className="mt-4">
            <textarea
              name="comment"
             
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button  type="submit" className="btn">Save</button>
          </form>
        </DialogContent>
      </Dialog>
        </div>
    );
};

export default UpdateCommentDialog;