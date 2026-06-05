import DeleteCommentDialog from "@/components/DeleteCommentDialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { deleteComment, getMyComments } from "@/lib/action";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "IdeaVault – My interactions",
  description:
    "Connect with innovators, builders, and co-founders to grow your startup ideas transparently.",
};

const MyComments = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const userId = session?.user.id;
  const comments = await getMyComments(userId, token);
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">My Comments</h1>

      {comments.length === 0 ? (
        // Empty state design
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
            No Comments Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            You haven’t commented on any ideas yet. Start by exploring and
            sharing your thoughts!
          </p>
          <button className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md transition">
            <Link href={"/ideas"}>Browse Ideas</Link>
          </button>
        </div>
      ) : (
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

              <div className="flex gap-3 mt-4">
                <Link
                  href={`/ideas/details/${item.selectedIdeaById}`}
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition"
                >
                  View Details
                </Link>
                <DeleteCommentDialog id={item._id}/>
      
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComments;
