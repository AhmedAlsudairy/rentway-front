"use client";

import MyButton from "@/components/ui/my-button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const  router = useRouter()
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <MyButton onClick={()=>router.push("/cart")} className="flex items-center gap-x-4 bg-black px-4 py-2">
        <ShoppingBag size={20} color="White" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </MyButton>
    </div>
  );
};

export default NavbarActions;
