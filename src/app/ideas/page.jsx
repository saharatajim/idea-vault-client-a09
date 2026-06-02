import React from 'react';


import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import IdeaCard from '@/components/IdeaCard';
import { getIdeas } from '@/lib/action';
import Link from 'next/link';

const IdeasPage = async() => {
    
    const allIdeas=await getIdeas()
    
    console.log(allIdeas)
    return (
        <div className='container mx-auto'>
            <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
                      <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">All Concepts</h1>
                      <div className='pb-10 gap-10 space-y-6 '>

   <div className="flex justify-center items-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 w-80 
                   border border-gray-400 
                   rounded-l-md 
                   focus:outline-none focus:ring-1 focus:ring-gray-600 
                   text-gray-700 placeholder-gray-500 
                   dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:border-gray-600"
      />
      <button
        type="button"
        className="px-5 py-2 
                   bg-gray-700 text-white 
                   rounded-r-md 
                   hover:bg-gray-800 transition-colors 
                   dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        Search
      </button>
    </div>
                     
<div>
        <NativeSelect>
  <NativeSelectOption value="">Select a Category</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
     </NativeSelect>
</div>
          </div>
<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
  {allIdeas.length > 0 ? (
    allIdeas.map((idea, index) => (
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
        There is no ideas now
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
        </div>
    );
};

export default IdeasPage;