import Signup from '@/components/template/Signup'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth.options";
import {redirect} from "next/navigation"

async function SignupPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/")
  return (
    <Signup />
  )
}

export default SignupPage