import React from 'react';
import IdeaCard from '@/components/IdeaCard';
import { getTrendingIdeas } from '@/lib/action';
import Link from 'next/link';

const TrendingIdeas = async() => {
    const allITrendingideas=await getTrendingIdeas()
     
    return (
        <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
           <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">Trending Concepts</h1>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
  {allITrendingideas.length > 0 ? (
    allITrendingideas.map((idea, index) => (
      <IdeaCard key={index} idea={idea} />
    ))
  ) : (
    <div className="col-span-full flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md p-10 border border-cyan-300">
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
  )}
</div>

        </div>
    );
};

export default TrendingIdeas;