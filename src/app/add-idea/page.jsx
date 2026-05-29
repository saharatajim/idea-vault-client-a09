"use client"

import React from 'react';

const AddIdea = () => {

     const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())
        console.log(destination);
     }
    return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form 
       onSubmit={onSubmit}
      className="w-[600px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600 dark:text-blue-400">
          Introduce a Startup Proposal
        </h2>

        {/* Idea / Company Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Idea / Company Title *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. HealthAI"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Market Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Market Category *
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          >
            <option>Tech</option>
            <option>Health</option>
            <option>Education</option>
            <option>Finance</option>
          </select>
        </div>

        {/* Short Pitch */}
        <div>
          <label
            htmlFor="pitch"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Short Pitch *
          </label>
          <input
            id="pitch"
            name="pitch"
            type="text"
            placeholder="Provide a compelling 1-sentence headline pitch"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Detailed Vision Analysis */}
        <div>
          <label
            htmlFor="vision"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Detailed Vision Analysis *
          </label>
          <textarea
            id="vision"
            name="vision"
            rows={4}
            placeholder="Describe how the idea works..."
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>

        {/* Target Audience */}
        <div>
          <label
            htmlFor="audience"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Target Audience / Persona *
          </label>
          <input
            id="audience"
            name="audience"
            type="text"
            placeholder="e.g. High school educators, medical practitioners"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Estimated Launch Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Estimated Launch Budget
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder="e.g. $15,000 / Bootstrapping"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Problem Statement */}
        <div>
          <label
            htmlFor="problem"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Problem Statement *
          </label>
          <textarea
            id="problem"
            name="problem"
            rows={3}
            placeholder="What exact friction, loss, or pain point does your customer currently face?"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>

        {/* Proposed Solution */}
        <div>
          <label
            htmlFor="solution"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Proposed Solution *
          </label>
          <textarea
            id="solution"
            name="solution"
            rows={3}
            placeholder="How does your platform alleviate this friction uniquely compared to options in the wild?"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>

        {/* Platform Preview Image URL */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Platform Preview Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            placeholder="https://images.unsplash.com/... (optional)"
            className="w-full px-3 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100
                       border-gray-300 dark:border-gray-600"
          />
        </div>


        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 
                       text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 dark:bg-blue-500 
                       text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Add Idea
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddIdea;