"use client";

import { useState } from "react";
import Image from "next/image";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      id: Date.now(), // unique id
      text: newComment,
      author: "Tajim Ahmed", // এখানে ডাইনামিক ইউজার নাম আসতে পারে
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: new Date().toLocaleString(),
    };

    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, text: editText, date: new Date().toLocaleString() } : c
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="container mx-auto mt-8 p-6 rounded-lg bg-blue-50 border border-blue-200">
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
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-3 rounded bg-cyan-100 text-blue-800 border border-cyan-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
                <div>
                  <p className="font-medium text-gray-800">{comment.author}</p>
                  <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
              </div>

              {editingId === comment.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 border px-2 py-1 rounded"
                  />
                  <button
                    onClick={() => handleUpdate(comment.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-gray-700">{comment.text}</p>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-2 text-sm">
                <button
                  onClick={() => handleEdit(comment.id, comment.text)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
