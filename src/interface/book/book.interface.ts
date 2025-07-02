export interface IBook {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  image: string;
}

export interface IBooksResponse {
  status: string;
  data: IBook[];
}

export interface ICreateBookResponse {
  status: string;
  data: IBook;
}
