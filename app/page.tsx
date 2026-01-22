"use client";

import ProductsFilters from "@/components/views/landingPage/ProductsFilters";
import ProductsList from "@/components/views/landingPage/ProductsList";
import { ICartItem } from "@/interfaces/stateInterfaces";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, isSuccess, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const [filteredState, setFilteredState] = useState<null | ICartItem[]>(null);

  useEffect(() => {
    setFilteredState(data);
  }, [data]);

  return (
    <div className="flex sm:my-10  flex-col gap-4 sm:gap-5">
      <ProductsFilters
        filteredState={filteredState}
        state={data}
        setFilteredState={setFilteredState}
      />
      <ProductsList
        isError={isError}
        isLoading={isLoading}
        data={filteredState}
        isSuccess={isSuccess}
        error={error}
      />
    </div>
  );
}
