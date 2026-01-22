import { ICartItem } from "./stateInterfaces";

export interface ICardComp {
  [index: string]: string | number | object | undefined;
  id: number;
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

export interface IInlineLoader {
  size?: number;
  className?: string;
}
export interface IButtonComp {
  title: string;
  loading?: boolean;
  icon?: string;
  className?: string;
  type?: "button" | "reset" | "submit";
  loadercomp?: IInlineLoader;
  dark?: boolean;
  onClick?: () => void;
  link?: string;
  disabled?: boolean;
}

export interface IinputComp<T> {
  onChange: (val: T) => void;
  label?: string;
  name?: string;
  id?: string;
  error?: string | null;
  value?: string | number | undefined;
  placeholder?: string;
  className?: string;
  type?: HTMLInputElement["type"];
  min?: number;
  max?: number;
  required?: boolean;
}

export interface ISelectComp extends IinputComp<
  React.ChangeEvent<HTMLSelectElement>
> {
  options: Array<{ label: string; value: string | number }>;
  defaultValue?: string | number;
}

export interface IPagination {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  perPage: number;
}

export interface IProductsList {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: ICartItem[] | null;
  error: Error | null;
}

export interface IProductsFilter {
  setFilteredState: React.Dispatch<React.SetStateAction<null | ICartItem[]>>;
  state: null | ICartItem[];
  filteredState: null | ICartItem[];
}
