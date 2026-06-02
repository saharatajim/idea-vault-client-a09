import Image from "next/image"

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getComments } from "@/lib/action";
import AddComments from "./AddComments";
// import CommentAction from "./CommentAction";

 const CommentSection= async({SelectedIdea})=> {
  
const session = await auth.api.getSession({
    headers: await headers() 
})

 const user=session?.user 
 const selectedIdeaById=SelectedIdea?._id
 
 const comments=await getComments(selectedIdeaById)


  return (
    <div className="container mx-auto mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Comments</h2>

      {/* Input */}
     <AddComments selectedIdeaById={selectedIdeaById} user={user}/>

      {/* Example List */}
      <div className="space-y-3">
{
  comments.map((comm,ind)=>
  {



  const isoDate = comm.newDate
const dateObj = new Date(isoDate)
const options = { day: "2-digit", month: "short", year: "numeric" }
const formattedDate = dateObj.toLocaleDateString("en-GB", options)
return(
   <div key={ind}>
            <div className="p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-2">
            <Image
            alt={comm?.userName}
              src={comm?.userImage}
              width={32}
              height={32}
              className="rounded-full border"
            />
            <div>
              <p className="font-medium">{comm?.userName}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{comm.comment}</p>

          {/* Actions */}
      {/* <CommentAction comm={comm}/> */}
        </div>
  </div>
)
 

})
}
      </div>
    </div>
  )
}
export default CommentSection;