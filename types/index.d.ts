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
