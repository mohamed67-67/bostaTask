import { IButtonComp } from "@/interfaces/componentsInterfaces";
import React from "react";
import InlineLoader from "../Loaders/InlineLoader";
import Image from "next/image";

export default function CommonButton(props: IButtonComp) {
  const condtionStyle = {
    backgroundColor: props.dark ? "#030213" : "#fff",
    color: props.dark ? "#f3f4f6" : "#030213",
    borderColor: props.dark ? "#f3f4f6" : "#030213",
  };
  return (
    <button
      disabled={props.disabled}
      style={condtionStyle}
      onClick={props.onClick}
      type={props.type || "button"}
      className={`border disabled:cursor-not-allowed disabled:opacity-60 rounded-md w-full cursor-pointer hover:scale-[1.01] duration-200 flex justify-center ${props.className}`}>
      {props.loading ? (
        <InlineLoader
          size={props.loadercomp?.size}
          className={props.loadercomp?.className}
        />
      ) : (
        <div className="flex items-center gap-2">
          {props.icon && (
            <Image src={props.icon} width={15} height={15} alt="" priority />
          )}
          <p className="text-xs sm:text-base">{props.title}</p>
        </div>
      )}
    </button>
  );
}
