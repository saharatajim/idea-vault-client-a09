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
