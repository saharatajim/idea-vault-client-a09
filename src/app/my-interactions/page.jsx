import React from "react";

const MyComments = () => {
  // Static sample data
  const commentsData = [
    {
      ideaTitle: "AI-Powered Note Taking",
      comment: "This concept is really useful for students!",
      date: "2026-06-01T10:30:00Z",
    },
    {
      ideaTitle: "Smart Gardening System",
      comment: "Love the eco-friendly approach here.",
      date: "2026-06-02T14:15:00Z",
    },
    {
      ideaTitle: "Virtual Reality Learning",
      comment: "Could make classes more engaging.",
      date: "2026-06-03T09:00:00Z",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        My Comments
      </h1>

      <div className="space-y-4">
        {commentsData.map((item, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {item.ideaTitle}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.comment}
            </p>
            <small className="block mt-2 text-gray-500">
              {new Date(item.date).toLocaleString()}
            </small>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComments;
