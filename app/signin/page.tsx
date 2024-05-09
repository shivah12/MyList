"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import dotenv from 'dotenv';

dotenv.config();
function page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
}

export default page;
