import UserModel from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { comparePassword } from "@/utils/password";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth/core/types";


export const authOptions: AuthOptions = {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
  
          try {
            await connectDB();
          } catch (error) {
            throw new Error("مشکلی در سرور رخ داده است");
          }
  
          if (!email || !password)
            throw new Error("لطفا اطلاعات معتبر وارد نمایید");
  
          const user = await UserModel.findOne({ email });
          if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
  
          const isValid = await comparePassword(password, user.password);
  
          if (!isValid) throw new Error("ایمیل یا گذرواژه صحیح نمیباشد");
  
          return {
            email,
          };
        },
      }),
    ],
  };