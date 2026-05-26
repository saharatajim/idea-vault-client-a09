import React from 'react';

const Methodology = () => {
  return (
    <section className="bg-base-200 dark:bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h4 className="text-blue-400 uppercase tracking-widest mb-2">Our Methodology</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          How crowd consensus validates faster
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          We provide an open ecosystem where founders post blueprints, and industry experts rate them in real-time metrics.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 01 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-blue-400 font-bold text-lg mb-2">01</div>
            <h3 className="text-blue-400 font-semibold mb-2">Post Your Blueprint</h3>
            <p className="text-gray-400 text-sm">
              Outline the exact problem, proposed resolution path, target cohort metrics, and budget parameters inside our protected forms.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-blue-400 font-bold text-lg mb-2">02</div>
            <h3 className="text-blue-400 dark:text-white font-semibold mb-2">Gather Feedback</h3>
            <p className="text-gray-400 text-sm">
              Users interact, leave feedback, suggest features, and identify structural risks using our open comments module.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-blue-400 font-bold text-lg mb-2">03</div>
            <h3 className="text-blue-400 font-semibold mb-2">Refine & Pivot</h3>
            <p className="text-gray-400 text-sm">
              Edit your blueprint based on user insights, iterate through versions, and identify genuine market fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
