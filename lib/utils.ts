import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",

  currency: "USD",
});


export const calculateDaysBetweenDates = (startDate: Date | null, endDate: Date | null): number => {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const difference = end.getTime() - start.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));

  return days;
};
