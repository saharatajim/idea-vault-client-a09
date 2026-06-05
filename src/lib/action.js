"use server"
// post idea action on client server--wil be private
        export const addIdeas=async(ideas,token)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
        method: "POST",
        headers: {
        'content-type': 'application/json',
         authorization:`Bearer ${token}`
         },
        body: JSON.stringify(ideas)
         })
        const data = await res.json()
        console.log(data, "dta")
   }
//get all idea data on client server
         export const getIdeas=async(category="",search="")=>{
          const params=new URLSearchParams()
          if(category) params.append("category",category)
          if(search) params.append("search",search)

            const queryString=params.toString()

          const url=`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas${queryString?`?${queryString}`:""}`

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
//get only selected idea data details on client server-wil be private
  //        export const selectedIdea= async(id,token)=>{
  //         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,{
  //           headers:{
  //             authorization:`Bearer ${token}`
  //           }
  //         })
  //        const SelectedIdea=await res.json()
  //        return SelectedIdea
  //  }
  export const selectedIdea = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  if (res.status === 401 || res.status === 403) {
    throw new Error("Unauthorized"); // frontend এ catch হবে
  }

  return res.json();
};

 //get user based all my idea data  -wil be private
         export const getMyIdea= async(id,token)=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`,{
          headers:{
              authorization:`Bearer ${token}`
            }
         })
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
//get user based all my comment data  -wil be private
         export const getMyComments= async(id,token)=>{
         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/user/${id}`,{
           headers:{
              authorization:`Bearer ${token}`
            }
         })
         const myIdea=await res.json()
         return myIdea
   } 