"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import dotenv from 'dotenv';

dotenv.config();
function page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
}



export default page;
