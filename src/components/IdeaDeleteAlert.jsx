"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteMyIdea } from "@/lib/action"
import { toast } from "react-toastify"

export function IdeaDeleteAlert({userId}) {
 
    const handleDeleteCard=async()=>{
        toast("idea deleted")
        await deleteMyIdea(userId)
          window.location.reload()
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger ><div className="w-25 bg-cyan-400 hover:bg-blue-500 text-white py-2 rounded-md transition">
         
Delete              </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
        <div>
                <div onClick={handleDeleteCard}>Continue</div>
        </div>
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}