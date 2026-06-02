"use server"
// post idea action on client server
        export const addIdeas=async(ideas)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
        method: "POST",
        headers: {
        'content-type': 'application/json'
         },
        body: JSON.stringify(ideas)
         })
        const data = await res.json()
        console.log(data, "dta")
   }
//get all idea data on client server
         export const getIdeas=async()=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`)
         const ideas=await res.json()
       
         return ideas
   }
//get all trending idea data on client server
         export const getTrendingIdeas=async()=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`)
         const ideas=await res.json()
         return ideas
   }
//get only selected idea data details on client server
         export const selectedIdea= async(id)=>{
          const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`)
         const SelectedIdea=await res.json()
         return SelectedIdea
   }
 //get user based all my idea data  
         export const getMyIdea= async(id)=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`)
         const myIdea=await res.json()
         return myIdea
   } 
   
   //delete  ideas 
    export const deleteMyIdea= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,{
        method:"DELETE",
         headers: {
        'content-type': 'application/json'
      },
      
      })
    const deleteIdea=await res.json()
    return deleteIdea
   }
  //update data
   export const updateMyIdea= async(id,data)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,{
        method:"PATCH",
         headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
      
      })
    const updateIdea=await res.json()
    return updateIdea
   } 