import { authMiddleware } from "@clerk/nextjs";
import dotenv from 'dotenv';

dotenv.config(); 

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
