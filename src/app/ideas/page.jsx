import React from 'react';


import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import IdeaCard from '@/components/IdeaCard';
import { getIdeas } from '@/lib/action';

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
                         {
                          allIdeas.map((idea,index)=>
                          <IdeaCard key={index} idea={idea}/>)
                        } 
                    
                     
                      </div>
                   </div>
        </div>
    );
};

export default IdeasPage;