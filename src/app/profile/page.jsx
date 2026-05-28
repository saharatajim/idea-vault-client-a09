"use client";
import React from 'react';

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
const Profile = () => {
    const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [avatar, setAvatar] = useState("/default-avatar.png");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your API to update user info
    console.log("Updated:", { name, email, avatar });
  };
    return (
          <div className="conatiner pb-10 mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Display */}
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>

          {/* Update Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label>Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
             <label>Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              {/* <Label htmlFor="avatar">Avatar URL</Label> */}
              <label>Avatar URL</label>
              <Input
                id="avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>
            <div><button type="submit" className='btn w-full'> Update Profile</button></div>
          
          </form>
        </CardContent>
      </Card>
    </div>
    );
};

export default Profile;