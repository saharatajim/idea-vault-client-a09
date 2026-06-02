
import Image from "next/image"
import AddComments from "./AddComments";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// import CommentAction from "./CommentAction";

 const CommentSection= async({SelectedIdea})=> {
  
const session = await auth.api.getSession({
    headers: await headers() 
})

 const user=session?.user 
 const selectedIdeaById=SelectedIdea?._id
 
//  const allCommnets=await getComments(selectedIdeaById)
// console.log(allCommnets)


  return (
    <div className="container mx-auto mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Comments</h2>

      {/* Input */}
     <AddComments selectedIdeaById={selectedIdeaById} user={user}/>

      {/* Example List */}
    
    </div>
  )
}
export default CommentSection;