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
         export const getIdeas=async(category=" ")=>{
          let url=`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`

         if(category){
          url=`${url}?category=${category}`
         }

         const res=await fetch(url)
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


   // comment collenction

   //post comment
  export const postComments=async(comments)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comments)
    })
    const data = await res.json()
    console.log(data, "dta")

   }
//get all comments of only selected Details page of idea
     export const getComments=async(ideaId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`)
    const comments=await res.json()
    return comments
   }
  //delete comment 
   export const deleteComment= async(id)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${id}`,{
        method:"DELETE",
         headers: {
        'content-type': 'application/json'
      },
      
      })
    const deleteData=await res.json()
    return deleteData
   }
   //update comments
      export const updateMyComment= async(id,data)=>{
      const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${id}`,{
        method:"PATCH",
         headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
      
      })
    const updateIdea=await res.json()
    return updateIdea
   }
//get user based all my comment data  
         export const getMyComments= async(id)=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/user/${id}`)
         const myIdea=await res.json()
         return myIdea
   } 