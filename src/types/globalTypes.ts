export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image?: string;
  price: number | string;
  rating: number | string;
  wishlist: string[];
  collections: ICollection[];
  addedBy: string | null;
  publicationYear: string;
  createdAt: string;
  updatedAt: string;
}

export interface IWishList {
  data: IBook;
  email: string;
}

export interface IYear {
  _id: string;
  year: string;
  createdAt: string;
  updatedAt: string;
}

export type ICollection = {
  user: string;
  status: string;
  id: string;
};
