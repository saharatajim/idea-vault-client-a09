"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
      const router = useRouter();
  const handleRegister=async(e)=>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const {name,email,password,image} = Object.fromEntries(formData.entries());

      const { data, error }=await authClient.signUp.email({
        name,email,password,image
      })
                if(data){
                toast.success("your  registration completed")
                setTimeout(()=>{
                  router.push("/")
                },500)
          
              }
              if(error){
                 toast("your  registration failed")
              }
        
      console.log({data, error });

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/20">
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
              name="name"
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
              name="image"
                id="imageUrl"
                type="text"
                placeholder="https://example.com/avatar.png"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
              name="email"
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              name="password"
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

         
        
          {/* Redirect to Sign In */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign in here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
