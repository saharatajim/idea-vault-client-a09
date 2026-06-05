import { getMyComments } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "IdeaVault – My interactions",
  description: "Connect with innovators, builders, and co-founders to grow your startup ideas transparently.",
};
const MyComments =async () => {
  const session = await auth.api.getSession({
      headers: await headers() 
  })
  const {token}=await auth.api.getToken({
    headers:await headers()
  })

  const userId=session?.user.id

  
  const comments=await getMyComments(userId,token)
  


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        My Comments
      </h1>

      <div className="space-y-4">
        {comments.map((item, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {item.selectedIdeaByTitle}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.comment}
            </p>
            <small className="block mt-2 text-gray-500">
              {new Date(item.newDate).toLocaleString()}
            </small>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition">
                <Link
       href={`/ideas/details/${item.selectedIdeaById}`}
         
        >
          View Details
        </Link>
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComments;
