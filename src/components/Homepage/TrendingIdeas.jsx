import React from 'react';
import IdeaCard from '@/components/IdeaCard';
import { getTrendingIdeas } from '@/lib/action';

const TrendingIdeas = async() => {
    const allITrendingideas=await getTrendingIdeas()
        console.log(allITrendingideas)
    return (
        <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
           <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">Trending Concepts</h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
             allITrendingideas.map((idea,index)=>
             <IdeaCard key={index} idea={idea}/>)
           } 
          
           </div>
        </div>
    );
};

export default TrendingIdeas;