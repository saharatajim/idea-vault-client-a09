"use client"


import { deleteComment, updateMyComment } from "@/lib/action"
import { toast } from "react-toastify"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

const CommentAction=({comm})=>{
const commentId=comm._id
const handleDelete=async(id)=>{
    await deleteComment(id)
    setTimeout(() => {
  window.location.reload();
}, 2000);
toast("comment deleted")
}
const onSubmit=async(e)=>{
     e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const comment = Object.fromEntries(formData.entries())
    console.log(comment)
    await updateMyComment(commentId,comment)
         setTimeout(() => {
  window.location.reload();
}, 2000);
toast("comment updated")
}
    return(

            <div className="flex gap-3 mt-2 text-sm">
            
            
            <button onClick={()=>handleDelete(commentId)} className=" btn text-red-600 hover:underline">Delete</button>
             <Dialog>
        <DialogTrigger>
          <div className="btn text-blue-600 hover:underline">Edit</div>
        </DialogTrigger>
        <DialogContent>
          <form 
          onSubmit={onSubmit}>
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
    )
}
export default CommentAction