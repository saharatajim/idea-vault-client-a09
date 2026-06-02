
import Image from "next/image";
// import { IdeaDeleteAlert } from "./IdeaDeleteAlert";
// import { UpdateModal } from "./UpdateModal";


const MyideaCard=async ({IdeaCard,userId})=>{
console.log(IdeaCard)
  return(

   <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-blue-200 dark:border-gray-700 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 w-full h-64 relative">
            <Image
              src={IdeaCard.imageUrl}
              alt={IdeaCard.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {IdeaCard.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {IdeaCard.pitch}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-cyan-600 dark:text-cyan-400">{IdeaCard.category}</span>
            </p>

      
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
{/*            
             <UpdateModal IdeaCard={IdeaCard} />
              <IdeaDeleteAlert userId={userId}/> */}
            </div>
          </div>
        </div>
      </div>
  );
}
export default MyideaCard;