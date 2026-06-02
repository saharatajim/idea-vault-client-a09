import MyideaCard from "@/components/MyideaCard";
import { getMyIdea } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";



const MyIdeas=async ()=>{

const session = await auth.api.getSession({
    headers: await headers() 
})

const userId=session?.user.id

const myIdeas=await getMyIdea(userId)
console.log(myIdeas)
  return(

 <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">My Ideas</h1>
 {myIdeas.length === 0 ? (
        // Empty UI
        <div className="flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md p-10 border border-cyan-300">
          <svg
            className="w-16 h-16 text-blue-400 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            No Ideas Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            You haven’t submitted any ideas yet. Start by creating one!
          </p>
          <button className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md transition">
        <Link href={"/add-idea"}>
            Add New Idea
        </Link>
          </button>
        </div>
      ) : (
        // Ideas List
        myIdeas.map((IdeaCard, index) => (
          <MyideaCard IdeaCard={IdeaCard} userId={userId} key={index} />
        ))
      )}


    </div>
  );
}
export default MyIdeas;