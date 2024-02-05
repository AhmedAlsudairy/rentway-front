"use client";

import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMOunted] = useState(false);

  useEffect(() => {
    setIsMOunted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold ">{formatter.format(Number(value))}</div>
  );
};

export default Currency;
