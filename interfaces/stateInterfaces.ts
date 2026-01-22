export interface ICartItem {
  [index: string]: string | number | object | undefined;
  id: number;
  quantity?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ICreateItem {
  title: string;
  description: string;
  price: string | number;
  category: string;
  image: string;
}
