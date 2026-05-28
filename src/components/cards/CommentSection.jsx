// app/components/CommentSection.tsx
"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([newComment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="conatiner mx-auto mt-8 p-6 rounded-lg bg-blue-50 border border-blue-200">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Comments</h2>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 border dark:text-black border-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-cyan-100 text-blue-800 border border-cyan-300"
            >
              {comment}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
