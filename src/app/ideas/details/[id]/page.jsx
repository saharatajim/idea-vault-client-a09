

import CommentSection from "@/components/CommentSection";
import { selectedIdea } from "@/lib/action";
import Image from "next/image";

const IdeaDetailsPage = async({params}) => {
  const{id}=await params
 
  const SelectedIdea=await selectedIdea(id)
  console.log(SelectedIdea);

  return (
       <div className="container mx-auto p-6 space-y-6 bg-blue-50 rounded-lg shadow">
      {/* Title & Subtitle */}
      <header className="text-left flex justify-between items-center space-y-2">
        <div>
          <h1 className="text-4xl font-bold text-blue-400">{SelectedIdea?.title}</h1>
          <p className="text-lg text-blue-400 italic">
            {SelectedIdea?.pitch}
          </p>
        </div>
     
      </header>

      {/* Image */}
      <div className="w-full h-[300px] relative rounded-lg overflow-hidden shadow-md border">
        <Image
          src={SelectedIdea?.imageUrl}
          alt="RemoteHire Hub"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Overview</h2>
        <p className="text-gray-700">
        {SelectedIdea?.vision}
        </p>
      </section>

      {/* Category & Tags */}
      <section>
       
        <p>
          <strong>Category:</strong> {SelectedIdea?.category}
        </p>
       
      </section>

      {/* Problem & Solution */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Problem & Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow border border-blue-300">
            <h3 className="font-bold text-blue-700 mb-2">Problem</h3>
            <p className="dark:text-black">
             {SelectedIdea?.problem}
            </p>
          </div>
          <div className="bg-cyan-100 p-4 rounded-lg shadow border border-cyan-300">
            <h3 className="font-bold text-cyan-700 mb-2">Solution</h3>
            <p className="dark:text-black">
             {SelectedIdea?.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Target Audience</h2>
        <p className="text-gray-700">{SelectedIdea?.audience}</p>
      </section>

      {/* Budget */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Estimated Budget</h2>
        <p className="text-gray-700">${SelectedIdea?.budget}</p>
      </section>

      {/* Comments */}
      <CommentSection SelectedIdea={SelectedIdea}/>
    </div>
  );
};

export default IdeaDetailsPage;