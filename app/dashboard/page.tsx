import Dashboard from "@/components/template/Dashboard";
import UserModel from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function DashboardPage() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await UserModel.findOne({email: session.user.email})

  return (
    <Dashboard createdAt={new Date(user.createdAt).toLocaleDateString("fa-IR")} />
  );
}

export default DashboardPage;
