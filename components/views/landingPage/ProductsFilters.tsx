import SelectComp from "@/components/Select";
import { IProductsFilter } from "@/interfaces/componentsInterfaces";
import { categoryOptions, sortOptions } from "@/utils/constants";
import React from "react";

export default function ProductsFilters({
  setFilteredState,
  state,
  filteredState,
}: IProductsFilter) {
  console.table(state);
  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "asc") {
      setFilteredState((prev) => [...prev!].sort((a, b) => a.price - b.price));
    } else if (e.target.value === "desc") {
      setFilteredState((prev) => [...prev!].sort((a, b) => b.price - a.price));
    } else {
      setFilteredState(filteredState);
    }
  };
  const handleChangecat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setFilteredState(state);
    } else {
      setFilteredState(
        state!.filter((item) => item.category === e.target.value),
      );
    }
  };
  return (
    <div className="flex w-full gap-2 max-w-[700px] justify-center sm:gap-5 flex-wrap sm:flex-nowrap">
      <SelectComp
        options={sortOptions}
        label="sort by price"
        defaultValue={"default"}
        onChange={(e) => handleChangeSort(e)}
      />
      <SelectComp
        options={categoryOptions}
        label="filter by category"
        defaultValue={"all"}
        onChange={(e) => handleChangecat(e)}
      />
    </div>
  );
}
