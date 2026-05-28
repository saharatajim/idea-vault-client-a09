import React from 'react';
import IdeaCard from '../cards/IdeaCard';

const TrendingIdeas = () => {
    return (
        <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
           <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">Trending Concepts</h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <IdeaCard/>
            <IdeaCard/>
            <IdeaCard/>
            <IdeaCard/>
            <IdeaCard/>
            <IdeaCard/>
          
           </div>
        </div>
    );
};

export default TrendingIdeas;