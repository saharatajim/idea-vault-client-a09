
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Ideas Submitted' },
    { number: '200+', label: 'Active Founders' },
    { number: '1,000+', label: 'Feedback Comments' },
    { number: '50+', label: 'Categories Explored' },
  ];

  return (
    <section className="dark:bg-gray-900 bg-base-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl text-blue-400 font-bold mb-10">Platform Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="dark:bg-gray-800 bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h3 className="text-4xl font-extrabold text-blue-400 mb-2">{item.number}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Stats;
