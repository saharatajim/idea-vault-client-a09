"use client";

import Image from "next/image";
import CommentSection from "../../../components/cards/CommentSection";

export default function IdeaDetailsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6 bg-blue-50 rounded-lg shadow">
      {/* Title & Subtitle */}
      <header className="text-left flex justify-between items-center space-y-2">
       <div>
         <h1 className="text-4xl font-bold text-blue-400">RemoteHire Hub</h1>
        <p className="text-lg text-blue-400 italic">
          Global remote job marketplace with AI skill matching.
        </p>
       </div>
       <div className="border p-4 rounded-lg text-blue-400">
        <h1>Submited By </h1>
        <p>Sahara Tajim</p>
       </div>
       
      </header>

      {/* Image */}
      <div className="w-full h-150 relative rounded-lg overflow-hidden shadow-md border">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
          alt="RemoteHire Hub"
         fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Overview</h2>
        <p className="text-gray-700">
          RemoteHire Hub connects remote workers with companies worldwide using
          AI-powered skill analysis and job recommendations. The platform
          includes portfolio verification, interview scheduling, and productivity
          tools.
        </p>
      </section>

      {/* Category & Tags */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Category & Tags</h2>
        <p>
          <strong>Category:</strong> Tech
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {["Remote Work", "Jobs", "AI Recruitment"].map((tag, idx) => (
            <span
              key={idx}
              className="bg-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-cyan-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Problem & Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow border border-blue-300">
            <h3 className="font-bold text-blue-700 mb-2">Problem</h3>
            <p className="dark:text-black">
              Finding qualified remote talent and suitable remote jobs is
              time-consuming.
            </p>
          </div>
          <div className="bg-cyan-100 p-4 rounded-lg shadow border border-cyan-300">
            <h3 className="font-bold text-cyan-700 mb-2">Solution</h3>
            <p className="dark:text-black"> 
              Use AI matching algorithms to streamline hiring and improve job
              compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Target Audience</h2>
        <p className="text-gray-700">Remote professionals and startups</p>
      </section>

      {/* Budget */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Estimated Budget</h2>
        <p className="text-gray-700">$22,000</p>
      </section>

      {/* Comments */}
      <CommentSection />
    </div>
  );
}
