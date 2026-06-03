import React from 'react';
import IdeaFilter from '@/components/IdeaFilter';
export const metadata = {
  title: "IdeaVault – All concepts",
  description: "Connect with innovators, builders, and co-founders to grow your startup ideas transparently.",
};

const IdeasPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
                      <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">All Concepts</h1>

                 <IdeaFilter/>
       </div>
        </div>
    );
};

export default IdeasPage;