// components/IdeaCard.jsx

import Image from "next/image";
import Link from "next/link";

export default function IdeaCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 ">
      <div className="relative">
        <Image
          width={700}
          height={600}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          alt="StudyMate AI"
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
          Education
        </span>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          StudyMate AI
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          AI-powered study assistant for personalized learning and smart quizzes.
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
          <span>For Students</span>
          <span>Budget: $18,000</span>
        </div>

        {/* 👤 User avatar + name */}
        <div className="flex items-center gap-3 mb-5">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Creator Avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <span className="text-gray-700 font-medium">Tajim Ahmed</span>
        </div>

        <Link
          href="/ideas/details"
          className="block w-full text-center bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
