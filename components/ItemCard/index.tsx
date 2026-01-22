import { ICardComp } from "@/interfaces/componentsInterfaces";
import { trimText } from "@/utils/helpers";
import Image from "next/image";
import ButtonComp from "../Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/cartSlice";

export default function ItemCard({ props }: { props: ICardComp }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3 border justify-between border-bcolor rounded-xl p-3 h-full w-full max-w-[350px]">
      <Image
        className="bg-primary object-contain aspect-square rounded-xl px-10 py-2"
        src={props.image}
        alt={props.title}
        width={500}
        height={500}
        priority
      />
      <p className="bg-darkg rounded-xl capitalize font-medium text-sm w-max py-1 px-3 ">
        {props.category}
      </p>
      <p className="text-sm sm:text-base" title={props.description}>
        {trimText({ length: 75, text: props.description })}
      </p>
      <p className="font-semibold text-secondary text-lg">${props.price}</p>
      <div className="mt-5 flex justify-center gap-5 items-center">
        <ButtonComp
          link={`/item/${props.id}`}
          title="View Details"
          className="text-sm py-1"
        />
        <ButtonComp
          onClick={() => dispatch(addToCart(props))}
          dark
          title="Add"
          icon="/icons/shopping.svg"
          className="text-sm py-1"
        />
      </div>
    </div>
  );
}
