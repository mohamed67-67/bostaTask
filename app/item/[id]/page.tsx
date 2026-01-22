import ItemDetailsClientComp from "@/components/views/ItemDetails/page";
import { ICartItem } from "@/interfaces/stateInterfaces";
import Image from "next/image";
import Link from "next/link";
// import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const items: ICartItem[] = await fetch(
    "https://fakestoreapi.com/products",
  ).then((res) => res.json());
  return items.map((item) => ({
    id: String(item.id),
  }));
}

export default async function ItemDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item: ICartItem = await fetch(
    `https://fakestoreapi.com/products/${id}`,
  ).then((res) => res?.json());

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
