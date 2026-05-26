import Banner from '@/components/Homepage/banner/Banner';
import Methodology from '@/components/Homepage/banner/Methodology';
import Stats from '@/components/Homepage/banner/Stats';
import TrendingIdeas from '@/components/Homepage/TrendingIdeas';

import React from 'react';

const Homepage = () => {

  return (
    <div className='container mx-auto'>
      <Banner/>
      <TrendingIdeas/>
      <Stats/>
      <Methodology/>
      
    </div>
  );
};

export default Homepage;