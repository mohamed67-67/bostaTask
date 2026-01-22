"use client";

import { IButtonComp } from "@/interfaces/componentsInterfaces";

import Link from "next/link";
import CommonButton from "./CommonButton";

export default function ButtonComp(props: IButtonComp) {
  return (
    <>
      {props.link ? (
        <Link className="w-full" href={props.link}>
          <CommonButton {...props} />
        </Link>
      ) : (
        <CommonButton {...props} />
      )}
    </>
  );
}
