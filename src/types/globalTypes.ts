export interface IBook {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image?: string;
  price: number | string;
  rating: number | string;
  wishlist: string[];
  collections: [];
  addedBy: string | null;
}

export interface IWishList {
  data: IBook;
  email: string;
}

export type ICollection = {
  user: "string";
  status: "string";
  id: string;
};
