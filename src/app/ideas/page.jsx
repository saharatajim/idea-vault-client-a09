import React from 'react';
import IdeaCard from '../../components/cards/IdeaCard';
import {SearchField} from "@heroui/react";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

const IdeasPage = () => {
    const test="text"
    console.log(test);
    return (
        <div className='container mx-auto'>
            <div className='conatiner mx-auto dark:bg-gray-900 bg-base-200 p-10 ' >
                      <h1 className="text-3xl text-blue-400 text-center pb-5 font-bold">All Concepts</h1>
                      <div className='pb-10 gap-10 space-y-6 '>

      <div>
                           <SearchField name="search">
<SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
                          </SearchField>
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
                       <IdeaCard/>
                       <IdeaCard/>
                       <IdeaCard/>
                       <IdeaCard/>
                       <IdeaCard/>
                       <IdeaCard/>
                     
                      </div>
                   </div>
        </div>
    );
};

export default IdeasPage;