export interface IBook {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image?: string;
  price: number | string;
  rating: number | string;
  addedBy: string | null;
}
