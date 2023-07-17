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
  data?: IBook;
  email: string | null;
}

export interface IYear {
  _id: string;
  year: string;
  createdAt: string;
  updatedAt: string;
}

export type ICollection = {
  user: string | null;
  status: string;
  id?: string;
};

export interface IReview {
  review: string;
  date: string;
  bookId: string;
  reviewBy: string | null;
}
