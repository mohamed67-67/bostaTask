"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/services/products";
import InlineLoader from "@/components/Loaders/InlineLoader";
import ItemDetailsClientComp from "@/components/views/ItemDetails/page";
import { ICartItem } from "@/interfaces/stateInterfaces";
import Image from "next/image";
import Link from "next/link";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
  });

  if (isLoading) {
    return (
      <div className="py-5 sm:py-10 w-full flex justify-center">
        <InlineLoader size={50} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-5 sm:py-10 w-full text-center">
        <p>Error loading product: {error?.message || "Unknown error"}</p>
        <Link href="/" className="text-secondary">Go back to products</Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-5 sm:py-10 w-full text-center">
        <p>Product not found</p>
        <Link href="/" className="text-secondary">Go back to products</Link>
      </div>
    );
  }

  const item: ICartItem = data;

  return (
    <div className="py-5 sm:py-10 w-full">
      <Link href={"/"} className=" text-secondary">
        <p className="pb-10">&#706; Go to products</p>
      </Link>
      <div className="flex flex-col gap-3 sm:gap-0 sm:grid w-full grid-cols-2">
        <div className="w-full flex justify-center rounded-2xl p-10 bg-darkg col-span-1">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            className="object-contain aspect-3/2"
          />
        </div>
        <div className="w-full flex flex-col justify-evenly col-span-1 sm:px-5">
          <p className="bg-darkg rounded-xl capitalize font-medium text-sm w-max py-1 px-3 ">
            {item.category}
          </p>
          <h2>{item.title}</h2>
          <p className="flex items-center">
            <span className="text-2xl text-yellow-500">&#9734;</span>
            <span>{item.rating.rate}</span>
            <span className="ps-2 text-sm text-gray-600">
              ({item.rating.count} reviews)
            </span>
          </p>
          <p className="text-2xl font-semibold text-secondary">${item.price}</p>
          <div>
            <p>Description:</p>
            <p className="text-sm">{item.description}</p>
          </div>
          <ItemDetailsClientComp item={item} />
        </div>
      </div>
    </div>
  );
}
