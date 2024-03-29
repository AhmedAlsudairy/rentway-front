import { SizeLimit } from "next";

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;

  name: string;

  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  task: Task;
  option: Option;
  isBookable : boolean 
  images: Image[];
}

export interface BookingDetails {
  fromDate: Date | null;
  toDate: Date | null;
}

export interface CartProduct extends Product {
  bookingDetails?: BookingDetails;
}

export interface Image {
  id: string;
  url: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
}

export interface Option {
  id: string;
  name: string;
  description: string;
}
