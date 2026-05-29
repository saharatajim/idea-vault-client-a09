"use client";

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: session } = authClient.useSession();

  const handleSubmit = async(e) => {
    e.preventDefault();
      const formData = new FormData(e.currentTarget)
        const {name,image} = Object.fromEntries(formData.entries());
        console.log(name,image);
   await authClient.updateUser({
     image,
    name
 })
 toast.success("Profile updated" )
  };

  return (
    <div className="w-[400px] pb-10 mx-auto mt-10 space-y-8">
      {/* Profile Display */}
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
            </Avatar>
            <div>
              <p className="font-medium">{session?.user?.name}</p>
              <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Update Form */}
      <div className=" flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] dark:bg-black bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-xl font-semibold text-center text-blue-600">
            Update Profile
          </h2>

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              defaultValue={session?.user?.name}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Field */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="https://example.com/avatar.png"
              defaultValue={session?.user?.image}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
