declare module "@profile" {
  export interface Profile {
    title: string;
    description: string;
    address: string;
    phone: string;
    price: string;
    realState: string;
    constructionDate: Date;
    category: string;
    rules?: string[];
    amenities?: string[];
  }
}

declare module "@models" {
  import type { TProfileSchema } from "@/models/Profile.model";
  import type { TUserSchema } from "@/models/User.model";
  export interface IProfileSchema extends TProfileSchema {}
  export interface IUserSchema extends TUserSchema {}
}
