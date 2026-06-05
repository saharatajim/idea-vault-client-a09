
import Image from "next/image";
import Link from "next/link";

export default function IdeaCard({idea}) {
  
  const {title,category,pitch,imageUrl,budget,audience}=idea
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 ">
      <div className="relative">
        <Image
        loading="eager"
          width={700}
          height={600}
        src={imageUrl}
          alt="StudyMate AI"
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
        {category}
        </span>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">
         {title}
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          {pitch}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
          <span>For {audience}</span>
          <span>Budget: ${budget}</span>
        </div>

     

        <Link
       href={`/ideas/details/${idea._id.toString()}`}
          className="block w-full text-center bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}