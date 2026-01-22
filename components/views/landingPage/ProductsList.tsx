import ItemCard from "@/components/ItemCard";
import SkeletalLoader from "@/components/Loaders/SkeletonLoader";
import Pagination from "@/components/Pagination";
import { IProductsList } from "@/interfaces/componentsInterfaces";
import { ICartItem } from "@/interfaces/stateInterfaces";
import { Fragment, useEffect, useState } from "react";

export default function ProductsList({
  isError,
  isLoading,
  isSuccess,
  error,
  data,
}: IProductsList) {
  const [current, setCurrentPage] = useState(1);
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [current]);
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      {isLoading && (
        <div className="largeGrid w-full gap-10">
          {Array.from({ length: 12 }).map((_, index: number) => (
            <div className="w-full mb-3" key={index}>
              <SkeletalLoader className="h-20 w-full rounded-full" />
              <SkeletalLoader className="h-5 mt-3 w-full rounded-full" />
              <SkeletalLoader className="h-5 mt-3 w-full rounded-full" />
            </div>
          ))}
        </div>
      )}
      {isSuccess && data && data?.length > 0 ? (
        <div className="w-full">
          <div className="largeGrid w-full">
            {data
              ?.slice((current - 1) * 10, current * 10)
              .map((item: ICartItem) => (
                <Fragment key={item.id}>
                  <ItemCard props={item} />
                </Fragment>
              ))}
          </div>
          <div className="mt-5 flex justify-center">
            <Pagination
              currentPage={current}
              setCurrentPage={setCurrentPage}
              perPage={10}
              totalCount={data?.length}
            />
          </div>
        </div>
      ) : (
        data?.length === 0 && (
          <div>
            <p>No products found</p>
          </div>
        )
      )}
      {isError && <div className="error">{error?.message}</div>}
    </div>
  );
}
