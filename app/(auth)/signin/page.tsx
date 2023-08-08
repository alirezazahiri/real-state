import Signin from "@/components/template/Signin";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth.options";
import {redirect} from "next/navigation"

async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/")
  return <Signin />;
}

export default SigninPage;
