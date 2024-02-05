"use client";

import { BookingDetails, Product } from "@/types";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Currency from "@/components/ui/currency";
import MyButton from "@/components/ui/my-button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { DatePickerWithPresets } from "./date-picker";
import { calculateDaysBetweenDates } from "@/lib/utils";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {



  const cart = useCart();
  //cart add item

  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({ fromDate: null, toDate: null });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const days:number = calculateDaysBetweenDates(bookingDetails.fromDate, bookingDetails.toDate);
      const newTotalPrice = days * Number(data.price);
      console.log(data.price)
      console.log(newTotalPrice)
      setTotalPrice(newTotalPrice);
   
  }, [bookingDetails, data.price]); 


  // Update booking details on date change
  const handleDateChange = (date: Date | null) => {
    setBookingDetails({
      ...bookingDetails,
      fromDate: new Date(),
      toDate:date , // Update this as needed
    });
    // Additional actions
  };

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const cartProduct = {
      ...data,
      bookingDetails,
    };

    cart.addItem(cartProduct);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col  gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold  text-black">task:</h3>
          <>{data?.task?.name}</>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold  text-black">option:</h3>
          <>{data?.option?.name}</>
        </div>
       { data.isBookable&&<div className="flex items-center gap-x-4">
          <h3 className="font-semibold  text-black">booking price:</h3>
          <>
          <Currency value={totalPrice} />

          </>
        </div>}
        <div>
        {data?.isBookable&& <DatePickerWithPresets onDateChange={handleDateChange} />}  
        </div>
      </div>
    { bookingDetails.toDate && <div className="mt-10 flex items-center gap-x-3">
        <MyButton onClick={onAddtoCart} className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </MyButton>
      </div>}
    </div>
  );
};

export default Info;
