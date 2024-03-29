"use client";

import Image from "next/image";

import { toast } from "react-hot-toast";

import { X } from "lucide-react";

import { CartProduct, Product } from "@/types";
import React from "react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
 const cart = useCart();

 const onRemove =()=>{
cart.removeItem(data.id)


 }

 const formatDate = (date:any) => date ? new Date(date).toLocaleDateString() : 'N/A';


  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48`">
        <Image
          fill
          src={data.images[0].url}
          alt="Cart item"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 ">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.task.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.option.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{formatDate(data?.bookingDetails?.fromDate)}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {formatDate(data?.bookingDetails?.toDate)}
            </p>
          </div>
          <Currency value={data.price}/>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
